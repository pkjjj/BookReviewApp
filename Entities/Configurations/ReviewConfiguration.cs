using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Configurations
{
    public class ReviewConfiguration: IEntityTypeConfiguration<Review>
    {
        public void Configure(EntityTypeBuilder<Review> builder)
        {
            builder.HasData
            (
                new Review
                {
                    Id = new Guid("c9d1c021-49b6-410c-bc78-2d54a9921870"),
                    Created = new DateTime(2022, 02, 03),
                    Description = "Every book I’ve read about Auschwitz has been deeply upsetting. Apart from this book. " +
                    "This book is so emotionless that it reads more like a reference book or a history text book. It is upsetting " +
                    "but it portrays the atrocities so badly that I felt very detached from what I was reading. It was interesting to read " +
                    "the extent of the Jewish Resistance but again I felt like I was in a history lesson. Having read so many books about " +
                    "the subject that were full of emotion and portrayed the atrocities so well I feel quite let down by this book.",
                    BookId = new Guid("c9d4c053-49b6-410c-bc78-2d54a9921870"),
                },
                new Review
                {
                    Id = new Guid("c2d1c021-15b6-410c-bc78-2d54a9921870"),
                    Created = new DateTime(2022, 02, 15),
                    Description = "There have been so many books written about the holocaust and I've read a few however this one didn't leave me with anything" +
                    " to much to take away.This story is about two sisters who risk their lives during world war 2,to help save others who have been targeted by " +
                    "the Nazi's in hopes of saving lives all the while they are putting their own lives at risk in the process.I did find this book was very different " +
                    "to the other World War 2 books I've read before because this one takes mostly outside the camp and not the entire time in it. However these two " +
                    "women and everyone who lived with them were really brave and helped save so many people from certain death at the camps at the hands of the Nazi's." +
                    "I got a lot of back story on the two sisters as well as the others that they either lived or come into contact with so that was some huge information " +
                    "over load which could have been taken out.",
                    BookId = new Guid("c9d4c053-49b6-410c-bc78-2d54a9921870"),
                },
                new Review
                {
                    Id = new Guid("2a490a30-92ce-4d15-9414-5248280c2ce3"),
                    Created = new DateTime(2022, 02, 12),
                    Description = "Since this book is a translation I tried to allow some leeway. I understand that this was written in Dutch by a Dutch writer about what" +
                    " happened in her country so again I tried to allow some leeway.",
                    BookId = new Guid("c9d4c053-49b6-410c-bc78-2d54a9921870"),
                }
            );
        }
    }
}
