import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.category}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">
          <Link to={`/blog/${post.id}`} className="hover:text-primary">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="text-primary font-medium hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
