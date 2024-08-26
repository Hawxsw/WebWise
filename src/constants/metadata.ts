import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
    title: 'WebWise',
    description:
      'A WebWise é uma assessoria de marketing digital especializada em impulsionar seu negócio. Nosso foco é ajudar você a vender mais, alcançar um público maior, aumentar a frequência das vendas e maximizar o valor de cada transação.',
      icons: {
        icon: [
          {
            url: 'https://cms.consigacred.com.br/uploads/favicon_32x32_06b3adb156.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            url: 'https://cms.consigacred.com.br/uploads/favicon_16x16_d541365afd.png',
            sizes: '16x16',
            type: 'image/png',
          },
        ],
        apple:
          'https://cms.consigacred.com.br/uploads/apple_touch_icon_c9ae0ef60b.png',
        other: [
          {
            rel: 'manifest',
            url: 'https://cms.consigacred.com.br/uploads/site_1830ddbc2c.webmanifest',
          },
          {
            rel: 'mask-icon',
            url: 'https://cms.consigacred.com.br/uploads/safari_pinned_tab_7b35ce65ec.svg',
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