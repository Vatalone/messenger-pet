'use client';
import { useEffect, useState } from 'react';
import FeedPost from './FeedPost';
import { useAppSelector } from '@/app/hooks';
import type { Post } from '@/app/store/postsSlice';

export default function FeedPosts() {
  const postsArr = useAppSelector(state => state.posts.postsArr);
  const [sortedPosts, setSortedPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    setSortedPosts([...postsArr].sort((a, b) => b.id - a.id));
  }, [postsArr]);
  return (
    <div className="feed__posts flex flex-col pt-10 gap-12 w-full items-center pb-6">
      {sortedPosts.map(post => (
        <FeedPost
          text={post.text}
          img={post.img}
          likesCount={post.likesCount}
          id={post.id}
          name={post.userName}
          time={post.time}
          key={post.id}
        ></FeedPost>
      ))}
    </div>
  );
}
