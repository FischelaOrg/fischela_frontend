import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"


export default function BorrowLoanModal() {
	const {modalState, setModalState} = useContext(AppContext)

    const [loanDetail, setLoanDetail] = useState<{borrowAmount?: number, nftCollateralId?: number}>({
        
    })

    return (
        <section onClick={() => {
            if(modalState && setModalState)
            setModalState(old => ({...old, isCreateBorrowModalOpen: false}))}} className="modal__overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal">
                
                <div className="modal__inner_container">
                    <section className="modal__header">
                        <h2>Borrow Funds</h2>
                        <span onClick={() => {
                            if(modalState && setModalState)
                            setModalState(old => ({...old, isCreateBorrowModalOpen: false}))}} className="modal__close">x</span>
                    </section>

                    <section className="modal__body">
                        <div className="modal__form_group">
                            <input onChange={e => setLoanDetail(old => ({...old, borrowAmount: Number(e.target.value)}))} value={loanDetail.borrowAmount} placeholder="Borrow Amount" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setLoanDetail(old => ({...old, nftCollateralId:  Number( e.target.value)}))} value={loanDetail.nftCollateralId} placeholder="Nft collateral Id" className="modal__form_control"/>
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