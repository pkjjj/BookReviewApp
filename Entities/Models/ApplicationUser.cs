using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    public class ApplicationUser: IdentityUser
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public byte[] Avatar { get; set; }
        public IEnumerable<Review> Reviews { get; set; }
        public IEnumerable<Book> Books { get; set; }

        [NotMapped]
        public string Token { get; set; }
    }
}
