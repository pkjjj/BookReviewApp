using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
    public class ProfileReviewDto
    {
        public Guid Id { get; set; }
        public string Description { get; set; }
        public string Rating { get; set; }
        public DateTime Created { get; set; }
        public Guid BookId { get; set; }
        public string BookName { get; set; }
        public string BookAuthor { get; set; }
        public DateTime BookDateCreated { get; set; }
        public int BookPageSize { get; set; }
        public string BookDescription { get; set; }
        public string BookImageCover { get; set; }
        public double BookRating { get; set; }
    }
}
