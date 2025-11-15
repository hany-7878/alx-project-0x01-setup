import React from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div className="p-8">
        <Header/>
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid gap-4">
        <PostCard title="Post 1" description="This is the first post" />
        <PostCard title="Post 2" description="This is the second post" />
      </div>
    </div>
  );
};

export default PostsPage;
