using Entities.Configurations;
using Entities.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace Entities.Context
{
    public class BookReviewerDataContext : IdentityDbContext<ApplicationUser>
    {
        public BookReviewerDataContext(DbContextOptions<BookReviewerDataContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new BookConfiguration());
            modelBuilder.ApplyConfiguration(new ReviewConfiguration());

            modelBuilder.Entity<Review>()
                        .HasOne(r => r.ApplicationUser)
                        .WithMany(r => r.Reviews)
                        .HasForeignKey(n => n.ApplicationUserId);
            //modelBuilder.Entity<ApplicationUser>()
            //            .HasMany(r => r.Reviews)
            //            .WithOne(r => r.ApplicationUser);
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Review> Reviews { get; set; }
    }
}
