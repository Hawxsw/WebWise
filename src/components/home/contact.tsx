'use client'
import Image from 'next/image';
import React from 'react';
import { FaPen, FaPhone } from 'react-icons/fa';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useForm, Controller } from 'react-hook-form';

export const Contact = () => {

  const { control, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className='bg-[#131313] text-white flex flex-col lg:flex-row items-center lg:justify-between p-4 lg:p-6 w-full min-h-screen'>
      <div className='w-full lg:w-1/2 p-4 flex flex-col items-center lg:items-center'>
        <div>
          <h1 className='text-xl lg:text-2xl text-center lg:text-left mb-4'>
            Dar o próximo passo leva <br className='hidden lg:block' /> menos de
            um minuto
          </h1>
          <div className='w-[100px] h-[3px] bg-[#e50914] mb-4'></div>

          <div className='relative mb-8'>
            <div className='animate__animated animate__fadeInLeft flex flex-col md:flex-row bg-[rgb(42,42,42)] items-center mb-8 lg:mb-16 p-4 border border-custom-gray rounded-[24px] w-full lg:w-[546px] h-auto lg:h-[140px] relative z-10'>
              <div className='absolute top-2 right-4 text-white text-xs'>1</div>
              <div className='flex-shrink-0 p-1 rounded-full'>
                <FaPen className='w-[30px] lg:w-[34.98px] h-[30px] lg:h-[42.42px] text-[#e50914]' />
              </div>
              <div className='ml-4 flex-1 text-center md:text-left'>
                <h2 className='text-lg lg:text-xl mb-2'>
                  Preencha o formulário
                </h2>
                <p className='text-sm lg:text-base'>
                  Envie suas informações de contato. Todos os seus{' '}
                  <br className='hidden lg:block' />
                  dados estarão seguros, vamos cuidar bem deles.
                </p>
              </div>
            </div>

            <div className='absolute left-1/2 transform -translate-x-1/2 top-[100px] lg:top-[130px] z-0 w-[150px] h-[60px] lg:w-[260px] lg:h-[102px]'>
              <Image
                width={260}
                height={102}
                src='/transferir.svg'
                alt='fluxo image'
                className='w-full h-full object-contain'
              />
            </div>

            <div className='animate__animated animate__fadeInLeft flex flex-col md:flex-row bg-[rgb(42,42,42)] items-center p-4 border border-custom-gray rounded-[24px] w-full lg:w-[546px] h-auto lg:h-[140px] relative z-10'>
              <div className='absolute top-2 left-4 text-white text-xs'>2</div>
              <div className='ml-4 flex-1 text-center md:text-left'>
                <div className='flex flex-col items-center'>
                  <div className='text-center md:text-left'>
                    <h2 className='text-lg lg:text-xl mb-2'>
                      Receba uma ligação
                    </h2>
                    <p className='text-sm lg:text-base'>
                      Em até 12 horas, um dos nossos especialistas fará{' '}
                      <br className='hidden lg:block' />
                      uma ligação para agendar a reunião mais{' '}
                      <br className='hidden lg:block' />
                      importante com você.
                    </p>
                  </div>
                </div>
              </div>
              <div className='p-2 rounded-full flex items-center justify-center'>
                <FaPhone className='w-[30px] lg:w-[34.98px] h-[30px] lg:h-[42.42px] text-[#e50914]' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-[481px] p-4 lg:p-6 rounded-lg shadow-lg border border-white lg:mr-[150px]'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <Input
              type='text'
              placeholder='Qual seu nome?'
              className='w-full p-3 rounded bg-white text-black placeholder-gray-500'
            />
          </div>
          <div className='mb-4'>
            <Input
              type='email'
              placeholder='E-mail corporativo'
              className='w-full p-3 rounded bg-white text-black placeholder-gray-500'
            />
          </div>
          <div className='mb-4'>
            <Input
              type='text'
              placeholder='Seu Telefone'
              className='w-full p-3 rounded bg-white text-black placeholder-gray-500'
            />
          </div>
          <div className='mb-4'>
            <Input
              type='text'
              placeholder='Qual o nome da sua empresa?'
              className='w-full p-3 rounded bg-white text-black placeholder-gray-500'
            />
          </div>
          <div className='mb-4'>
            <Controller
              control={control}
              name='revenue'
              render={({ field }) => (
                <div>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={field.disabled}
                  >
                    <SelectTrigger className='w-full bg-white text-black p-2 border border-gray-300 rounded-md text-left sm:p-3'>
                      <SelectValue placeholder='Qual o faturamento mensal da sua empresa?' />
                    </SelectTrigger>
                    <SelectContent className='bg-white text-left z-50 absolute'>
                      <SelectGroup>
                        <SelectItem value='Até 50 mil'>Até 50 mil</SelectItem>
                        <SelectItem value='De 51 mil à 70 mil'>De 51 mil à 70 mil</SelectItem>
                        <SelectItem value='De 71 mil à 100 mil'>De 71 mil à 100 mil</SelectItem>
                        <SelectItem value='De 101 mil à 400 mil'>De 101 mil à 400 mil</SelectItem>
                        <SelectItem value='De 1 à 4 milhões'>De 1 à 4 milhões</SelectItem>
                        <SelectItem value='De 4 à 16 milhões'>De 4 à 16 milhões</SelectItem>
                        <SelectItem value='De 16 a 40 milhões'>De 16 a 40 milhões</SelectItem>
                        <SelectItem value='Mais de 40 milhões'>Mais de 40 milhões</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              )}
            />
          </div>
          <div className='mb-6'>
            <Input
              type='text'
              placeholder='Qual o seu segmento?'
              className='w-full p-3 rounded bg-white text-black placeholder-gray-500'
            />
          </div>
          <button className='w-full p-3 bg-[rgb(22,156,18)] rounded text-white font-bold'>
            RECEBER MAIS INFORMAÇÕES
          </button>
        </form>
      </div>
    </div>
  );
};
