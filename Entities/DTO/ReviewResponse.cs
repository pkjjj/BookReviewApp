using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTO
{
    public class ReviewResponse
    {
        public Guid Id { get; set; }
        public string Description { get; set; }
        public string Rating { get; set; }
        public DateTime Created { get; set; }
        public string UserToken { get; set; }
        public Guid BookId { get; set; }
    }
}
