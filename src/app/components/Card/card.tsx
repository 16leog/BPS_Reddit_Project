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
    <div className="bg-white mt-4 mx-2 md:w-full mb-10 px-10 py-8 rounded drop-shadow-lg">
      <div className="flex justify-between h-7">
        <div className="flex items-center">
          <Image
            src={profilePic}
            alt="pfp"
            className="rounded-full w-6 h-6 mr-2"
          />
          <p className="text-xs">Author: Leo Gonzalez</p>
        </div>
        <button onClick={handleVote}>
          <Image src={isUpvoted ? UpvoteBlue : Upvote} alt="upvote" />
          <p>{voteCount}</p>
        </button>
      </div>
      <div>big ol arch</div>
      <div>
        <Image src={exampleImage} alt="" className="" />
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <button onClick={() => {}}>
            <Image src={redditComment} alt="" />
          </button>
          <p className="p-2">12 Comments</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText('www.example.com');
            }}
          >
            <Image src={redditShare} alt="" />
          </button>
          <p className="p-2">Share</p>
          <button onClick={handleBookmark}>
            <Image
              src={isBookmarked ? redditBookmarkBlue : redditBookmark}
              alt="bookmark"
            />
          </button>
          <p className="p-2">Save</p>
        </div>
        <button onClick={() => {}}>
          <Image src={redditOptions} alt="" />
        </button>
      </div>
    </div>
  );
}
