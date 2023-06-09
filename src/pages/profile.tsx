/** @format */
import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useAccount } from "wagmi";
import Layout from "@/layout";
import styles from "../styles/profile.module.scss";
import Assets from "@/components/Assets";
import Loans from "@/components/Loans";
import Borrowed from "@/components/Borrowed";
import History from "@/components/History";
import Votes from "@/components/Votes";
import CreateAssetModal from "@/components/modals/CreateAssetModal";
import { AppContext } from "@/components/context/AppContext";

const inter = Inter({ subsets: ["latin"] });

const addressable = (address: any) => {
	return address?.slice(0, 6) + "..." + address?.slice(-4);
};
export default function Home() {
	const { address } = useAccount();
	const [active, setActive] = useState("assets");

	const {modalState, setModalState} = useContext(AppContext)

	const [hasMounted, setHasMounted] = useState(false);
	 useEffect(() => {
	   setHasMounted(true);
	 }, []);
   
	 // If the component has not mounted yet, return null
	 if (!hasMounted) {
	   return null;
	 }
	return (
		<>
			<Head>
				<title>Profile |Fischela </title>
				<meta name="description" content="Fischela" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="body_container">
					<div className={styles.profile_header}>
						<div className={styles.profile_banner} />
						<div className={styles.profile}>
							<div className={styles.profile_avatar}>
								<Image
									src="/assets/profile_avater.svg"
									width={277.41}
									height={277.41}
									alt="profile avatar"
								/>
							</div>
							<p>{addressable(address)}</p>
							<Image
								src="/assets/verifed.svg"
								width={24}
								height={26}
								alt="profile avatar"
							/>
						</div>
					</div>
					<div className={styles.profile_body}>
						<div className={styles.profile_body_header}>
							<p
								onClick={() => setActive("assets")}
								className={`${active === "assets" ? styles.active : ""}`}>
								Assets
							</p>
							<p
								onClick={() => setActive("loans")}
								className={`${active === "loans" ? styles.active : ""}`}>
								Loans
							</p>
							<p
								onClick={() => setActive("borrowed")}
								className={`${active === "borrowed" ? styles.active : ""}`}>
								Borrowed
							</p>
							<p
								onClick={() => setActive("history")}
								className={`${active === "history" ? styles.active : ""}`}>
								History
							</p>

							<p
								onClick={() => setActive("vote")}
								className={`${active === "vote" ? styles.active : ""}`}>
								Vote
							</p>
						</div>

						<div className={styles.profile_body_body}>
							{active === "assets" && <Assets />}
							{active === "loans" && <Loans />}
							{active === "borrowed" && <Borrowed />}
							{active === "votes" && <Votes />}
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
