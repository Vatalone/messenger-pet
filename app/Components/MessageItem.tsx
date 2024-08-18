import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeChatter, Message } from '../store/usersSlice';
import Image from 'next/image';
import Button from './microComponents/Button';
import ava from '@/public/avatar.jpg';

interface IMessage {
  name: string;
  logo: string | null | ArrayBuffer;
  id: number;
}

export default function MessageItem({ name, id, logo }: IMessage) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [lastMessage, setLastMessage] = useState<string>('');

  const usersList = useAppSelector(state => state.users.usersList);
  const currentUser = useAppSelector(state => state.users.currentUser);

  useEffect(() => {
    const user = usersList.find(us => us.id === currentUser.id);
    const chatter = usersList.find(us => us.id === id);

    let temp: Message[] = [];
    if (user && user.messages) {
      user.messages.forEach(mes => {
        if (mes.getterId === chatter?.id) temp.push(mes);
      });
      if (temp.length !== 0) {
        setLastMessage(temp[temp.length - 1].text);
      } else {
        setLastMessage('Begin chatting with your fren!');
      }
    }
  });

  function handleRouting() {
    router.push('/comms');
    dispatch(
      changeChatter({
        name,
        logo,
        id,
      }),
    );
  }

  return (
    <div className="flex bg-violet-50 h-24 w-4/5 rounded-xl py-2 px-4 gap-4 relative">
      <Image
        src={ava}
        alt=""
        height={80}
        width={80}
        className="w-20 h-20 rounded-full"
      />
      <div className="w-full">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-slate-600 w-full h-12 overflow-hidden">
          {lastMessage}
        </p>
      </div>
      <Button
        className="w-full h-full absolute top-0 left-0 z-10"
        onClick={handleRouting}
      ></Button>
    </div>
  );
}
