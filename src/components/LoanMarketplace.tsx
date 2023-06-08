import LoanCard from "./LoanCard";


const LoanMarketplace = () => {
    return (
        <div className="loan_market__container">
            <h3> Loan Marketplace {">>>"}</h3>

            <div className="loan__marketplace_inner">
                <LoanCard/>
                <LoanCard/>
                <LoanCard/>
                <LoanCard/>
                <LoanCard/>
            </div>
        </div>
    )
}

export default LoanMarketplace;