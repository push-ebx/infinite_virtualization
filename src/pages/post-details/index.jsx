import React from 'react';
import {useParams} from "react-router-dom";
import {useGetPostQuery} from "~shared/api/posts";
import {PostCard} from "~entities/post/ui/post-card";
import styles from './styles.module.css'

const Post = () => {
  const {postId} = useParams();
  const {data, isLoading, isError} = useGetPostQuery(postId)

  if (!data && isError) return <h1>Post not found</h1>

  return (
    <div className={styles.post_page}>
      <PostCard
        post={data}
        isLoading={isLoading}
      />
    </div>
  );
};

export {Post};