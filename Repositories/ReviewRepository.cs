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

        public override IEnumerable<Review> GetAll(Expression<Func<Review, bool>> filter = null,
            Func<IQueryable<Review>, IOrderedQueryable<Review>> orderBy = null,
            string includeProperties = "")
        {
            return base.GetAll(filter: filter, includeProperties: includeProperties, orderBy:orderBy);
        }
    }
}
