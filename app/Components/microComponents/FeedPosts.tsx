'use client';
import { useState } from 'react';
import FeedPost from './FeedPost';

export default function FeedPosts() {
  const [sortedPosts, setSortedPosts] = useState();
  return (
    <div className="feed__posts flex flex-col pt-10 gap-4 w-full items-center">
      <FeedPost></FeedPost>
      <FeedPost></FeedPost>
    </div>
  );
}
