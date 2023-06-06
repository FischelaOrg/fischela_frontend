import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Layout from '@/layout';
import Banner from '@/components/Banner';
import AssetMarketplace from '@/components/AssetMarketplace';
import LoanMarketplace from '@/components/LoanMarketplace';
import LoanCard from '@/components/LoanCard';
import AssetCard from '@/components/AssetCard';


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
                    <div className='search__component'>
                        <select className='search__selector'>
                            <option>Select</option>
                        </select>
                        <div className='form__grouper'>
                            <input placeholder='search by name or trait' className='form__control' />
                        </div>

                        <select className='search__selector'>
                            <option>Price low to high</option>
                        </select>
                    </div>
					<div className="loan__marketplace_inner">
                        <AssetCard/>
                        <AssetCard/>
                        <AssetCard/>
                        <AssetCard/>
                        <AssetCard/>

                        <AssetCard/>
                        <AssetCard/>
                        <AssetCard/>
                        <AssetCard/>
                        <AssetCard/>

                        <AssetCard/>
                        <AssetCard/>
                        <AssetCard/>
                        <AssetCard/>
                        <AssetCard/>

                        <AssetCard/>
                        <AssetCard/>
                        <AssetCard/>
                        <AssetCard/>
                        <AssetCard/>
					</div>
				</section>
			</main>

		  </Layout>
	  </>
	);
}
