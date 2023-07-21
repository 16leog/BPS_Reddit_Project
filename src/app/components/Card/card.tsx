'use client';

import { PostClass } from '@/app/api/getPosts';
import Image from 'next/image';
import React, { useState } from 'react';
import Upvote from '/public/upvote.svg';
import UpvoteBlue from '/public/upvoteBlue.svg';
import profilePic from '/public/profile-photo.jpeg';
import redditComment from '/public/redditComment.svg';
import redditShare from '/public/redditShare.svg';
import redditBookmark from '/public/redditBookmark.svg';
import redditBookmarkBlue from '/public/redditBookmarkBlue.svg';
import redditOptions from '/public/redditOptions.svg';
import exampleImage from '/public/delicate-arch-pastel-colors-m.jpg';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-roboto',
});

const roboto2 = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
});

export default function Card(prop: PostClass, link: string) {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false); // New state
  const [voteCount, setVoteCount] = useState(0); // New state for vote count

  const handleVote = () => {
    setIsUpvoted(!isUpvoted);
    if (!isUpvoted) {
      setVoteCount(voteCount + 1); // Increase vote count if upvoted
    } else {
      setVoteCount(voteCount - 1); // Decrease vote count if un-upvoted
    }
  };

  const handleBookmark = () => {
    // New click handler
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="bg-cardBg sm:mt-4 mt-3 mx-2 md:w-full sm:mb-10 mb-4 px-4 py-6 rounded drop-shadow-lg">
      <div className="flex justify-between h-7">
        <div className="flex items-center">
          <Image
            src={profilePic}
            alt="pfp"
            className="rounded-full w-6 h-6 mr-2"
          />
          <p className="ml-3 text-xs ">
            <a className={roboto2.className}>Author: {prop.author}</a>
          </p>
        </div>
        <button onClick={handleVote}>
          <Image src={isUpvoted ? UpvoteBlue : Upvote} alt="upvote" />
          <p>{voteCount}</p>
        </button>
      </div>
      <div className="w-11/12 mx-4 font-semibold">
        <a className={roboto.className}>{prop.title}</a>
      </div>
      <div className=" sm:mx-8 mx-4 py-4 self-center">
        <Image
          src={
            prop.thumbnail &&
            prop.thumbnail !== 'self' &&
            prop.thumbnail.startsWith('http')
              ? prop.thumbnail
              : exampleImage
          }
          width={800}
          height={800}
          alt=""
          className=""
        />
      </div>
      <div className="flex justify-between">
        <div className="flex justify-evenly">
          <button onClick={() => {}}>
            <Image src={redditComment} alt="" />
          </button>
          <p className="p-2 font-semibold">Comments</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(prop.url);
            }}
          >
            <Image src={redditShare} alt="" />
          </button>
          <p className="p-2 font-semibold">Share</p>
          <button onClick={handleBookmark}>
            <Image
              src={isBookmarked ? redditBookmarkBlue : redditBookmark}
              alt="bookmark"
            />
          </button>
          <p className="p-2 font-semibold">Save</p>
        </div>
        <button onClick={() => {}}>
          <Image src={redditOptions} alt="" />
        </button>
      </div>
    </div>
  );
}
