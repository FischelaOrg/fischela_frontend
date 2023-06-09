import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import { ethers } from "ethers";
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import nftAbi from "../../web3/nft.abi.json"
import { nft } from "@/web3/contractAddresses";

export default function CreateAssetModal() {
	const {modalState, setModalState} = useContext(AppContext)
    

    const [assetDetail, setAssetDetail] = useState({
        title: "GTA San Andreas",
        description: "An open world adventure game",
        price: 2000,
        assetURI: "https://gtasan.org",
        revenue: 1000000,
        expenses: 200000,
        traffic: 3000000,
        productLink: "https://gtasan.whitepaper.org",
        ownerEmail: "norbertmbafrank@gmail.com",
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
            setModalState(old => ({...old, isCreateAssetModalOpen: false}))}} className="modal__overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal">
                
                <div className="modal__inner_container">
                    <section className="modal__header">
                        <h2>Mint Existing Asset</h2>
                        <span onClick={() => {
                            if(modalState && setModalState)
                            setModalState(old => ({...old, isCreateAssetModalOpen: false}))}} className="modal__close">x</span>
                    </section>

                    <section className="modal__body">
                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, title: e.target.value}))} value={assetDetail.title} placeholder="Title" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, description: e.target.value}))} value={assetDetail.description} placeholder="Description" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, price: Number(e.target.value)}))} value={assetDetail.price} placeholder="Price" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, assetURI: e.target.value}))} value={assetDetail.assetURI} placeholder="Game Asset URI" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, revenue: Number(e.target.value)}))} value={assetDetail.revenue} placeholder="Game Revenue" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, expenses: Number(e.target.value)}))} value={assetDetail.expenses} placeholder="Game Expenses" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, traffic:Number( e.target.value)}))} value={assetDetail.traffic} placeholder="Game Traffic" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, productLink: e.target.value}))} value={assetDetail.productLink} placeholder="Game Link (eg. Link to Business detail of Game)" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, ownerEmail: e.target.value}))} value={assetDetail.ownerEmail} placeholder="Owner Email" className="modal__form_control"/>
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