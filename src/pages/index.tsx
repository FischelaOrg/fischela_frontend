import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Layout from '@/layout';
import Banner from '@/components/Banner';
import AssetMarketplace from '@/components/AssetMarketplace';
import LoanMarketplace from '@/components/LoanMarketplace';
import { useContext } from 'react';
import { AppContext } from '@/components/context/AppContext';
import CreateAssetModal from '@/components/modals/CreateAssetModal';


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

			<main className='main'>
				<section className='main_inner'>
					<Banner/>
					<AssetMarketplace/>
					<LoanMarketplace/>
				</section>
			</main>

		  </Layout>
	  </>
	);
}
