import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="bg-black text-white flex flex-col lg:flex-row items-center lg:justify-between p-6 w-full h-[700px]">
      <div className="flex flex-col text-left space-y-6 max-w-xl font-sans mx-4 lg:mx-20">
        <p className="text-base text-center lg:text-left">Procurando uma empresa de marketing?</p>
        <h1 className="text-3xl lg:text-5xl font-normal leading-tight not-italic">
          <span className="block">Tenha um time feito</span>
          <span className="block text-[#e50914] font-semibold"> sob medida <span className='font-normal text-white'>para</span></span>
          <span className="block lg:inline">atender seu negócio</span>
        </h1>
        <Link
          href="#contact"
          className="block text-white bg-[#169C12] border-0 text-[16px] lg:text-[20px] text-center rounded-lg cursor-pointer px-4 lg:px-6 py-3 w-full lg:w-auto max-w-[300px] mx-auto lg:mx-0 hover:bg-[#0c5909] focus:ring-4 focus:ring-green-300"
        >
          Quero mais informações
        </Link>

      </div>
    </header>
  );
};
