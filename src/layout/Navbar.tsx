/** @format */

import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./styles/navbar.module.scss";
import {useState, useEffect} from "react"
import { AppContext } from "@/components/context/AppContext";

const Navbar = () => {
	const { isConnected } = useAccount();
	const [connected, setConnected] = useState(isConnected)
	const router = useRouter();
	const {modalState, setModalState} = useContext(AppContext)

	 // Use the useState and useEffect hooks to track whether the component has mounted or not
	 const [hasMounted, setHasMounted] = useState(false);
	 useEffect(() => {
	   setHasMounted(true);
	 }, []);
   
	 // If the component has not mounted yet, return null
	 if (!hasMounted) {
	   return null;
	 }
	
	return (
		<div className="body_container">
			<nav className={styles.navbar}>
				<Link href="/">
					<Image
						src="/fischelalogo.svg"
						width={40}
						height={42}
						alt="Fischela Logo"
					/>
				</Link>
				<div className={styles.connected_}>
					{connected && (
						<div className="profile__nav">
							<Link href="/profile">
								<div className={
									router.pathname === "/profile" ? "active_link nav__item" : "nav__item"}>
										Profile
								</div>
							</Link>

							<Link href="#">
								<div onClick={() => {if(setModalState)setModalState({isCreateAssetModalOpen: true})}} className={
									router.pathname === "/profile" ? "active_link nav__item" : "nav__item"}>
										Mint Asset
								</div>
							</Link>

							<Link href="#">
								<div onClick={() => {if(setModalState)setModalState({isCreateLoanModalOpen: true})}} className={
									router.pathname === "/profile" ? "active_link nav__item" : "nav__item"}>
										Lend
								</div>
							</Link>

						</div>
					)}
					<ConnectButton />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
