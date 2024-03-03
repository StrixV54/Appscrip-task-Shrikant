import { mettaMuse, quickLinks } from "@/utils/data-constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col items-center justify-between sm:px-[100px] p-4 gap-8">
      <div className="w-full flex sm:flex-row flex-col items-start justify-between border-b-[2px] border-gray-300 sm:pt-[70px] pb-6 gap-4">
        <div className="h-full flex flex-col items-start sm:border-b-0 border-b-[1px] border-gray-300 pb-6 w-full">
          <h3 className="text-xl font-bold sm:mb-6 uppercase">Be the first to know</h3>
          <p className="sm:hidden block text-sm py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is
            simply dummy text.
          </p>
          <div className="mb-10 sm:block hidden">Sign up for updates from mettā muse.</div>
          <div className="flex sm:gap-4 gap-2 w-full">
            <input
              placeholder="Enter your e-mail..."
              className="h-[48px] w-full max-w-[384px] px-4 bg-white text-black"
            />
            <button className="h-[48px] max-w-[184px] w-full min-w-[110px] text-gray-500 border border-gray-500 rounded-md uppercase">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 sm:border-b-0 border-b-[1px] border-gray-300 pb-6">
            <h3 className="text-xl font-bold uppercase sm:block hidden">CONTACT US</h3>
            <h3 className="text-xl font-bold uppercase sm:hidden">CALL US</h3>
            <ul className="flex sm:flex-col flex-row sm:gap-3 gap-1 text-sm">
              <div>+44 221 133 5360</div>
              <span className="sm:hidden">&#9670;</span>
              <div>customercare@mettamuse.com</div>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold uppercase">Currency</h3>
            <Image src="/currency.png" height={100} width={90} alt="Currency" />
            <div className="text-[12px] sm:block hidden">
              Transactions will be completed in Euros and a currency reference is available on
              hover.
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row items-start justify-between w-full flex-col gap-6">
        <div className="sm:border-b-0 border-b-[1px] border-gray-300 pb-5 w-full">
          <h3 className="text-xl font-bold sm:mb-5 flex justify-between items-center">
            mettā muse
            <Image
              src="/arrow-right-white.png"
              height={20}
              width={20}
              className="cursor-pointer sm:hidden"
              alt="Down Arrow"
            />
          </h3>

          <ul className="flex-col gap-4 sm:flex hidden">
            {mettaMuse.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="sm:border-b-0 border-b-[1px] border-gray-300 pb-5 w-full">
          <h3 className="text-xl font-bold sm:mb-5 uppercase flex justify-between items-center">
            Quick Links
            <Image
              src="/arrow-right-white.png"
              height={20}
              width={20}
              className="cursor-pointer sm:hidden"
              alt="Down Arrow"
            />
          </h3>
          <ul className="flex-col gap-4 sm:flex hidden">
            {quickLinks.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 sm:border-b-0 border-b-[1px] border-gray-300 pb-5 w-full">
            <h3 className="text-xl font-bold uppercase flex justify-between items-center">
              Follow us
              <Image
                src="/arrow-right-white.png"
                height={20}
                width={20}
                className="cursor-pointer sm:hidden"
                alt="Down Arrow"
              />
            </h3>
            <Image
              src="/socials.png"
              height={100}
              width={100}
              alt="Social Profiles"
              className="sm:block hidden"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">mettā muse ACCEPTS</h3>
            <Image src="/payment-methods.png" height={100} width={400} alt="Payment Methods" />
          </div>
        </div>
      </div>
      <div className="text-xs mb-4">Copyright © 2023 mettamuse. All rights reserved.</div>
    </footer>
  );
}
