import { AnimatePresence, motion } from 'framer-motion';

import '../styles/globals.css';
import Layout from '../src/components/Layout';
import { Router } from 'next/router';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={{ opacity: 0, x: -200, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 200, y: 0 }}
          transition={{ type: 'linear' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
