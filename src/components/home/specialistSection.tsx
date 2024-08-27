import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const specialists = [
  { src: '/specialist1.png', alt: 'Especialista 1' },
  { src: '/specialist2.png', alt: 'Especialista 2' },
  { src: '/specialist3.png', alt: 'Especialista 3' },
  { src: '/specialist4.png', alt: 'Especialista 4' },
  { src: '/specialist5.png', alt: 'Especialista 5' },
];

const SpecialistSection = () => {
  return (
    <section className="bg-[rgb(38,38,38)] p-5 text-white flex flex-col lg:flex-row items-center gap-5">
      <div className="lg:w-1/2 flex flex-col items-center text-center">
        <h2 className="text-2xl text-left mb-2 lg:text-3xl">Um desses <br /> especialistas vai <br /> atender você</h2>
        <div className="w-20 h-[2px] bg-[#e50914] mb-2 ml-[-90px] lg:ml-0"></div>
        <Link
          href='#contact'
          className='mt-8 block text-black bg-[rgb(22,156,18)] border-0 text-[16px] lg:text-[20px] rounded-lg cursor-pointer px-4 lg:px-6 py-3 w-full lg:w-auto max-w-[300px] mx-auto'
        >
          Falar com especialista
        </Link>
      </div>
      <div className="lg:w-1/2 flex justify-center relative">
        <div className="relative flex flex-wrap justify-center items-center gap-4 lg:gap-4">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center"
              style={{
                position: 'relative',
                zIndex: 10 - index,
              }}
            >
              <div className="rounded-full overflow-hidden w-32 h-32 lg:w-32 lg:h-32">
                <Image 
                  src={specialist.src}
                  alt={specialist.alt}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistSection;
