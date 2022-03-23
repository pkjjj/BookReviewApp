using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Models
{
    public class IncludedProperties
    {
        public string ParentProperty { get; set; }
        public string ChildProperty { get; set; } = null;
    }
}
