/** @format */

import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AppContext } from "@/components/context/AppContext";
import CreateAssetModal from "@/components/modals/CreateAssetModal";
import CreateLoanModal from "@/components/modals/CreateLoanModal";
import BorrowLoanModal from "@/components/modals/BorrowLoanModal";
import StartAuctionModal from "@/components/modals/StartAuctionModal";

const Layout = ({ children }: any) => {
	const {modalState, setModalState} = useContext(AppContext)

	return (
		<>
			<Navbar />
			{modalState?.isCreateAssetModalOpen && <CreateAssetModal/>}
			{modalState?.isStartAuctionModalOpen && <StartAuctionModal/>}

			{modalState?.isCreateLoanModalOpen && <CreateLoanModal/>}
			{modalState?.isCreateBorrowModalOpen && <BorrowLoanModal/>}{/* borrow funds modal */}
			{modalState?.isCreateLoanModalOpen && <CreateLoanModal/>}{/* PlaceBid modal */}

			


			{children}
			<Footer />
		</>
	);
};

export default Layout;
