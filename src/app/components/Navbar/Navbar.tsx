import Image from 'next/image';
import RedditLogo from 'public/redditLogo3.webp';

export default function Navbar() {
  return (
    <nav className="bg-navbar text-white w-full h-16 flex items-center justify-center lg:justify-start">
      <Image src={RedditLogo} alt="reddit logo" className="sm:ml-4" width={30} />
      <p className="ml-2 font-RedexPro font-semibold">reddit</p>
    </nav>
  );
}
