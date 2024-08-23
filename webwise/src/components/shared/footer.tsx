import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <div id="footer" className="bg-[rgb(38,38,38)] px-[5%] lg:px-[10%] pt-[4%]">
      <div className="text-[#898987] pb-[3%] leading-[160%] text-sm">
        © Copyright 2024 – WebWise | Developed by{' '}
        <Link
          className="font-normal text-[#E40613]"
          href="https://github.com/Hawxsw"
          target="_blank"
        >
          OmniSpark
        </Link>{' '}
        & <b className="font-normal text-[#E40613]">WebWise</b>.
      </div>
    </div>
  );
};
