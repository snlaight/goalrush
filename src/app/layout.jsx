'use client';

import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import '@/styles/globals.css';
import { pageVariants } from '@/utils/motion';

const RootLayout = ({ children }) => {
  const router = useRouter();
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className='h-full w-full'>
        <AnimatePresence mode='wait'>
          <motion.main key={router.router} variants={pageVariants} animate='animate' exit='exit'>
            {children}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  );
};

export default RootLayout;
