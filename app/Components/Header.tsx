
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__inner flex justify-between items-center h-20">
          <div className="header__siteLogo">
            <img src='./../../public/next.svg' alt="" />
          </div>
					<input type="text" className="header__search" />
					<div className="header__profiles">
						<img src="" alt="" />
						<button className="header__profiles-settings">
							<img src="" alt="" />
						</button>
					</div>
        </div>
      </div>
    </header>
  );
}
