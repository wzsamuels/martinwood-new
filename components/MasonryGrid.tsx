'use client'

import React from 'react';
import Masonry from 'react-masonry-css';
import Image from "next/image";
import {BsSearch} from "react-icons/bs";

interface MasonryGridProps {
  items: any[];
  onClick: any;
}

const MasonryGrid = ({ items, onClick } : MasonryGridProps ) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex -ml-7"
      columnClassName="pl-7"
    >
      {items.map((item, index) => (
        <div className='relative  hover:cursor-pointer group' onClick={() => onClick(item)} key={index}>
          <Image src={item.image} width={600} height={600} alt="" className="w-full object-cover mb-7 " />
          <button className='absolute top-4 right-4 p-2 group-hover:scale-125 rounded-full text-black transition-all '>
            <BsSearch/>
          </button>
          <div className='absolute left-0 top-0 min-h-full min-w-full bg-black z-10 hidden group-hover:block group-hover:opacity-20'>

          </div>
        </div>
      ))}
    </Masonry>
  );
}

export default MasonryGrid;