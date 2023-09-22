import { Routes, Route } from "react-router";
import { Post } from '~pages/post-details'
import { PostsList } from "~pages/posts-list/";
import { NotFoundPage } from "~pages/not-found/";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts" element={<PostsList />} />
      <Route path="/posts/:postId" element={<Post />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};