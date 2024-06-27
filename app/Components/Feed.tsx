import Button from './microComponents/Button';
import Image from 'next/image';

//images
import addImg from './../../public/add.svg';
import FeedPosts from './microComponents/FeedPosts';

export default function Feed() {
  return (
    <div className="feed col-start-3 col-end-9 bg-violet-500 rounded-r-xl">
      <div className="feed__inner flex flex-col h-full items-center py-8 px-6">
        <h1 className="feed__title"></h1>
        <Button className="feed-addPost flex bg-violet-50 w-80 h-20 rounded-md flex items-center justify-center gap-4">
          <h2 className="text-xl">Add new post</h2>
          <Image
            src={addImg}
            alt="add"
            className="w-8"
          ></Image>
        </Button>
        <FeedPosts></FeedPosts>
      </div>
    </div>
  );
}
