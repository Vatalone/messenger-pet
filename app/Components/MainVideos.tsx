import Navbar from './Navbar';
import Videos from './Videos';

export default function VideosMain() {
  return (
    <main className="bg-violet-900">
      <div className="container">
        <div className="page grid grid-cols-8 rounded-xl bg-violet-50 overflow-hidden">
          <Navbar />
          <Videos />
        </div>
      </div>
    </main>
  );
}
