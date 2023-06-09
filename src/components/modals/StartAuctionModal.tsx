import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import { ethers } from "ethers";
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import nftAbi from "../../web3/nft.abi.json"
import { nft } from "@/web3/contractAddresses";

export default function StartAuctionModal() {
	const {modalState, setModalState} = useContext(AppContext)
    

    const [assetDetail, setAssetDetail] = useState<{reservePrice?: number,
        endTime?: number,
        tokenId?: number}>({
        
    })

    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: nft,
        abi: nftAbi,
        functionName: 'mintNFT',
        args: [assetDetail]
      })

    console.log(nftAbi, "HULI")
    

   useEffect(() => {
    if(!isLoading) console.log(data, "HDJSKSKKS")

   }, [data, isLoading])
    

    return ( 
        <section onClick={() => {
            if(modalState && setModalState)
            setModalState(old => ({...old, isStartAuctionModalOpen: false}))}} className="modal__overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal">
                
                <div className="modal__inner_container">
                    <section className="modal__header">
                        <h2> Start Auction</h2>
                        <span onClick={() => {
                            if(modalState && setModalState)
                            setModalState(old => ({...old, isStartAuctionModalOpen: false}))}} className="modal__close">x</span>
                    </section>

                    <section className="modal__body">
                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, reservePrice: Number(e.target.value)}))} value={assetDetail.reservePrice} placeholder="Reserve Price" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, endTime: Number(e.target.value)}))} value={assetDetail.endTime} type="date" placeholder="End Time" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, tokenId: Number(e.target.value)}))} value={assetDetail.tokenId} placeholder="Token Id" className="modal__form_control"/>
                        </div>

                        
                    </section>

                    <section className="modal__footer">
                        <button onClick={() => write({
                            args: [assetDetail]
                        })} className="modal__submit">Submit</button>
                    </section>
                </div>
            </div>
        </section>
    )
}