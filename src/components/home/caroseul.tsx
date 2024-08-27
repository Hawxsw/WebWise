'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

const carouselImages = [
  { src: '/pages.png', alt: 'Image Pages' },
  { src: '/trafego.png', alt: 'Image trafego' },
  { src: '/crm.png', alt: 'Image Crm' },
];

export const Caroseul = () => {

  return (
    <div className='carousel-wrapper bg-[rgb(38,38,38)] text-center text-white p-16'>
      <h1 className='text-3xl mb-6'>
        A WebWise estrutura o marketing da sua empresa <br /> com soluções
        feitas <span className='text-[#e50914]'>sob medida</span>
      </h1>
      <div className='w-[120px] h-[4px] bg-[#e50914] mx-auto mb-6'></div>

      <p className='text-xl mb-12'>
        Conheça todos os serviços que oferecemos para <br /> que sua empresa
        tenha mais resultados
      </p>

      <div className='relative flex flex-col items-center'>
        <Carousel
          opts={{
            align: 'center',
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className='animate__animated animate__backInUp w-full sm:w-4/5 px-2 sm:px-0'
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className='flex justify-center'>
                <Image
                  width={900}
                  height={600}
                  src={image.src}
                  alt={image.alt}
                  className='rounded-[50px] shadow-lg border-[0.2px] border-gray-500'
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='absolute inset-0 flex justify-between p-2 hidden sm:flex'>
            <CarouselPrevious className='text-white bg-black border-none w-12 h-12 flex items-center justify-center hover:bg-gray-800' />
            <CarouselNext className='text-white bg-black border-none w-12 h-12 flex items-center justify-center hover:bg-gray-800' />
          </div>
        </Carousel>

        <Link
          href='#contact'
          className='mt-8 block text-white bg-[rgb(22,156,18)] border-0 text-[16px] lg:text-[20px] text-center rounded-lg cursor-pointer px-4 lg:px-6 py-3 w-full lg:w-auto max-w-[300px] mx-auto'
          aria-label="Quero mais informações"
        >
          Quero mais informações
        </Link>
      </div>
    </div>
  );
};
