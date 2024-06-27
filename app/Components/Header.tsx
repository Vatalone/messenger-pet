import Image from 'next/image';
import Link from 'next/link';
import Button from './microComponents/Button';
import logo from './../../public/logo.svg';
import avatar from './../../public/avatar.jpg';
import downArrow from './../../public/arrow-down.svg';
import search from './../../public/search-01-stroke-rounded.svg';
//imports

export default function Header() {
  return (
    <header className="border-b-2 border-violet-900 py-2 bg-violet-50">
      <div className="container">
        <div className="header__inner flex justify-between items-center h-20">
          <Link
            className="header__siteLogo outline-none flex items-center gap-4"
            href="/"
          >
            <Image
              src={logo}
              alt="logo"
              width={60}
              height={60}
            />
            <p className="text-2xl">Logo</p>
          </Link>
          <div className="posts__input  relative">
            <input
              type="text"
              placeholder="find post"
              className="header__search outline-none px-3 py-1 border-grey border-2 rounded-xl bg-inherit text-inherit transition-all focus:border-violet-900"
            />
            <Button className="absolute right-2 top-2">
              <Image src={search} alt="search" />
            </Button>
          </div>
          <div className="header__profiles flex items-center gap-2">
            <Link href="/messages" className="outline-none">
              <Image
                src={avatar}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
            <Button className="header__profiles-settings">
              <Image src={downArrow} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
