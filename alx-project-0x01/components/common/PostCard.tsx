import React from "react";

interface PostCardProps {
  title: string;
  description: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, description }) => {
  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
};

export default PostCard;
