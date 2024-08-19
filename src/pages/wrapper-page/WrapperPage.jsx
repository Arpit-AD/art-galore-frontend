import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsBanner from "../../components/news-banner/NewsBanner";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActionMode } from "../../redux/actions/pageActions";

function WrapperPage({ Component, props }) {
	const { pathname } = useLocation();
	const dispatch = useDispatch();
	useEffect(() => {
		if (pathname) {
			dispatch(setActionMode());
		}
	}, [pathname]);
	return (
		<div>
			<NewsBanner
				news={
					"New products available at 30% discounted price. Shipping worldwide"
				}
			/>
			<Navbar />
			<div className="xl:w-4/5 w-full m-auto">
				<Component {...props} />
			</div>
			<Footer />
		</div>
	);
}

export default WrapperPage;
