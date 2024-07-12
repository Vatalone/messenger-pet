import FrensItem from './FrensItem';
import { useAppSelector, useAppDispatch } from '../hooks';
import { pushusers } from '../store/usersSlice';
import { useEffect, useMemo } from 'react';
import { friendsEnv } from '../store/usersSlice';

let added: boolean = false;

export default function Frens() {
  const dispatch = useAppDispatch();

  const frensList = useAppSelector(state => state.users.friendsList);
  const usersList = useAppSelector(state => state.users.usersList);
  const currentUser = useAppSelector(state => state.users.currentUser);
  const usersListWithoutCurr = usersList.filter(
    user => user.id !== currentUser.id,
  );

  const user = useMemo(() => {
    let temp: friendsEnv = {
      id: -1,
      list: [],
      others: [],
    };
    frensList.forEach(user => {
      if (user.id === currentUser.id) {
        temp = user;
      }
    });
    return temp;
  }, [frensList, currentUser]);

  useEffect(() => {
    if (user.others.length === 0 && added === false) {
      dispatch(pushusers(usersListWithoutCurr));
      added = true;
    }
  }, [currentUser]);

  return (
    <div className="frens col-start-3 col-end-9 bg-violet-500 overflow-auto">
      <div className="frens__inner h-full py-8 px-6">
        <h2 className="text-violet-50 text-2xl">Your friens</h2>
        <div className="frens__list flex flex-col items-center gap-4 w-full pb-6 pt-6">
          {user?.list?.map(fren => (
            <FrensItem
              name={fren.name}
              descr={fren.descr}
              logo={fren.logo}
              id={fren.id}
              key={fren.id}
              inFriends={true}
            />
          ))}
        </div>
        <h2 className="text-violet-50 text-2xl">Other people</h2>
        <div className="others__list flex flex-col items-center gap-4 w-full pb-6 pt-6">
          {user.others.map(user => (
            <FrensItem
              name={user.name}
              descr={user.descr}
              logo={user.logo}
              id={user.id}
              inFriends={false}
              key={user.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
