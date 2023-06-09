import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Layout from '@/layout';
import Banner from '@/components/Banner';
import AssetMarketplace from '@/components/AssetMarketplace';
import LoanMarketplace from '@/components/LoanMarketplace';
import {MdOutlineVerified} from "react-icons/md"
import {BiBitcoin} from "react-icons/bi"
import {AiOutlineAlignLeft} from "react-icons/ai"
import { FaAngleUp } from 'react-icons/fa';
import {FcAbout} from "react-icons/fc";
import {BiDetail} from "react-icons/bi";
import {BsFillExclamationCircleFill} from "react-icons/bs"
import {FcLike} from "react-icons/fc"
import {TbListDetails} from "react-icons/tb"
import { useContext } from 'react';
import { AppContext } from '@/components/context/AppContext';

const inter = Inter({ subsets: ['latin'] })

export default function Preview() {
	const {modalState, setModalState} = useContext(AppContext)

    const assetDesc = [
        {
            title: "Description",
            icon: <AiOutlineAlignLeft/>,
            detail: {
                content: "this is the gta game on route"
            }
        },

        {
            title: "About Lender",
            icon: <BsFillExclamationCircleFill/>,
            detail: {
                content: "Its an open world game with different shit."
            }
        },

        {
            title: "Details",
            icon: <BiDetail/>,
            detail: {
                content: "Monthly Revenue: $50,000, Server Expenses: $5,000"
            }
        }
    ]

    const historyItems = [
        {
            amountTransacted: "1.3291",
            dollarTranslation: "$2,483.52",
            transactionCount: 1,
            timeAgo: "5 minutes ago",
            transactionAddress: "0xacdae...12dad"
        },

        {
            amountTransacted: "1.3291",
            dollarTranslation: "$4,433.52",
            transactionCount: 1,
            timeAgo: "4 minutes ago",
            transactionAddress: "0xacdae...12dad"
        },

        {
            amountTransacted: "1.3291",
            dollarTranslation: "$8,183.52",
            transactionCount: 1,
            timeAgo: "a minutes ago",
            transactionAddress: "0xacdae...12dad"
        },

        {
            amountTransacted: "34.3291",
            dollarTranslation: "$2,483.52",
            transactionCount: 1,
            timeAgo: "5 yesrs ago",
            transactionAddress: "0xacdae...12dad"
        },

        {
            amountTransacted: "13.321",
            dollarTranslation: "$2,483.52",
            transactionCount: 1,
            timeAgo: "3 weeks ago",
            transactionAddress: "0xacdae...12dad"
        },

        {
            amountTransacted: "85.31",
            dollarTranslation: "$45,483.52",
            transactionCount: 1,
            timeAgo: "3 months ago",
            transactionAddress: "0xacdae...12dad"
        },
    ]

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
					<section className='preview__container'>
                        <div className='preview__image_section'>

                            <div className='preview__image_container'>
                                <div className='preview__image_container_inner'>
                                    <Image alt="" className='preview__image' src='/assets/link.png'/>
                                </div>
                                
                                <div className='preview__image_stats'>
                                    <FcLike style={{fontSize: "1.4rem"}}/> <span>10</span>
                                </div>
                            </div>

                            <div className='preview__sale_type'>
                                <div className='preview__main_sale_type'>
                                    <h3>For Borrowers</h3>
                                    <h4>Take a Loan</h4>
                                </div>

                                <div className='preview__currency_type'>
                                    <div className='preview'>ETH </div>
                                </div>
                            </div>
                        </div>

                        <section className='preview__detail'>
                            <div className='preview__top_header'>
                                <div className='preview__top_verified'>
                                    <MdOutlineVerified style={{fontSize: "1.6rem"}}
                                    />
                                    <span>Active</span>
                                </div>
                                
                                <div className='preview__owned'>
                                    <h2>Link Loan</h2>
                                    <div className='preview__owned_body'>
                                        <span>Lending by</span> 
                                        <i>Norbert Frank</i>
                                    </div>
                                </div>
                            </div>

                            

                            <div className='preview__auction'>
                                <div className='preview__auction_inner'>
                                    <section className='preview__auction_info'>
                                        <p>Loan Duration</p>
                                        <div className='preview__time_cap'>
                                            <div className='preview__time_capsule'>
                                                <span className='preview__timezy'>3</span>
                                                <span>Months</span>
                                            </div>

                                            <div className='preview__time_capsule'>
                                                <span className='preview__timezy'>5</span>
                                                <span>Days</span>
                                            </div>
                                        </div>
                                    </section>

                                    <section className='preview__auction_price_tab'>
                                        <h3>Current Available Amount</h3>
                                        <div className='preview__price_container'>
                                            <h4>
                                                <BiBitcoin style={{fontSize: "2rem"}}/>
                                                <span>1000</span>
                                            </h4>
                                            <h6>$10,000</h6>
                                        </div>
                                        <button onClick={() => {
                                            if (setModalState) setModalState(old =>({...old, isCreateBorrowModalOpen: true}))
                                        }} className='preview__place_bid_btn'>
                                            Apply For Loan
                                        </button>
                                    </section>
                                </div>

                                <section className='preview__auction_detail'>
                                    <ul className='preview__auction_detail_inner'>
                                        {
                                            assetDesc && assetDesc.map((asset)=>{
                                                return (
                                                    <li key={asset.title} className='preview__auction_detail_item'>
                                                        <div className='preview__auction_detail_item_cont'>
                                                            {asset.icon} <span>{asset.title}</span>
                                                        </div>
                                                        <FaAngleUp className='preview__down_icon'/>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </section>
                            </div>
                        </section>
                    </section>
                    <section className='preview__history_section'>
                        <div className='preview__history_section_header'>
                           <TbListDetails/> Trade History
                        </div>

                            <ul className='preview__history_section_body_container'>
                                {
                                    historyItems && historyItems.map( (item) =>{
                                            return (
                                                <li className='preview__history_section_body_item'>
                                                    <span>{item.amountTransacted}</span>
                                                    <span>{item.dollarTranslation}</span>
                                                    <span>{item.transactionCount}</span>
                                                    <span>{item.timeAgo}</span>
                                                    <span>{item.transactionAddress}</span>
                                                </li>
                                            )
                                        }
                                    )
                                }
                                
                            </ul>
                    </section>
				</section>
			</main>

		  </Layout>
	  </>
	);
}
