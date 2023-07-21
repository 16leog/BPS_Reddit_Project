'use client';
import Image from 'next/image';
import Card from './components/Card/card';
import { useEffect, useState } from 'react';
import getData, { PostClass } from './api/getPosts';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-roboto',
});

export default function Home() {
  const [posts, setPosts] = useState<PostClass[]>([]);

  useEffect(() => {
    getData().then((fetchedPosts) => setPosts(fetchedPosts));
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-l from-orange-700 to-orange-400">
      <div className="relative right-1/4 p-5 hidden sm:block">
        <h1 className="font-bold text-white">
          <a className={roboto.className}>Posts</a>
        </h1>
        <div className=" bg-postsDiv h-0.5 w-14 relative -left-2 "></div>
      </div>
      <div>
        {posts.map((post) => (
          <Card
            key={post.url}
            title={post.title}
            author={post.author}
            thumbnail={post.thumbnail}
            url={post.url}
            mediaMetadata={post.mediaMetadata}
          />
        ))}
      </div>
    </main>
  );
}
