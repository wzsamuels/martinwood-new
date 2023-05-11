import React from 'react';
import Link from 'next/link';

//box-shadow: 0 -3px 1px -2px rgb(0 0 0 / 20%), 0 -2px 2px 0 rgb(0 0 0 / 14%), 0 -1px 5px 0 rgb(0 0 0 / 12%);

const FooterContent = ({links}) => {

  return (
    <div className='absolute bottom-0 w-full px-4 py-1 bg-black text-white shadow-lg'>
      <div className='flex flex-col'>
        <div className='flex flex-wrap justify-center'>
          {links.map((link, index) =>
            <Link key={link.text} href={link.url}>
              <p className='cursor-pointer'>
                {index === 0 ? '' : <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>}
                {link.text}
              </p>
            </Link>
            )}
        </div>
        <div className='flex flex-col md:flex-row justify-between'>
          <p style={{margin: '1em 1em 0 0'}}>© {new Date().getFullYear()} Martin Woodworks</p>
          <p>Website by <a href='https://twinsilverdesign.com'>Twin Silver Web Design</a></p>
        </div>
      </div>
    </div>
  )
}

export default FooterContent