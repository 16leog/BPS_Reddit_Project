'use client';
import Image from 'next/image';
import React from 'react';
import Upvote from '../../../../public/upvote.svg';

export default function Card() {
  return (
    <div className="bg-white rounded w-[378px] h-[390px] shadow">
      <Image src={Upvote} alt="upvote" className=''/>
    </div>
  );
}
