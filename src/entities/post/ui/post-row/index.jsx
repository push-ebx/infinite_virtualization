import React from 'react';
import styles from './styles.module.css'
import {Link} from "react-router-dom";

const PostRow = ({post, style}) => {
  return (
    <div style={style}>
      <div className={styles.row}>
        <h1 className={styles.title}>{post.id}. {post.title}</h1>
        <p className={styles.body}>{post.body}</p>
        <Link to={`/posts/${post.id}`} className={styles.post_link}>Просмотр</Link>
      </div>
    </div>
  );
};

export {PostRow};