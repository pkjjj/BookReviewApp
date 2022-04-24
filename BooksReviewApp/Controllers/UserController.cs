using AutoMapper;
using Entities.Context;
using Entities.DTO;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BooksReviewApp.Controllers
{
    [Route("user")]
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
            try
            {
                var user = _unitOfWork.UserRepository.GetById(
                    includeProperties: "Books,Reviews.Book",
                    filter: x => x.Id == id);

                if (user == null)
                {
                    return Unauthorized(new AuthResponseDto { ErrorMessage = "Invalid Authentication" });
                }

                var userDto = _mapper.Map<ApplicationUserDto>(user);

                userDto.Reviews = _mapper.Map<IEnumerable<ReviewDto>>(userDto.Reviews);
                userDto.Reviews = userDto.Reviews.OrderByDescending(x => x.Created);

                return Ok(userDto);
            }
            catch (Exception ex)
            {
                return BadRequest("Not valid user");

            }
        }

        [HttpGet("GetUser")]
        public IActionResult GetUserBooks([FromQuery] string id)
        {
            if (Guid.TryParse(id, out Guid guidId))
            {
                var user = _unitOfWork.UserRepository.GetById(
                    includeProperties: "Books,Reviews.Book",
                    filter: x => x.Id == guidId.ToString());

                if (user == null)
                {
                    return Unauthorized(new AuthResponseDto { ErrorMessage = "Invalid Authentication" });
                }

                var userDto = _mapper.Map<ApplicationUserDto>(user);

                userDto.Reviews = _mapper.Map<IEnumerable<ReviewDto>>(userDto.Reviews);
                userDto.Reviews = userDto.Reviews.OrderByDescending(x => x.Created);

                return Ok(userDto);
            }

            return BadRequest("Not valid user");
        }

        [HttpPatch("AddBookToUser/{bookId}/{userId}")]
        public IActionResult AddBookToUser(string bookId, string userId)
        {
            try
            {
                if (Guid.TryParse(bookId, out Guid guidId))
                {
                    var book = _unitOfWork.BookRepository.GetById(guidId);

                    if (book == null)
                        return BadRequest("Book doesn't exist");

                    var user = _unitOfWork.UserRepository.GetByID(userId);

                    if (user == null)
                        return BadRequest("User doesn't exist");

                    if (user.Books == null)
                        user.Books = new List<Book>();

                    user.Books.ToList().Add(book);

                    _unitOfWork.UserRepository.Update(user);

                    return Ok(user);
                }
                else
                {
                    return BadRequest("Id forms is not valid");
                }
                    
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
