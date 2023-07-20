'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Upvote from '/public/upvote.svg';
import UpvoteBlue from '/public/upvoteBlue.svg';
import profilePic from '/public/profile-photo.jpeg';
import redditComment from '/public/redditComment.svg';
import redditShare from '/public/redditShare.svg';
import redditBookmark from '/public/redditBookmark.svg';

export default function Card() {
  const [isUpvoted, setIsUpvoted] = useState(false);

  const handleVote = () => {
    setIsUpvoted(!isUpvoted);
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
          <p className="text-xs">Author</p>
        </div>
        <button onClick={handleVote}>
          <Image src={isUpvoted ? UpvoteBlue : Upvote} alt="upvote" />
        </button>
      </div>
      <div>Caption Here</div>
      <div>Image here</div>
      <div className="flex justify-between">
        <Image src={redditComment} alt="" />
        <Image src={redditShare} alt="" />
        <Image src={redditBookmark} alt="" />
      </div>
    </div>
  );
}
