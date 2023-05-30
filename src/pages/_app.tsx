/** @format */

import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
	getDefaultWallets,
	RainbowKitProvider,
	darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import type { AppProps } from "next/app";

const { chains, publicClient } = configureChains(
	[polygonMumbai],
	[
		alchemyProvider({ apiKey: "yzRmjBn2CMfHW999abuH6sPHrfFQbbHs" }),
		publicProvider(),
	]
);

const { connectors } = getDefaultWallets({
	appName: "fischela_frontend",
	projectId: "94e350c7378c977866dae4f1cb13564d", //Project ID Gotten From Wallet Connect Cloud. visit https://cloud.walletconnect.com/
	chains,
});

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider
				chains={chains}
				theme={darkTheme({
					accentColor: "#5865F2",
					accentColorForeground: "white",
					borderRadius: "small",
					fontStack: "system",
					overlayBlur: "small",
				})}>
				<Component {...pageProps} />
			</RainbowKitProvider>
		</WagmiConfig>
	);
}
