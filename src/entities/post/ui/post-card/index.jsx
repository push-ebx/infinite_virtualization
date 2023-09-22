import React from 'react';
import {Link} from "react-router-dom";
import styles from './styles.module.css'

const PostCard = ({post, isLoading}) => {
  if (isLoading) return <h1>Загрузка...</h1>

  return (
    <div className={styles.post_card}>
      <Link to="/posts">Назад</Link>
      <h2>{post.id}. {post.title}</h2>
      <h3>UserId: {post.userId}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export {PostCard};