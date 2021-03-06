using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
    public class ReviewDto
    {
        public Guid Id { get; set; }
        public string Description { get; set; }
        public string Rating { get; set; }
        public DateTime Created { get; set; }
        public string UserName { get; set; }
        public byte[] UserAvatar { get; set; }
    }
}
