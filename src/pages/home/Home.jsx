import React from "react";
import Navbar from "../../components/navbar/Navbar";
import NewsBanner from "../../components/news-banner/NewsBanner";
import Footer from "../../components/footer/Footer";

function Home() {
	return (
		<div>
			<NewsBanner
				news={
					"New products available at 30% discounted price. Shipping worldwide"
				}
			/>
			<Navbar />
			<div className="h-screen bg-white flex items-center justify-center">
				abc
			</div>
			<Footer />
		</div>
	);
}

export default Home;
