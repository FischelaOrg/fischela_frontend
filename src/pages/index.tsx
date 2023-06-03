import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Layout from '@/layout';
import Banner from '@/components/Banner';
import AssetMarketplace from '@/components/AssetMarketplace';
import LoanMarketplace from '@/components/LoanMarketplace';


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
			  <Banner/>
			  <AssetMarketplace/>
			  {/* Asset Marketplace section */}
			  <LoanMarketplace/>
			  {/* Loan marketplace section */}
		  </Layout>
	  </>
	);
}
