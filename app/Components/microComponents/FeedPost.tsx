import Image from 'next/image';
import Button from './Button';

//images
import favImg from './../../../public/favourite.svg';
import comImg from './../../../public/comment.svg';
import repostImg from './../../../public/repost.svg';

export default function FeedPost() {
  let img: boolean = false;
  return (
    <div className="feed__post bg-violet-50 w-4/5 px-4 py-6 rounded-xl shadow-lg">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam deleniti neque totam delectus nisi
        laudantium velit, quia reiciendis! Maxime, aut.
      </p>
      {img && <Image src={''} alt="image" />}
      <div className="feedpost__actionBtns flex gap-4 mt-4">
        <Button>
          <Image src={favImg} alt="like" className="w-5" />
        </Button>
        <Button>
          <Image
            src={comImg}
            alt="comment"
            className="w-5"
          />
        </Button>
        <Button>
          <Image
            src={repostImg}
            alt="repost"
            className="w-5"
          />
        </Button>
      </div>
    </div>
  );
}
