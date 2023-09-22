import React, {useState} from 'react';
import styles from "./styles.module.css"
import {InfinityPosts} from "~widgets/InfinityPosts";
import {useGetPostsQuery} from "~shared/api/posts";

const PostsList = () => {
  const [page, setPage] = useState(1)
  const {data = [], isLoading} = useGetPostsQuery({page, limit: 20})

  if (isLoading) return <h1>Загрузка...</h1>

  return (
    <div className={styles.list}>
      <InfinityPosts
        hasNextPage={data.length < 100}
        isNextPageLoading={isLoading}
        items={data}
        loadNextPage={() => setPage(page => page + 1)}
      />
    </div>
  );
};

export {PostsList};