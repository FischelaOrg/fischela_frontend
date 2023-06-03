

const LoanCard = () => {
    return (
        <section className="loan_card">
            <div className="loan_card__image_container">
                <img src="/assets/link.png" className="loan_card__image"/>
            </div>

            <section className="loan_card__body">
                <h2>Avail: $10,000</h2>
                <div className="loan_card__detail_container">
                    <span>Lender: 0xaefda...eadea</span>
                    <span>Interest rate: 5%</span>
                    <span>duration: 5 months</span>

                </div>
            </section>
        </section>
    )
}

export default LoanCard