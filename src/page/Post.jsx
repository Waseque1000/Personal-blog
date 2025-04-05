import { useParams } from "react-router-dom";
import { allPosts } from "../data/posts";

export default function Post() {
  const { id } = useParams();
  const post = allPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="py-12 text-center">Post not found</div>;
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </div>
  );
}
