export const featuredPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt:
      "Learn the basics of React and how to create your first component.",
    image: "https://source.unsplash.com/random/600x400/?react",
    date: "May 15, 2023",
    category: "React",
    content: "<p>This is the full content of the blog post about React...</p>",
  },
  // Add more posts...
];

export const allPosts = [
  ...featuredPosts,
  {
    id: 4,
    title: "Advanced Tailwind CSS Techniques",
    excerpt:
      "Explore advanced techniques for using Tailwind CSS in your projects.",
    image: "https://source.unsplash.com/random/600x400/?tailwind",
    date: "June 2, 2023",
    category: "CSS",
    content:
      "<p>This is the full content of the blog post about Tailwind CSS...</p>",
  },
  // Add more posts...
];
