using AutoMapper;
using Entities.Context;
using Entities.DTO;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Repositories.Interfaces;
using System;
using System.Data.Common;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;

namespace BooksReviewApp.Controllers
{
    [Route("review")]
    public class ReviewController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly BookReviewerDataContext _context;

        public ReviewController(IUnitOfWork unitOfWork, IMapper mapper, BookReviewerDataContext context)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _context = context;
        }

        [HttpPost("SaveReview")]
        public IActionResult SaveReview([FromBody] ReviewDto reviewFromResponse)
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
    }
}
