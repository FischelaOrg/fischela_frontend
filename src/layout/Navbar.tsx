/** @format */

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./styles/navbar.module.scss";
const Navbar = () => {
	const { isConnected } = useAccount();
	const router = useRouter();
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
					{isConnected && (
						<div>
							<Link href="/profile">
								<p
									className={
										router.pathname === "/profile" ? "active_link" : ""
									}>
									Profile
								</p>
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
