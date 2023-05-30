import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Layout from '@/layout';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
	  <>
		  <Head>
			  <title>Fischela</title>
			  <meta name="description" content="Fischela" />
			  <link rel="icon" href="/favicon.ico" />
		  </Head>
		  <Layout>
			  Testing
		  </Layout>
	  </>
	);
}
