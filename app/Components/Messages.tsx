import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../hooks';
import type { User } from '../store/usersSlice';
import MessageItem from './MessageItem';
import Link from 'next/link';
export default function Messages() {
  const usersList = useAppSelector(state => state.users.usersList);
  const currentUser = useAppSelector(state => state.users.currentUser);

  const [listOfFrens, setListOfFrens] = useState<Array<User> | undefined>([]);

  const [withFriends, setWithFriends] = useState<boolean>();

  useEffect(() => {
    if (listOfFrens?.length === 0) {
      setWithFriends(true);
    } else {
      setWithFriends(false);
    }
  });

  let user = useMemo(() => {
    let temp: User = {
      name: '',
      descr: '',
      logo: '',
      id: -1,
    };
    usersList.forEach(user => {
      if (user.id === currentUser.id) {
        temp = user;
      }
    });
    return temp;
  }, [usersList, currentUser]);
  useEffect(() => {
    setListOfFrens(user.chatList);
  });

  return (
    <div className="message col-start-3 col-end-9 bg-violet-500 overflow-auto">
      <div className="message__inner h-full py-8 px-6 flex flex-col items-center gap-4">
        {withFriends && (
          <div className="mt-96 bg-violet-50 px-16 py-8 rounded-xl font-black">
            <Link href="/frens">There are no active chats</Link>
          </div>
        )}
        {!withFriends &&
          listOfFrens?.map(el => (
            <MessageItem name={el.name} logo={el.logo} id={el.id} key={el.id} />
          ))}
      </div>
    </div>
  );
}
