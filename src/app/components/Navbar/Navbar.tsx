import Image from 'next/image';
import RedditLogo from 'public/redditLogo3.webp';

export default function Navbar() {
  return (
    <nav className="flex flex-row w-full h-16 bg-navbar items-center ">
      <div className="p-4 ">
        <Image src={RedditLogo} alt={'reddit logo'} width={30}></Image>
      </div>
      <div className=" px-3 font-roboto text-white">reddit</div>
    </nav>
  );
}
