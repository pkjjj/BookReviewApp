using AutoMapper;
using Entities.DTO;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Repositories.Interfaces;
using System;
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

        public ReviewController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpPost("SaveReview")]
        public IActionResult SaveReview([FromBody] ReviewDto reviewFromResponse)
        {
            try
            {
                if (reviewFromResponse == null || !ModelState.IsValid)
                    return BadRequest();

                var review = _mapper.Map<Review>(reviewFromResponse);

                var decodedToken = new JwtSecurityTokenHandler().ReadJwtToken(review.ApplicationUser.Token);
                var userName = decodedToken.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name)?.Value;

                var currentUser = _unitOfWork.UserRepository.GetByOneByFilter(c => c.UserName == userName);

                review.ApplicationUser = currentUser;
                //review.ApplicationUserId = currentUser.Id;
                //this.Entry(user).State = EntityState.Unchanged;

                _unitOfWork.ReviewRepository.Insert(review);

                _unitOfWork.Save();

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }  
        }
    }
}
