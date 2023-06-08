/** @format */

import React from "react";
import AssetData from "../data/asset";
import styles from "./styles/assets.module.scss";

const Assets = () => {
	return (
		<div className={styles.asset_grids}>
			{AssetData.map((val, key) => {
				return (
					<div key={key} className={styles.asset_card}>
						<div className={styles.blank}></div>
						<div className={styles.contents}>
							<h2>{val.assetName}</h2>
							<p>{val.assetDetails}</p>

							<div className={styles.buttons}>
								<button className={styles.sell}>Sell</button>
								<button className={styles.cancel}>Cancel</button>
							</div>
						</div>
					</div>
				);
			})}
			{/* { AssetData.map( ( val, key ) =>
      {
        <div key={key} className={styles.asset_card}>
					<div className={styles.blank} />

					<div className={styles.blank}>val</div>
				</div>;
        
      } ) } */}
		</div>
	);
};

export default Assets;
