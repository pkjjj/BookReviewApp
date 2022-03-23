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
        private readonly BookReviewerDataContext _context;
        public UserRepository(BookReviewerDataContext context) : base(context)
        {
            _context = context;
        }

        public IEnumerable<ApplicationUser> GetAll(Expression<Func<ApplicationUser, bool>> filter)
        {
            return base.GetAll(filter: filter);
        }

        public IEnumerable<ApplicationUser> GetAll(string includeProperty)
        {
            return base.GetAll(includeProperties: includeProperty);
        }

        public ApplicationUser GetById(Guid id)
        {
            return base.GetByID(id.ToString());
        }

        public override ApplicationUser GetByOneByFilter(Expression<Func<ApplicationUser, bool>> filter)
        {
            return base.GetByOneByFilter(filter);
        }
    }
}
