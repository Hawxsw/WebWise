import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <div id="footer" className="bg-[rgb(38,38,38)] px-[5%] lg:px-[10%] pt-[4%]">
      <div className="text-white pb-[3%] leading-[160%] text-sm">
        © Copyright 2024 – WebWise | Developed by{' '}
        <Link
          className="font-normal text-[#FF4C4C]" // Alterado para um vermelho mais claro
          href="https://github.com/Hawxsw"
          target="_blank"
        >
          OmniSpark
        </Link>{' '}
        & <b className="font-normal text-[#FF4C4C]">WebWise</b>. {/* Alterado para um vermelho mais claro */}
      </div>
    </div>
  );
};
