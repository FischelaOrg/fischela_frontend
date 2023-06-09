/** @format */

import React, {useEffect} from "react";
import AssetData from "../data/asset";
import styles from "./styles/assets.module.scss";
import {useContext} from "react"
import { useQuery, gql } from "@apollo/client";

import { AppContext } from "./context/AppContext";

const Assets = () => {
	const {modalState, setModalState} = useContext(AppContext)
	const FETCHASSETS = gql`
		query {
			assets{
				id
				productLink
				}
			}
	`;

				

	const { data, loading, error } = useQuery(FETCHASSETS);

	useEffect(() => {
			console.log(data, "HUSH")						
	}, [data, loading])		
	return (
		<div className={styles.asset_grids}>
			{data && data.assets.map((val, key) => {
				return (
					<div key={key} className={styles.asset_card}>
						<div className={""}>
							<img src="/assets/gta.jpeg" />
						</div>
						<div className={styles.contents}>
							<h2>{val.assetName}</h2>
							<p>{val.assetDetails}</p>

							<div className={styles.buttons}>
								<button onClick={() => {
									if (setModalState){
										setModalState(old => ({...old, isStartAuctionModalOpen: true}))
									}
								}} className={styles.sell}>Sell</button>
								<button className={styles.cancel}>Cancel</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Assets;
