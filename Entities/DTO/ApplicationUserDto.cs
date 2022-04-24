using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
    public class ApplicationUserDto
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public byte[] Avatar { get; set; }
        public IEnumerable<ReviewDto> Reviews { get; set; }
        public IEnumerable<BookDto> Books { get; set; }
    }
}
