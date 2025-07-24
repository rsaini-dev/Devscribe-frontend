import { Calendar, User } from "lucide-react";
import blog1 from "../assets/images/blog.webp";

// Dummy data (for development)
const blogs = [
  {
    id: "1",
    title: "Getting Started with React and Tailwind CSS",
    excerpt:
      "Learn how to set up a modern frontend project using React and Tailwind CSS for blazing fast UI development.",
    image: blog1, // Make sure this image exists
    author: "Rahul Saini",
    date: "July 12, 2025",
  },
  {
    id: "2",
    title: "Getting Started with React and Tailwind CSS",
    excerpt:
      "Learn how to set up a modern frontend project using React and Tailwind CSS for blazing fast UI development.",
    image: blog1, // Make sure this image exists
    author: "Rahul Saini",
    date: "July 12, 2025",
  },
  {
    id: "3",
    title: "Getting Started with React and Tailwind CSS",
    excerpt:
      "Learn how to set up a modern frontend project using React and Tailwind CSS for blazing fast UI development.",
    image: blog1, // Make sure this image exists
    author: "Rahul Saini",
    date: "July 12, 2025",
  },
];
const BlogPreviewCard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl text-zinc-800 dark:text-white font-bold mb-6">
        Latest Blogs
      </h2>

      {/* Blog Cards Container */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow hover:shadow-md  transition-transform duration-300 hover:scale-102 h-full"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-between p-4 flex-grow">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-auto">
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                <a
                  href={`/blog/${blog.id}`}
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPreviewCard;
