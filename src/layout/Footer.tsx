/** @format */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/footer.module.scss";
import { FaInstagram,  } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxDiscordLogo } from 'react-icons/rx'
import {CiTwitter} from 'react-icons/ci'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className="body_container">
				<div className={styles.first_footer}>
					<div className={styles.join_mail}>
						<p>Join the mailing list</p>
						<div>
							<input type="text" placeholder="Email Address" />
							<button>Subscribe</button>
						</div>
					</div>
					<div className={styles.join_community}>
						<p>Join our communities</p>
						<div className={styles.join_community_icons}>
							<div>
								<RxDiscordLogo />
							</div>
							<div>
								<FaInstagram />
							</div>
							<div>
								<CiTwitter />
							</div>
							<div>
								<AiOutlineYoutube />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.second_footer}>
					<div className={styles.second_footer_left}>
						<Image
							src="/footerlogo.svg"
							width={200}
							height={57}
							alt="FOOTER LOGO"
						/>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industrys standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</p>
					</div>
					<div className={styles.second_footer_center} />
					<div className={styles.second_footer_right}>
						<ul>
							<li>marketplace</li>
							<li>all nfts</li>
							<li>asset marketplace</li>
							<li>loan marketplace</li>
							<li>memberships</li>
						</ul>
						<ul>
							<li>my account</li>
							<li>profile</li>
							<li>favorites</li>
							<li>watchlist</li>
							<li>my collection</li>
							<li>create</li>
							<li>settings</li>
						</ul>
						<ul>
							<li>resources</li>
							<li>blog</li>
							<li>learn</li>
							<li>help center</li>
							<li>FAQs</li>
							<li>partners</li>
							<li>platform status</li>
						</ul>
						<ul>
							<li>resources</li>
							<li>blog</li>
							<li>learn</li>
							<li>help center</li>
							<li>FAQs</li>
							<li>partners</li>
							<li>platform status</li>
						</ul>
					</div>
				</div>
				<div className={styles.third_footer}>
					<p>&copy; {new Date().getFullYear()} Fischela</p>
					<div className={styles.pr}>
						<p>Privacy Policy</p>
						<p>Terms of Service</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;