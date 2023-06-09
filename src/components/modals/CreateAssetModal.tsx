import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"


export default function CreateAssetModal() {
	const {modalState, setModalState} = useContext(AppContext)

    const [assetDetail, setAssetDetail] = useState({
        title: "GTA San Andreas",
        description: "An open world adventure game",
        price: "$2,000",
        assetURI: "https://gtasan.org",
        revenue: "$1,000,000",
        expenses: "$200,000",
        traffic: "3,000,000",
        productLink: "https://gtasan.whitepaper.org",
        ownerEmail: "norbertmbafrank@gmail.com",
    })

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
                            <input onChange={e => setAssetDetail(old => ({...old, price: e.target.value}))} value={assetDetail.price} placeholder="Price" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, assetURI: e.target.value}))} value={assetDetail.assetURI} placeholder="Game Asset URI" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, revenue: e.target.value}))} value={assetDetail.revenue} placeholder="Game Revenue" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, expenses: e.target.value}))} value={assetDetail.expenses} placeholder="Game Expenses" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, traffic: e.target.value}))} value={assetDetail.traffic} placeholder="Game Traffic" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, productLink: e.target.value}))} value={assetDetail.productLink} placeholder="Game Link (eg. Link to Business detail of Game)" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setAssetDetail(old => ({...old, ownerEmail: e.target.value}))} value={assetDetail.ownerEmail} placeholder="Owner Email" className="modal__form_control"/>
                        </div>
                    </section>

                    <section className="modal__footer">
                        <button className="modal__submit">Submit</button>
                    </section>
                </div>
            </div>
        </section>
    )
}