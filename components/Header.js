import { navLinks } from "@/utils/data-constants";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col w-screen">
      <div className="banner flex justify-evenly items-center text-[#EB4C6B] bg-black h-[32px] text-xs">
        <div className="flex gap-2">
          <Image src="/red-icon.png" height={16} width={16} alt="Red Banner Icon" />
          Lorem ipsum dolor
        </div>
        <div className="hidden sm:flex gap-2">
          <Image src="/red-icon.png" height={16} width={16} alt="Red Banner Icon" />
          Lorem ipsum dolor
        </div>
        <div className="hidden sm:flex gap-2">
          <Image src="/red-icon.png" height={16} width={16} alt="Red Banner Icon" />
          Lorem ipsum dolor
        </div>
      </div>
      <nav className="flex flex-col justify-between items-center border-b-slate-300 border-b-[1px]">
        <div className="flex sm:my-8 my-6 lg:px-[100px] px-3 w-full items-center justify-between">
          <div className="flex gap-4 items-center">
            <Image
              src="/menu.png"
              height={36}
              width={36}
              alt="Options Menu"
              className="lg:hidden sm:h-[36px] sm:w-[36px] h-[24px] w-[24px]"
            />
            <Image
              src="/logo.png"
              height={36}
              width={36}
              alt="Logo"
              className="sm:h-[36px] sm:w-[36px] h-[24px] w-[24px]"
            />
          </div>
          <div className="sm:text-4xl text-xl font-bold lg:translate-x-[100px] translate-x-6">
            LOGO
          </div>
          <div className="flex sm:gap-6 gap-4 items-center">
            <Image src="/search-normal.png" height={24} width={24} alt="Search" />
            <Image src="/heart.png" height={24} width={24} alt="Heart" />
            <Image src="/shopping-bag.png" height={24} width={24} alt="Shopping" />
            <Image
              src="/profile.png"
              height={24}
              width={24}
              alt="Profile"
              className="hidden lg:block"
            />
            <div className="lg:flex hidden gap-1 items-center font-bold">
              ENG
              <Image src="/arrow-down.png" height={16} width={16} alt="Down Arrow" />
            </div>
          </div>
        </div>
        <ul className="sm:flex hidden w-fit gap-14 text-xl font-bold my-4 ">
          {navLinks.map((item) => (
            <li key={item} className="uppercase cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
