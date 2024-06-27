import Feed from './Feed';
import Navbar from './Navbar';

export default function Main() {
  return (
    <main className="bg-violet-900">
      <div className="container">
        <div className="page-main grid grid-cols-8 rounded-xl bg-violet-50">
          <Navbar />
          <Feed />
        </div>
      </div>
    </main>
  );
}
