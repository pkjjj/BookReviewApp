using Entities.Context;
using Entities.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repositories
{
    public class UserRepository: GenericRepository<ApplicationUser>
    {
        public UserRepository(BookReviewerDataContext context) : base(context) { }

        public IEnumerable<ApplicationUser> GetAll(Expression<Func<ApplicationUser, bool>> filter = null, string includeProperties = "")
        {
            return base.GetAll(filter: filter);
        }

        public ApplicationUser GetById(Expression<Func<ApplicationUser, bool>> filter, string includeProperties)
        {
            return base.GetByID(includeProperties, filter);
        }

        public override ApplicationUser GetByOneByFilter(Expression<Func<ApplicationUser, bool>> filter)
        {
            return base.GetByOneByFilter(filter);
        }
    }
}
