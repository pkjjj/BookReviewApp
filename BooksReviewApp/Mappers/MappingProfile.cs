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
            CreateMap<ReviewDto, Review>()
                .ForMember(u => u.Id, opt => opt.MapFrom(x => Guid.NewGuid()));
        }
    }
}
