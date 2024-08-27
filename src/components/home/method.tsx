'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

interface Method {
  attributes: {
    title: string;
    description: string;
  };
}

export const Method = () => {
  const methods: Method[] = [
    {
      attributes: {
        title: 'Aquisição',
        description: 'Atrair a atenção do público.',
      },
    },
    {
      attributes: {
        title: 'Engajamento',
        description: 'Construir confiança e interesse.',
      },
    },
    {
      attributes: { title: 'Monetização', description: 'Realizar vendas.' },
    },
    {
      attributes: {
        title: 'Retenção',
        description: 'Manter os clientes comprando.',
      },
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const handleTitleHover = (index: number | null) => {
    setVisibleIndex(index);
  };

  return (
    <div className='text-center bg-black text-white p-16'>
      <h1 className='text-4xl mb-6'>
        Existe um método científico para que sua <br /> empresa nunca pare de
        vender
      </h1>
      <div className='w-[120px] h-[4px] bg-[#e50914] mx-auto mb-6'></div>

      <p className='text-2xl mb-12'>
        Se você não segui-lo, ela não vai sair do lugar
      </p>
      <div className='flex justify-center items-center mb-12'>
        <Image
          width={646}
          height={364}
          src='/engajamento.svg'
          alt='Método V4 - Engajamento, Monetização, Retenção, Aquisição'
          className='animate__animated animate__backInUp mx-auto'
        />
      </div>

      <div className='flex justify-center mt-12 flex-wrap gap-6'>
        {methods.slice(0, 4).map((method, index) => (
          <Card
            key={index}
            className='animate__animated animate__fadeInLeft rounded-[15%] bg-[#151515] border border-[rgb(38,38,38)] w-[240px] h-[160px] flex flex-col items-center justify-center cursor-default mb-6'
            onMouseEnter={() => handleTitleHover(index)}
            onMouseLeave={() => handleTitleHover(null)}
          >
            <span
              className={`text-white text-lg sm:text-lg md:text-lg font-bold title ${
                visibleIndex !== index ? 'block' : 'hidden'
              }`}
            >
              {method.attributes.title}
            </span>
            <div
              className={`flex flex-col max-w-[80%] transition-all duration-500 ${
                visibleIndex === index ? 'block' : 'hidden'
              }`}
            >
              <p className='text-white text-base text-center mt-4'>
                {method.attributes.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <div className='flex justify-center mt-12'>
        <Link
          href='#contact'
          className="block text-white bg-[#137a10] border-0 text-[16px] lg:text-[20px] text-center rounded-lg cursor-pointer px-4 lg:px-6 py-3 w-full lg:w-auto max-w-[300px] mx-auto lg:mx-0 hover:bg-[#0c5909] focus:ring-4 focus:ring-green-300"
        >
          Quero mais informações
        </Link>
      </div>
    </div>
  );
};
