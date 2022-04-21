using AutoMapper;
using Entities.Context;
using Entities.DTO;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Repositories;
using Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksReviewApp.Controllers
{
    [Route("books")]
    public class BooksController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;      

        public BooksController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet("getbooks")]
        public IActionResult GetBooks()
        {
            try
            {
                var books = _unitOfWork.BookRepository.GetAll(
                    includeProperties: "Reviews,Users");

                var filteredBooks = books
                    .ToList()
                    .Select(u =>
                    {
                        var result = u;
                        result.Reviews = u.Reviews.OrderByDescending(x => x.Created);

                        return result;
                    });

                var booksDto = _mapper.Map<IEnumerable<BookDto>>(filteredBooks);

                return Ok(booksDto);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getbook")]
        public IActionResult GetBook([FromQuery] Guid id)
        {
            try
            {
                var book = _unitOfWork.BookRepository.GetById(book => book.Id == id, "Users,Reviews.ApplicationUser,Reviews.Book");

                //book.Reviews = _unitOfWork.ReviewRepository.GetAll(filter: review => review.BookId == id, includeProperties: "Book,ApplicationUser");

                book.Reviews = book.Reviews.OrderByDescending(r => r.Created);

                var bookDto = _mapper.Map<BookDto>(book);

                return Ok(book);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
