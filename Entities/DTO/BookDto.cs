using Entities.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Entities.DTO
{
    public class BookDto
    {
        public Guid Id { get; set; }
        [Required(ErrorMessage = "Book name is a required field.")]
        [MaxLength(20, ErrorMessage = "Maximum length for the Name is 20 characters.")]
        public string Name { get; set; }
        public string Author { get; set; }
        public DateTime Created { get; set; }
        public int PageSize { get; set; }
        public string Description { get; set; }
        public string ImageCover { get; set; }
        public double Rating { get; set; }
        public IEnumerable<Review> Reviews { get; set; }
    }
}
