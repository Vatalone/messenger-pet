import { useRef, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { addPost } from '../store/postsSlice';
import Image from 'next/image';
import FeedPosts from './microComponents/FeedPosts';
import Button from './microComponents/Button';

//images
import addImg from './../../public/add.svg';
import sendImg from './../../public/sent.svg';

export default function Feed() {
  const dispatch = useAppDispatch();

  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<File | false>(false);
  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
  }

  const inp = useRef<HTMLInputElement>(null);
  const inpFile = useRef<HTMLInputElement>(null);

  function handleLoadImage(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  }

  function addPostFunc() {
    if (image === false && text !== '') {
      dispatch(
        addPost({
          text,
          img: false,
        }),
      );
      if (inp.current) {
        inp.current.value = '';
        setText('');
      }
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        const value = reader.result;
        dispatch(
          addPost({
            text,
            img: value,
          }),
        );
        if (inp.current && inpFile.current) {
          inp.current.value = '';
          inpFile.current.value = '';
          setText('');
          setImage(false);
        }
      };
    }
  }
  return (
    <div className="feed col-start-3 col-end-9 bg-violet-500 overflow-auto">
      <div className="feed__inner flex flex-col h-full items-center py-8 px-6">
        <h1 className="feed__title"></h1>
        <div className="feed__addPost bg-violet-50 w-full px-8 rounded-xl flex justify-between items-center">
          <input
            type="text"
            className="feed__addPost-inp p-2 outline-0 border-b-2 border-violet-900 bg-transparent w-4/5"
            placeholder="Describe your story into new post"
            value={text}
            onChange={handleInput}
            ref={inp}
          />
          <div className="feed__addPost-btns flex gap-4">
            <label htmlFor="feed__addPost-file" className="cursor-pointer">
              <input
                type="file"
                id="feed__addPost-file"
                className="hidden"
                ref={inpFile}
                onChange={handleLoadImage}
              />
              <Image className="w-6" src={addImg} alt="" />
            </label>

            <Button onClick={addPostFunc}>
              <Image className="w-6" src={sendImg} alt="" />
            </Button>
          </div>
        </div>
        <FeedPosts></FeedPosts>
      </div>
    </div>
  );
}
