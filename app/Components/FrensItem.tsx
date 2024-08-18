import Image from 'next/image';
import frensImg from './../../public/avatar.jpg';
import Button from './microComponents/Button';
import addFriendImg from './../../public/useraddImg.svg';
import settingsImg from './../../public/more.svg';
import { useAppDispatch } from '../hooks';
import { addToFriens, deleteFromFriends, addToChat } from '../store/usersSlice';
import { useState } from 'react';

interface IFrensItem {
  name: string;
  descr: string;
  logo: string;
  id: number;
  inFriends: boolean;
}

export default function FrensItem({
  name,
  descr,
  logo,
  id,
  inFriends,
}: IFrensItem) {
  const [hiddenBtn, setHiddenBtn] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  function handleAdd() {
    dispatch(
      addToFriens({
        name,
        descr,
        logo,
        id,
      }),
    );
    dispatch(
      addToChat({
        name,
        descr,
        logo,
        id,
      }),
    );
  }
  function handleDelete() {
    dispatch(
      deleteFromFriends({
        name,
        descr,
        logo,
        id,
      }),
    );
  }

  return (
    <div className="frens__item bg-violet-50 flex w-full p-4 rounded-xl gap-4 relative">
      <div className="frens__item-logo rounded-full overflow-hidden">
        <Image src={frensImg} alt="" width={50} height={50} />
      </div>
      <div className="frens__item-descr">
        <div className="frens__item-name text-lg">{name}</div>
        <div className="frens__item-desc text-sm">{descr}</div>
      </div>
      {inFriends && (
        <>
          <Button
            onClick={() => setHiddenBtn(prev => !prev)}
            className="absolute top-2 right-2"
          >
            <Image src={settingsImg} alt="" />
          </Button>
          <div
            className={`frens__more-block absolute right-2 top-8 border border-violet-400 bg-violet-50 rounded-xl p-2 text-red-500 ${
              hiddenBtn ? 'hidden' : ''
            }`}
          >
            <Button onClick={handleDelete}>Delete</Button>
          </div>
        </>
      )}
      {!inFriends && (
        <Button onClick={handleAdd} className="absolute top-2 right-2">
          <Image src={addFriendImg} alt="" width={20} />
        </Button>
      )}
    </div>
  );
}
