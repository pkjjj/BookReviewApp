using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Interfaces
{
    public interface IUnitOfWork
    {
        BookRepository BookRepository { get; }
        ReviewRepository ReviewRepository { get; }
        UserRepository UserRepository { get; }
        void Save();
        void Dispose();
    }
}
