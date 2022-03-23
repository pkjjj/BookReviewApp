using Entities.Context;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repositories
{
    public class ReviewRepository: GenericRepository<Review>
    {
        
        public ReviewRepository(BookReviewerDataContext context) : base(context)
        {
        }

        public IEnumerable<Review> GetAll(Expression<Func<Review, bool>> filter)
        {
            return base.GetAll(filter: filter);
        }

        public IEnumerable<Review> GetAll(string includeProperty)
        {
            return base.GetAll(includeProperties: includeProperty);
        }
        public IEnumerable<Review> GetAll(Expression<Func<Review, bool>> filter, string includeProperties)
        {
            return base.GetAll(filter: filter, includeProperties: includeProperties);
        }
    }
}
