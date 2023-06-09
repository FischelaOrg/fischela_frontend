import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"


export default function CreateLoanModal() {
	const {modalState, setModalState} = useContext(AppContext)

    const [loanDetail, setLoanDetail] = useState<{interest?: number, durationMonths?: number, amountToLend?: number}>({
        
    })

    return (
        <section onClick={() => {
            if(modalState && setModalState)
            setModalState(old => ({...old, isCreateLoanModalOpen: false}))}} className="modal__overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal">
                
                <div className="modal__inner_container">
                    <section className="modal__header">
                        <h2>Lend Out Funds</h2>
                        <span onClick={() => {
                            if(modalState && setModalState)
                            setModalState(old => ({...old, isCreateLoanModalOpen: false}))}} className="modal__close">x</span>
                    </section>

                    <section className="modal__body">
                        <div className="modal__form_group">
                            <input onChange={e => setLoanDetail(old => ({...old, amountToLend: Number(e.target.value)}))} value={loanDetail.amountToLend} placeholder="Amount(Matic)" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input onChange={e => setLoanDetail(old => ({...old, durationMonths:  Number( e.target.value)}))} value={loanDetail.durationMonths} placeholder="Duration (Month)" className="modal__form_control"/>
                        </div>

                        <div className="modal__form_group">
                            <input type="number" onChange={e => setLoanDetail(old => ({...old, interest: Number( e.target.value)}))} value={loanDetail.interest} placeholder="Interest (%)" className="modal__form_control"/>
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