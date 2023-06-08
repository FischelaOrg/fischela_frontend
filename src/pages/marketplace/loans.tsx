import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Layout from '@/layout';
import Banner from '@/components/Banner';
import AssetMarketplace from '@/components/AssetMarketplace';
import LoanMarketplace from '@/components/LoanMarketplace';
import LoanCard from '@/components/LoanCard';
import SearchSystem from '@/components/SearchSystem';


const inter = Inter({ subsets: ['latin'] })

export default function Loans() {
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
					<SearchSystem/>
					<div className="loan__marketplace_inner">
						<LoanCard/>
						<LoanCard/>
						<LoanCard/>
						<LoanCard/>
						<LoanCard/>

						<LoanCard/>
						<LoanCard/>
						<LoanCard/>
						<LoanCard/>
						<LoanCard/>

						<LoanCard/>
						<LoanCard/>
						<LoanCard/>
						<LoanCard/>
						<LoanCard/>

						<LoanCard/>
						<LoanCard/>
						<LoanCard/>
						<LoanCard/>
						<LoanCard/>

						<LoanCard/>
						<LoanCard/>
						<LoanCard/>
						<LoanCard/>
						<LoanCard/>
					</div>
				</section>
			</main>

		  </Layout>
	  </>
	);
}
