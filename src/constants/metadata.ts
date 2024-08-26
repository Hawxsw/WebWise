import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
    title: 'WebWise',
    description:
      'A WebWise é uma assessoria de marketing digital especializada em impulsionar seu negócio. Nosso foco é ajudar você a vender mais, alcançar um público maior, aumentar a frequência das vendas e maximizar o valor de cada transação.',
    icons: {
      icon: [
        {
          url: '',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '',
          sizes: '16x16',
          type: 'image/png',
        },
      ],
      apple:
        '',
      other: [
        {
          rel: 'manifest',
          url: '',
        },
        {
          rel: 'mask-icon',
          url: '',
          color: '#E40613',
        },
      ],
    },
    openGraph: {
      title: 'WebWise',
      description:
        'A WebWise é uma assessoria de marketing digital especializada em impulsionar seu negócio. Nosso foco é ajudar você a vender mais, alcançar um público maior, aumentar a frequência das vendas e maximizar o valor de cada transação.',
      url: 'https://web-wise-omega.vercel.app/',
    },
  };