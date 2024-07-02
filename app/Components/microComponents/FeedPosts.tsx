'use client';
import { useEffect, useState } from 'react';
import FeedPost from './FeedPost';
import { useAppSelector } from '@/app/hooks';

export default function FeedPosts() {
  const postsArr = useAppSelector(state => state.posts.postsArr);
  const [sortedPosts, setSortedPosts] = useState();
  return (
    <div className="feed__posts flex flex-col pt-10 gap-4 w-full items-center pb-6">
      {postsArr.map(post => (
        <FeedPost
          text={post.text}
          img={post.img}
          likesCount={post.likesCount}
          id={post.id}
          key={post.id}
        ></FeedPost>
      ))}
    </div>
  );
}
