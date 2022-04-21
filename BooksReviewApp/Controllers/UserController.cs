using AutoMapper;
using Entities.Context;
using Entities.DTO;
using Microsoft.AspNetCore.Mvc;
using Repositories.Interfaces;
using System;
using System.Linq;

namespace BooksReviewApp.Controllers
{
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UserController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet("GetUser")]
        public IActionResult GetUser([FromQuery] string id)
        {
            if (Guid.TryParse(id, out Guid guidId))
            {
                var user = _unitOfWork.UserRepository.GetById(
                    includeProperties: "Books,Reviews.Book", 
                    filter: x => x.Id == guidId.ToString());

                user.Reviews = user.Reviews.OrderByDescending(x => x.Created);

                if (user == null)
                {
                    return Unauthorized(new AuthResponseDto { ErrorMessage = "Invalid Authentication" });
                }

                return Ok(user);
            }

            return BadRequest("Not valid user");
        }
    }
}
