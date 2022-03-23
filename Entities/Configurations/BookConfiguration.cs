using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Configurations
{
    public class BookConfiguration: IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder.HasData
            (
                new Book
                {
                    Id = new Guid("c9d4c053-49b6-410c-bc78-2d54a9921870"),
                    Name = "Black cake",
                    Created = new DateTime(2022, 01, 01),
                    Author = "Charmaine Wikerson",
                    PageSize = 299,
                    Description = "Charmaine Wilkerson's debut novel is a story of how the inheritance of betrayals, secrets, memories, and even names, " +
                    "can shape relationships and history. Deeply evocative and beautifully written, Black Cake is an extraordinary journey through the life " +
                    "of a family changed forever by the choices of its matriarch.",
                    Rating = 8.2,
                    ImageCover = GetImageByPath("..\\resourses\\bg.jpeg")
                },
                new Book
                {
                    Id = new Guid("3d490a70-94ce-4d15-9414-5248280c2ce3"),
                    Name = "Norwegian wood",
                    Created = new DateTime(1987, 04, 09),
                    Author = "Murakami",
                    PageSize = 459,
                    Description = "Toru, a quiet and preternaturally serious young college student in Tokyo, is devoted to Naoko, a beautiful and " +
                    "introspective young woman, but their mutual passion is marked by the tragic death of their best friend years before.",
                    Rating = 9.1,
                    ImageCover = GetImageByPath("..\\resourses\\norway.jpg")
                },
                new Book
                {
                    Id = new Guid("2a490a70-94ce-4d15-9414-5248280c2ce3"),
                    Name = "Horsewoman",
                    Created = new DateTime(2022, 01, 10),
                    Author = "James Patterson",
                    PageSize = 820,
                    Description = "The Horsewoman is more than a thriller--it's an eye-opening ride through the high-stakes world of equestrian show-jumping. " +
                    "Patterson and Lupica make a great team, writing at a full gallop and with faultless timing of the lives of three fearless women connected by blood, " +
                    "competition, and a passion for fast horses.",
                    Rating = 9.5,
                    ImageCover = GetImageByPath("..\\resourses\\horsewoman.jpeg")
                },
                new Book
                {
                    Id = new Guid("2a490a30-92ce-4d15-9414-5248280c2ce3"),
                    Name = "The midnigth library",
                    Created = new DateTime(2021, 03, 12),
                    Author = "Matt Haig",
                    PageSize = 820,
                    Description = "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to " +
                    "try another life you could have lived. To see how things would be if you had made other choices . . . Would you have done anything different, if " +
                    "you had the chance to undo your regrets?",
                    Rating = 8.2,
                    ImageCover = GetImageByPath("..\\resourses\\library.jpeg")
                },
                new Book
                {
                    Id = new Guid("1a550a72-94ce-4d15-9414-5248280c2ce3"),
                    Name = "Poems",
                    Created = new DateTime(2022, 01, 10),
                    Author = "Alexander Pushkin",
                    PageSize = 821,
                    Description = "The major part of his lyrical poetry was written between 1820 and 1830, but some of his poetical masterpieces were composed in the " +
                    "last seven years of his life, when he was turning his attention to prose. A development can be traced from the sparkling ebullience of his early verse " +
                    "-- the crowning achievement of which is the first chapter of Evgeny Onegin, written in 1823 -- to the concetrated expressiveness and restrained power of his later poetry. ",
                    Rating = 9.1,
                    ImageCover = GetImageByPath("..\\resourses\\poems.jpg")
                },
                new Book
                {
                    Id = new Guid("1a550a72-94ce-4d15-9412-5248280c1ce4"),
                    Name = "The giver",
                    Created = new DateTime(2022, 01, 10),
                    Author = "Lois Lowry",
                    PageSize = 350,
                    Description = "The Giver, the 1994 Newbery Medal winner, has become one of the most influential novels of our time. The haunting story centers on twelve-year-old" +
                    " Jonas, who lives in a seemingly ideal, if colorless, world of conformity and contentment. Not until he is given his life assignment as the Receiver " +
                    "of Memory does he begin to understand the dark, complex secrets behind his fragile community. This movie tie-in edition features cover art from " +
                    "the movie and exclusive Q&A with members of the cast, including Taylor Swift, Brenton Thwaites and Cameron Monaghan",
                    Rating = 9.3,
                    ImageCover = GetImageByPath("..\\resourses\\thegiver.jpg")
                }
            );
        }
        public static byte[] GetImageByPath(string path)
        {
            return File.ReadAllBytes(path);
        }
    }
}
