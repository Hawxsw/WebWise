import Image from 'next/image';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';

export const Reunion = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black space-y-8 py-8 px-4">
      <Card 
        className="relative flex flex-col md:flex-row items-center justify-between bg-[#121212] text-white p-8 rounded-[20px] md:rounded-[40px] shadow-lg border border-white transition-transform transform hover:scale-105 hover:shadow-2xl w-full max-w-[956px] md:max-h-[402px] h-auto"
      >
        <CardHeader className="w-full md:w-1/2 text-center md:text-left">
          <CardTitle className="text-2xl sm:text-3xl mb-4 tracking-wide">Vamos projetar o marketing da sua empresa conforme a necessidade dela</CardTitle>
          <div className='w-[80px] sm:w-[120px] h-[4px] bg-[#e50914] mb-6 mx-auto md:mx-0'></div>
          <CardDescription className="text-base sm:text-lg leading-relaxed text-gray-300">
            Tenha um braço a mais para ajudar seu time ou terceirize todo seu marketing com a V4. Dessa forma, você não se preocupa com contratação, gestão desse time, riscos trabalhistas e outras burocracias.
          </CardDescription>
        </CardHeader>
        <CardHeader className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <CardContent className="relative">
            <Image width={395.43} height={397.08} src="/transferir (1).svg" alt="Radar Chart" className="max-w-full h-auto" />
          </CardContent>
        </CardHeader>
      </Card>

      <Card 
        className="relative flex flex-col md:flex-row-reverse items-center justify-between bg-[#121212] text-white p-8 rounded-[20px] md:rounded-[40px] shadow-lg border border-white transition-transform transform hover:scale-105 hover:shadow-2xl w-full max-w-[956px] md:max-h-[402px] h-auto"
      >
        <CardHeader className="w-full md:w-1/2 text-left">
          <CardTitle className="text-2xl sm:text-3xl mb-4 tracking-wide">Você pode personalizar o plano que mais se adeque ao seu momento</CardTitle>
          <div className='w-[80px] sm:w-[120px] h-[4px] bg-[#e50914] mb-6'></div>
          <CardDescription className="text-base sm:text-lg leading-relaxed text-gray-300">
            Todos esses serviços são divididos em planos. Você pode ajustar conforme sua disponibilidade de investimento. O importante é não desistir de investir no que vai transformar a realidade do seu negócio.
          </CardDescription>
        </CardHeader>
        <CardHeader className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <CardContent className="relative">
            <Image width={395.43} height={397.08} src="/transferir (2).svg" alt="Radar Chart" className="max-w-full h-auto" />
          </CardContent>
        </CardHeader>
      </Card>
      
      <Link
        href='#contact'
        className='mt-8 block text-white bg-[rgb(22,156,18)] border-0 text-[16px] lg:text-[20px] text-center rounded-lg cursor-pointer px-4 lg:px-6 py-3 w-full lg:w-auto max-w-[300px] mx-auto'
      >
        Agendar uma reunião
      </Link>
    </div>
  );
};
