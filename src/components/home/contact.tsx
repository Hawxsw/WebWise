'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaPen, FaPhone } from 'react-icons/fa';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { JoinUsInput } from '../join-us-input';
import { Button } from '../ui/button';
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z
    .string({
      required_error: 'O nome é obrigatório.',
    })
    .refine((arg) => !!arg, 'O nome é obrigatório.'),
  email: z
    .string({
      required_error: 'O e-mail é obrigatório.',
    })
    .email({ message: 'O email deve ser válido.' })
    .refine((arg) => !!arg, 'O e-mail é obrigatório.'),
  phone: z
    .string({
      required_error: 'Informe um celular.',
    })
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, {
      message: 'Informe um celular válido.',
    })
    .refine((arg) => !!arg, 'O celular é obrigatório.'),
  companyname: z.string({
    required_error: 'O nome da empresa é obrigatório.',
  })
    .refine((arg) => !!arg, 'O empresa é obrigatório.'),
  revenue: z.string({
    required_error: 'A receita é obrigatório.',
  })
    .refine((arg) => !!arg, 'A receita é obrigatório.'),
  segment: z.string({
    required_error: 'O segmento é obrigatório.',
  })
    .refine((arg) => !!arg, 'O segmento é obrigatório.'),
  cnpj: z
    .string({
      required_error: 'O nome é obrigatório.',
    })
    .refine((arg) => !!arg, 'O nome é obrigatório.'),
})

type ContactSchema = z.infer<typeof contactSchema>;

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;


export const Contact = () => {
  const [isLoading, setLoading] = useState(false);
  const [showCNPJInput, setShowCNPJInput] = useState(false);


  const { control, handleSubmit, register, reset, formState: { errors }, } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });
  console.log(errors);


  async function onSubmit(data: ContactSchema) {
    setLoading(true);
    try {
      const result = await emailjs.send(
        serviceId!,
        templateId!,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          companyname: data.companyname,
          revenue: data.revenue,
          segment: data.segment,
          cnpj: data.cnpj,
        },
        userId
      );
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('User ID:', userId);

      console.log(result.text);
      reset({
        name: '',
        email: '',
        phone: '',
        companyname: '',
        revenue: '',
        segment: '',
        cnpj: '',
      });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    } finally {
      setLoading(false);
    }
  }

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
            <JoinUsInput
              id='name'
              placeholder="Seu nome completo"
              {...register('name')}
              errors={errors}
            />
          </div>
          <div className='mb-4'>
            <JoinUsInput
              id="email"
              type='email'
              errors={errors}
              placeholder='E-mail corporativo'
              {...register('email')}
            />
          </div>
          <div className='mb-4'>
            <JoinUsInput
              id="phone"
              errors={errors}
              type='text'
              placeholder='Seu Telefone'
              {...register('phone')}
              mask="(99) 99999-9999"
            />
          </div>
          <div className='mb-4'>
            <JoinUsInput
              id="companyname"
              errors={errors}
              type='text'
              placeholder='Qual o nome da sua empresa?'
              {...register('companyname')}
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
                    <SelectTrigger
                      aria-label="Selecione o faturamento mensal da sua empresa"
                      className='w-full bg-white text-black p-2 border border-gray-300 rounded-md text-left sm:p-3'>
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
            {errors.revenue && <p className="text-[#e50914] text-sm mt-1">{errors.revenue.message}</p>}
          </div>
          <div className='mb-4 relative w-full'>
            <Controller
              control={control}
              name='segment'
              render={({ field }) => (
                <div>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setShowCNPJInput(value === 'Serviço' || value === 'Indústria');
                    }}
                    value={field.value}
                    disabled={field.disabled}
                  >
                    <SelectTrigger
                      aria-label="Selecione o seu segmento"
                      className='w-full bg-white text-black p-2 border border-gray-300 rounded-md text-left sm:p-3'>

                      <SelectValue placeholder='Qual o seu segmento?' />
                    </SelectTrigger>
                    <SelectContent className='bg-white text-left z-50 absolute'>
                      <SelectGroup>
                        <SelectItem value='Serviço'>Serviço</SelectItem>
                        <SelectItem value='Varejo'>Varejo</SelectItem>
                        <SelectItem value='Indústria'>Indústria</SelectItem>
                        <SelectItem value='E-commerce'>E-commerce</SelectItem>
                        <SelectItem value='Food Service'>Food Service</SelectItem>
                        <SelectItem value='Educação'>Educação</SelectItem>
                        <SelectItem value='Imobiliária'>Imobiliária</SelectItem>
                        <SelectItem value='SAAS'>SAAS</SelectItem>
                        <SelectItem value='Finanças'>Finanças</SelectItem>
                        <SelectItem value='Franquia'>Franquia</SelectItem>
                        <SelectItem value='Telecom'>Telecom</SelectItem>
                        <SelectItem value='Energia Solar'>Energia Solar</SelectItem>
                        <SelectItem value='Turismo'>Turismo</SelectItem>
                        <SelectItem value='Outro'>Outro</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              )}
            />
            {errors.segment && <p className="text-[#e50914] text-sm mt-1">{errors.segment.message}</p>}
          </div>

          {showCNPJInput && (
            <div className='mb-4'>
              <JoinUsInput
                id="cnpj"
                type='text'
                errors={errors}
                placeholder='CNPJ da empresa'
                {...register('cnpj')}
                mask="99.999.999/9999-99"
              />
            </div>
          )}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded text-white bg-[#137a10] hover:bg-[#0c5909] focus:ring-4 focus:ring-green-300"
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </Button>

        </form>
      </div>
    </div>
  );
};
