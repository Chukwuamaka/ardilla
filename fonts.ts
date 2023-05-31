import { Ubuntu } from 'next/font/google';
import localFont from 'next/font/local';

export const ubuntu = Ubuntu({
  weight: ['500', '700',],
  subsets: ['latin']
});

export const cabinet = localFont({
  src: [
    {
      path: './fonts/CabinetGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CabinetGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/CabinetGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});