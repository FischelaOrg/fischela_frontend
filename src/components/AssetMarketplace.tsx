import AssetCard from "./AssetCard";
import { useQuery, gql } from "@apollo/client";


const AssetMarketplace = () => {
    const FETCHAUCTIONS = gql`
		query FetchAssets {
			auctions{
				id
				reservePrice
				tokenId{
					id
					productLink
				}
			}
		}
	`;

  const { data, loading, error } = useQuery(FETCHAUCTIONS);
    return (
        <div className="asset_market__container">
            <h3> Asset Marketplace {">>>"}</h3>
            <div className="asset__marketplace_inner">
                {
                    data ? data.auctions.map((asset:any) => {
                        return <AssetCard/>
                    }) : null
                }
                
            </div>
        </div>
    )
}

export default AssetMarketplace;