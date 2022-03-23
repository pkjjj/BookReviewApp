using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
    public class ReviewDto
    {
        public string Description { get; set; }
        public string Rating { get; set; }
        public DateTime Created { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public Book Book { get; set; }
    }
}
