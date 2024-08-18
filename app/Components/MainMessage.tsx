import Messages from './Messages';
import Navbar from './Navbar';

export default function MainMessage() {
  return (
    <main className="bg-violet-900">
      <div className="container">
        <div className="page grid grid-cols-8 rounded-xl bg-violet-50 overflow-hidden">
          <Navbar />
          <Messages />
        </div>
      </div>
    </main>
  );
}
