import AssetCard from "./AssetCard";


const AssetMarketplace = () => {
    return (
        <div className="asset_market__container">
            <h3> Asset Marketplace {">>>"}</h3>
            <div className="asset__marketplace_inner">
                <AssetCard/>
                <AssetCard/>
                <AssetCard/>
                <AssetCard/>
                <AssetCard/>
            </div>



        </div>
    )
}

export default AssetMarketplace;