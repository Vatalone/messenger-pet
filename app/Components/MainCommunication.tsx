import Comms from './Communication';
import Navbar from './Navbar';

export default function CommsMain() {
  return (
    <main className="bg-violet-900">
      <div className="container">
        <div className="page grid grid-cols-8 rounded-xl bg-violet-50 overflow-hidden">
          <Navbar />
          <Comms />
        </div>
      </div>
    </main>
  );
}
