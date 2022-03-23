using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Review
    {
        public Guid Id { get; set; }
        public string Description { get; set; }      
        public string Rating { get; set; }
        public DateTime Created { get; set; }

        [ForeignKey("ApplicationUserId")]
        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }

        
        public Book Book { get; set; }
        public Guid BookId { get; set; }

    }
}
