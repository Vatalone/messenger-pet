import Link from 'next/link';
import Image from 'next/image';

//images
import newsImg from './../../public/news.svg';
import frensImg from './../../public/users.svg';
import messImg from './../../public/message.svg';
import vidsImg from './../../public/player.svg';
import setsImg from './../../public/settings.svg';

export default function Navbar() {
  return (
    <nav className="col-start-1 col-end-3">
      <ul className="nav__list flex flex-col items-start gap-6 py-10 px-12">
        <li className="nav__item">
          <Link href="/" className="nav__item-link">
            <Image src={newsImg} alt=""></Image>feed
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/frens" className="nav__item-link">
            <Image src={frensImg} alt=""></Image>frens
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/messages" className="nav__item-link">
            <Image src={messImg} alt=""></Image>messages
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/videos" className="nav__item-link">
            <Image src={vidsImg} alt=""></Image>videos
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/settings" className="nav__item-link">
            <Image src={setsImg} alt=""></Image>settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
