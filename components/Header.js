import { navLinks } from "@/utils/data-constants";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="header-banner">
        <p className="header-banner-item">
          <Image src="/red-icon.png" height={16} width={16} alt="Red Banner Icon" />
          Lorem ipsum dolor
        </p>
        <p className="header-banner-item-hidden">
          <Image src="/red-icon.png" height={16} width={16} alt="Red Banner Icon" />
          Lorem ipsum dolor
        </p>
        <p className="header-banner-item-hidden">
          <Image src="/red-icon.png" height={16} width={16} alt="Red Banner Icon" />
          Lorem ipsum dolor
        </p>
      </div>
      <nav className="header-nav">
        <div className="header-nav-top">
          <div className="header-left-section">
            <Image
              src="/menu.png"
              height={36}
              width={36}
              alt="Options Menu"
              className="header-menu-icon"
            />
            <Image
              src="/logo.png"
              height={36}
              width={36}
              alt="Logo"
              className="header-logo-icon"
            />
          </div>
          <p className="header-logo-text">
            LOGO
          </p>
          <div className="header-right-section">
            <Image src="/search-normal.png" height={24} width={24} alt="Search" className="header-icon" />
            <Image src="/heart.png" height={24} width={24} alt="Heart" className="header-icon" />
            <Image src="/shopping-bag.png" height={24} width={24} alt="Shopping" className="header-icon" />
            <Image
              src="/profile.png"
              height={24}
              width={24}
              alt="Profile"
              className="header-icon header-profile-icon"
            />
            <p className="header-language-selector">
              ENG
              <Image src="/arrow-down.png" height={16} width={16} alt="Down Arrow" className="header-arrow-icon" />
            </p>
          </div>
        </div>
        <nav>
          <ul className="header-nav-links">
            {navLinks.map((item) => (
              <li key={item} className="header-nav-link">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </header>
  );
}
