import React from "react";
import styles from './styles.module.css'
import {FixedSizeList as List} from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import {PostRow} from "~entities/post/ui/post-row";

function InfinityPosts({hasNextPage, isNextPageLoading, items, loadNextPage}) {
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  const loadMoreItems = isNextPageLoading ? () => {
  } : loadNextPage;

  const isItemLoaded = index => !hasNextPage || index < items.length;

  const Item = ({index, style}) => {
    let post;
    if (!isItemLoaded(index)) {
      post = "Loading...";
    } else {
      post = items[index];
    }

    return <PostRow style={style} post={post}/>
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {
        ({onItemsRendered, ref}) =>
          (<List
            height={750}
            itemCount={itemCount}
            itemSize={130}
            onItemsRendered={onItemsRendered}
            ref={ref}
            className={styles.list}
          >
            {Item}
          < /List>)
      }
    </InfiniteLoader>
  );
}

export {InfinityPosts}