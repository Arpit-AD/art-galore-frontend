import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsBanner from "../../components/news-banner/NewsBanner";
import { useLocation } from "react-router-dom";
import { setActionMode } from "../../redux/actions/pageActions";
import { useDispatch } from "react-redux";

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
			<div className="xl:w-3/4 w-full m-auto">
				<Component {...props} />
			</div>
			<Footer />
		</div>
	);
}

export default WrapperPage;
