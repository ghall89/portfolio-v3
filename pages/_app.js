import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';

import '../styles/globals.css';
import Layout from '../src/components/Layout';
import { Router } from 'next/router';

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Layout>
				<AnimatePresence mode="wait">
					<motion.div
						key={router.route}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ type: 'ease-in-out' }}
					>
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
			</Layout>
		</>
	);
}

export default MyApp;
