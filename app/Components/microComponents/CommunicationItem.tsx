import { useAppSelector } from '@/app/hooks';

interface ICommunicationItem {
  text: string;
  getterId: number;
  addresserId: number;
}
export default function CommunicationItem({
  text,
  getterId,
  addresserId,
}: ICommunicationItem) {
  const currentUser = useAppSelector(state => state.users.currentUser);
  return (
    <li
      className={`comms__item ${
        addresserId === currentUser.id
          ? 'self-end bg-violet-50'
          : 'self-start bg-violet-700 text-violet-50'
      } px-6 py-2 rounded-xl max-w-96 shadow-xl`}
    >
      {text}
    </li>
  );
}
