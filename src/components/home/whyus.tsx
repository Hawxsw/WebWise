import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const WhyUs = () => {
  return (
    <div id='beneficios' className="text-center bg-black text-white p-6 lg:p-16">
      <h1 className="text-2xl lg:text-4xl mb-4 lg:mb-6">Por que a WebWise Company?</h1>
      <div className="w-[80px] lg:w-[120px] h-[2px] lg:h-[4px] bg-[#e50914] mx-auto mb-4 lg:mb-6"></div>
      <div className="flex justify-center mb-6 lg:mb-8">
        <Image
          src="/transferir (3).svg"
          alt="whyus"
          width={1039.41}
          height={454.08}
          className="animate__animated animate__fadeInLeft object-contain"
        />
      </div>
      <Link
        href="#contact"
        className="mt-6 lg:mt-8 block text-white bg-[#137a10] border-0 text-[14px] lg:text-[16px] rounded-lg cursor-pointer px-4 lg:px-6 py-2 lg:py-3 w-full lg:w-auto max-w-[280px] lg:max-w-[300px] mx-auto hover:bg-[#0c5909]"
      >
        Conectar meu marketing a WebWise
      </Link>
    </div>
  );
};
