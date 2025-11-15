import { useState } from "react";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  // State to store the post being added or edited
  const [post, setPost] = useState<PostData | null>(null);

  // State to track if modal is open
  const [isModalOpen, setModalOpen] = useState(false);

  // Handler to add a new post
  const handleAddPost = (newPost: PostData) => {
    setPost({ ...newPost, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
            <PostCard title={title} body={body} userId={userId} id={id} key={key} />
          ))}
        </div>
      </main>

      {/* Render modal only if isModalOpen is true */}
      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
};

// Fetch posts at build time
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: { posts },
  };
}

export default Posts;
