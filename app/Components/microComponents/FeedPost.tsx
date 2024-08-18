import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { addLike, removePost } from '@/app/store/postsSlice';
import Image from 'next/image';
import Button from './Button';

//images
import favImg from './../../../public/favourite.svg';
import favImgCol from './../../../public/favouriteColored.svg';
import comImg from './../../../public/comment.svg';
import repostImg from './../../../public/repost.svg';
import moreImg from './../../../public/more.svg';
import Link from 'next/link';

interface IFeedPost {
  text: string;
  img: string | null | ArrayBuffer;
  id: number;
  likesCount: number;
  name: string;
  time: number;
}

export default function FeedPost({
  text,
  img,
  id,
  likesCount,
  name,
  time,
}: IFeedPost) {
  const [alreadyLiked, setAlreadyLiked] = useState<boolean>(false);
  const [hiddenBtn, setHiddenBtn] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string>('');

  const [ago, setAgo] = useState<string>('');

  useEffect(() => {
    if (img instanceof ArrayBuffer) {
      const reader = new FileReader();
      reader.readAsDataURL(new Blob([img]));
      reader.onload = () => {
        const base64String = reader.result as string;
        setImageSrc(base64String);
      };
    } else {
      setImageSrc(img as string);
    }

    const countDown: number = new Date().getTime();
    let temp: number = Math.floor((countDown - time) / 1000);
    if (temp === 0) {
      setAgo('just now');
    } else if (temp < 60 && temp > 0) {
      setAgo(temp + 's ago');
    } else if (temp >= 60 && temp < 60 * 60) {
      setAgo(Math.floor(temp / 60) + 'm ago');
    } else if (temp >= 60 * 60 && temp < 60 * 60 * 24) {
      setAgo(Math.floor(temp / (60 * 60)) + 'h ago');
    }
  });

  const like = useRef<HTMLImageElement>(null);

  const dispatch = useAppDispatch();
  function handleLike() {
    if (alreadyLiked === false) {
      dispatch(
        addLike({
          id,
          action: true,
        }),
      );
      setAlreadyLiked(true);
    }
    if (alreadyLiked === true) {
      dispatch(
        addLike({
          id,
          action: false,
        }),
      );
      setAlreadyLiked(false);
    }
  }
  function deletePost() {
    dispatch(removePost(id));
  }

  return (
    <div className="feed__post flex flex-col gap-2 bg-violet-50 w-4/5 px-4 py-6 rounded-xl shadow-lg relative">
      <p>{text}</p>
      {img && (
        <Image
          src={imageSrc}
          alt="image"
          height={400}
          width={500}
          className="self-center rounded-xl"
        />
      )}
      <div className="feedpost__actionBtns flex gap-4 mt-4">
        <Button onClick={handleLike} className="flex gap-1 items-center">
          {likesCount}
          {alreadyLiked && (
            <Image src={favImgCol} alt="like" className="w-5" ref={like} />
          )}
          {!alreadyLiked && (
            <Image src={favImg} alt="like" className="w-5" ref={like} />
          )}
        </Button>
        <Button>
          <Image src={comImg} alt="comment" className="w-5" />
        </Button>
        <Button>
          <Image src={repostImg} alt="repost" className="w-5" />
        </Button>
      </div>
      <div className="feedpost__more absolute right-2 top-2">
        <Button onClick={() => setHiddenBtn(prev => !prev)}>
          <Image src={moreImg} alt="" />
        </Button>
        <div
          className={`feedpost__more-block absolute bg-violet-50 rounded-xl p-2 text-red-500 ${
            hiddenBtn ? 'hidden' : ''
          }`}
        >
          <Button onClick={deletePost}>Delete</Button>
        </div>
      </div>
      <div className="feedpost__name absolute left-2 -bottom-8 text-violet-50 flex gap-4">
        <Link
          href="/"
          className="transition-all hover:border-b hover:border-violet-50"
        >
          {name}
        </Link>
        <div className="feedpost__item">{ago}</div>
      </div>
    </div>
  );
}
