import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';

import Button from './microComponents/Button';
import CommunicationItem from './microComponents/CommunicationItem';
import { addMessage, type Message, type User } from '../store/usersSlice';

import ava from '@/public/avatar.jpg';
import send from '@/public/sent.svg';

export default function Communication() {
  const chatterTemp = useAppSelector(state => state.users.currentChatter);
  const currentUser = useAppSelector(state => state.users.currentUser);
  const usersList = useAppSelector(state => state.users.usersList);

  const textInput = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const [messages, setMessages] = useState<Array<Message>>([]);
  const chatter = usersList.find(us => us.id === chatterTemp.id);
  const user = usersList.find(us => us.id === currentUser.id);
  useEffect(() => {
    let temp: Message[] = [];
    if (user && chatter) {
      chatter.messages?.forEach(mes => {
        if (mes.getterId === user.id) {
          temp.push(mes);
        }
      });
      user.messages?.forEach(mes => {
        if (mes.getterId === chatter.id) {
          temp.push(mes);
        }
      });
    }
    setMessages([]);
    setMessages(temp.sort((a, b) => a.time - b.time));
  }, [usersList]);

  function handleMessage() {
    if (
      textInput.current &&
      textInput.current.value !== '' &&
      chatter &&
      user
    ) {
      dispatch(
        addMessage({
          text: textInput.current.value,
          getterId: chatter.id,
          addresserId: user.id,
        }),
      );
      textInput.current.value = '';
    }
  }

  return (
    <div className="comms col-start-3 col-end-9 bg-violet-500 relative h-full flex flex-col">
      <div className="comms__info p-4 bg-violet-50 w-full flex justify-between items-center">
        <div className="comms__info-avatar w-8 h-8 overflow-hidden rounded-full">
          <Image src={ava} alt="" />
        </div>
        <div className="comms__info-name font-semibold">{chatter?.name}</div>
        <div className="comms__info-settings"></div>
      </div>
      <div className="comms__inner max-h-[790px] py-8 px-16 overflow-y-auto">
        <ul className="comms__list flex flex-col items-center gap-4">
          {messages.map(mes => (
            <CommunicationItem
              text={mes.text}
              addresserId={mes.addresserId}
              getterId={mes.getterId}
              key={new Date().getTime()}
            />
          ))}
        </ul>
      </div>
      <div className="comms__text w-full bg-transparent px-8 py-4 mt-auto flex justify-center items-center gap-8 absolute bottom-0 z-10">
        <input
          type="text"
          className="comms__text-input w-4/5 p-2 bg-violet-50 text-slate-900 border-b-2 border-violet-500 outline-none rounded-xl shadow-2xl"
          placeholder="Напиши что-нибудь:)"
          ref={textInput}
        />
        <Button
          onClick={handleMessage}
          className="p-2 rounded-full bg-violet-50 shadow-2xl"
        >
          <Image src={send} alt="" className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
