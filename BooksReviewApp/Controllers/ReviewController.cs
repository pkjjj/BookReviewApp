using AutoMapper;
using Entities.Context;
using Entities.DTO;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace BooksReviewApp.Controllers
{
    [Route("review")]
    public class ReviewController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ReviewController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpPost("SaveReview")]
        public IActionResult SaveReview([FromBody] ReviewResponse reviewFromResponse)
        {
            try
            {
                if (reviewFromResponse == null || !ModelState.IsValid)
                    return BadRequest();

                var review = _mapper.Map<Review>(reviewFromResponse);

                var decodedToken = new JwtSecurityTokenHandler().ReadJwtToken(reviewFromResponse.UserToken);
                var userId = decodedToken.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

                var currentUser = _unitOfWork.UserRepository.GetByOneByFilter(c => c.Id == userId);

                if (currentUser == null)
                    throw new NullReferenceException();

                review.ApplicationUserId = currentUser.Id;

                _unitOfWork.ReviewRepository.Insert(review);

                _unitOfWork.Save();

                return StatusCode(201);
            }
            catch (NullReferenceException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }  
        }

        [HttpPost("UpdateReview")]
        public IActionResult UpdateReview([FromBody] ReviewResponse reviewFromResponse)
        {
            try
            {
                if (reviewFromResponse == null || !ModelState.IsValid)
                    return BadRequest();

                var review = _mapper.Map<Review>(reviewFromResponse);

                var reviewById = _unitOfWork.ReviewRepository.GetByID(review.Id);

                if (reviewById == null)
                {
                    return NoContent();
                }

                reviewById.Description = review.Description;
                reviewById.Created = review.Created;

                _unitOfWork.ReviewRepository.Update(reviewById);

                _unitOfWork.Save();

                return StatusCode(201);
            }
            catch (NullReferenceException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("DeleteReview")]
        public IActionResult DeleteReview([FromQuery] string Id)
        {
            try
            {
                if (Guid.TryParse(Id, out Guid reviewId))
                {
                    var review = _unitOfWork.ReviewRepository.GetByID(reviewId);

                    if (review == null)
                        return BadRequest("Doesn't exist review");

                    _unitOfWork.ReviewRepository.Delete(reviewId);

                    _unitOfWork.Save();

                    return StatusCode(201);
                }
                else
                {
                    return BadRequest("Not valid format id");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetReviews")]
        public IActionResult GetReviews()
        {
            try
            {
                var reviews = _unitOfWork.ReviewRepository.GetAll(
                    includeProperties: "ApplicationUser,Book", 
                    orderBy: x => x.OrderByDescending(x => x.Created));

                return Ok(reviews);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetReviewsByUserId")]
        public IActionResult GetReviewsByUserId([FromQuery] string Id)
        {
            try
            {    
                var reviews = _unitOfWork.ReviewRepository.GetAll(
                      filter: x => x.ApplicationUserId == Id,
                      includeProperties: "ApplicationUser,Book",
                      orderBy: x => x.OrderByDescending(x => x.Created));

                if (reviews == null)
                {
                    return NoContent();
                }

                var reviewsDto = _mapper.Map<IEnumerable<ProfileReviewDto>>(reviews);

                return Ok(reviewsDto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetReviewsByBookId")]
        public IActionResult GetReviewsByBookId([FromQuery] string Id)
        {
            try
            {
                if (Guid.TryParse(Id, out Guid BookId))
                {
                    var reviews = _unitOfWork.ReviewRepository.GetAll(
                    filter: x => x.BookId == BookId,
                    includeProperties: "ApplicationUser,Book",
                    orderBy: x => x.OrderByDescending(x => x.Created));

                    if (reviews == null)
                    {
                        return NoContent();
                    }

                    var reviewsDto = _mapper.Map<IEnumerable<ReviewDto>>(reviews);

                    return Ok(reviewsDto);
                }

                return BadRequest("Not valid Id");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }

}
