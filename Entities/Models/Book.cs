using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Book
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Book name is a required field.")]
        [MaxLength(20, ErrorMessage = "Maximum length for the Name is 20 characters.")]
        public string Name { get; set; }
        public string Author { get; set; }
        public DateTime Created { get; set; }
        public int PageSize { get; set; }

        [Column(TypeName = "text")]
        public string Description { get; set; }
        public byte[] ImageCover { get; set; }
        public double Rating { get; set; }
        public IEnumerable<Review> Reviews { get; set; }
        public IEnumerable<ApplicationUser> Users { get; set; }

    }
}
