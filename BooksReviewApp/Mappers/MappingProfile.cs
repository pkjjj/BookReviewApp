using AutoMapper;
using Entities.DTO;
using Entities.Models;
using System;

namespace BooksReviewApp.Mappers
{
    public class MappingProfile: AutoMapper.Profile
    {
        public MappingProfile()
        {
            CreateMap<UserForRegistrationDto, ApplicationUser>()
                .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));
            CreateMap<Book, BookDto>()
                .ForMember(u => u.ImageCover, opt => opt.MapFrom(x => Convert.ToBase64String(x.ImageCover, 0, x.ImageCover.Length)));
            CreateMap<ReviewResponse, Review>()
                .ForMember(u => u.Id, opt => opt.MapFrom(x => x.Id.ToString() == null ? Guid.NewGuid() : x.Id));
            CreateMap<Review, ProfileReviewDto>()
                .ForMember(u => u.BookAuthor, opt => opt.MapFrom(x => x.Book.Author))
                .ForMember(u => u.BookDateCreated, opt => opt.MapFrom(x => x.Book.Created))
                .ForMember(u => u.BookName, opt => opt.MapFrom(x => x.Book.Name)) 
                .ForMember(u => u.BookPageSize, opt => opt.MapFrom(x => x.Book.PageSize))
                .ForMember(u => u.BookDescription, opt => opt.MapFrom(x => x.Book.Description))
                .ForMember(u => u.BookRating, opt => opt.MapFrom(x => x.Book.Rating))
                .ForMember(u => u.BookImageCover, opt => opt.MapFrom(x => Convert.ToBase64String(x.Book.ImageCover, 0, x.Book.ImageCover.Length)));
            CreateMap<Review, ReviewDto>()
                .ForMember(u => u.UserAvatar, opt => opt.MapFrom(x => x.ApplicationUser.Avatar))
                .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.ApplicationUser.Name));
            CreateMap<ApplicationUser, ApplicationUserDto>();
        }
    }
}
