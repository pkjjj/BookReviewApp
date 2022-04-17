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
    public class BookRepository: GenericRepository<Book>
    {
        public BookRepository(BookReviewerDataContext context) : base(context)
        {
        }

        public IEnumerable<Book> GetAll()
        {
            return base.GetAll();
        }

        public IEnumerable<Book> GetAll(string includeProperty)
        {
            return base.GetAll(includeProperties: includeProperty);
        }

        public IEnumerable<Book> GetAll(Expression<Func<Book, bool>> filter, string includeProperty)
        {
            return base.GetAll(filter: filter, includeProperties: includeProperty);
        }

        public Book GetById(Guid id)
        {
            return base.GetByID(id);          
        }

        public Book GetById(Expression<Func<Book, bool>> filter, string includeProperties)
        {
            return base.GetByID(includeProperties, filter);
        }

    }
}
