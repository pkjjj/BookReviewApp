using System.IO;

namespace BooksReviewApp.Helpers
{
    public static class FileHelper
    {
        public static byte[] GetImageByPath(string path)
        {
            return File.ReadAllBytes(path);
        }
    }
}
