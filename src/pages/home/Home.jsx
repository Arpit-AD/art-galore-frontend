import React from "react";
import Navbar from "../../components/navbar/Navbar";
import NewsBanner from "../../components/news-banner/NewsBanner";
import Footer from "../../components/footer/Footer";
import CategoryEnum from "../../data/categoryEnum.js";
import ProductCard from "../../components/common/product-card/ProductCard.jsx";
import ProductList from "../../components/common/product-list/ProductList.jsx";
import Carousel from "../../components/carousel/Carousel.jsx";
import { useNavigate } from "react-router-dom";
import BannerPage from "../../components/banner-page/BannerPage.jsx";
import ArtistPanel from "../../components/artist-panel/ArtistPanel.jsx";

const product = {
	_id: 1,
	name: "Product 1",
	description: "description for product 1",
	price: 3000,
	ratings: 4.5,
	images: [
		{
			public_id: "product1_image1",
			url: "https://i.pinimg.com/474x/9b/5f/15/9b5f15dbb5ee1def9b2f57e3bbb51628--art-flowers-flower-art.jpg",
		},
	],
	category: CategoryEnum.DRAWING,
	stock: 2,
	numberOfReviews: 0,
	reviews: [],
	artist: "eJkaur",
};

const productList = [
	{
		...product,
		images: [
			{
				public_id: "product",
				url: "https://th.bing.com/th/id/OIP.ObQwM6DN2opNkoUlj6cP-gHaEK?rs=1&pid=ImgDetMain",
			},
		],
	},

	{
		...product,
		images: [
			{
				public_id: "product",
				url: "https://i.pinimg.com/736x/e8/7e/57/e87e573baa9e0c489309f778ca7e6980--drawing-faces-expressive.jpg",
			},
		],
	},
];

function Home() {
	const navigate = useNavigate();
	return (
		<div className="bg-white min-h-screen m-1">
			<Carousel
				images={[
					"https://res.cloudinary.com/dkb4cxn9b/image/upload/v1715626280/artGaloreCarousel/carousel-madhubani.png",
					"https://res.cloudinary.com/dkb4cxn9b/image/upload/v1715536651/artGaloreCarousel/carousel-peacock.png",
					"https://res.cloudinary.com/dkb4cxn9b/image/upload/v1715625000/artGaloreCarousel/carousel-puppets.png",
				]}
			/>
			<div>
				{" "}
				<div className="mt-12 mb-6 flex align-center justify-between font-semibold lg:text-3xl sm:text-2xl text-xl">
					EVERYTHING YOU NEED
					<button
						className="lg:px-3 lg:py-4 sm:px-2 sm:py-3 p-1 text-base bg-maroonRed text-white hover:bg-gray-800 hover:text-white shadow-xl rounded-full md:text-base text-sm font-normal"
						onClick={() => navigate("/all-products")}
					>
						View all
					</button>
				</div>
				<div className="flex justify-between mx-2 my-6">
					<button
						className="basis-1/5 lg:px-3 lg:py-4 sm:px-2 sm:py-3 p-1 text-base border-2 rounded-md md:text-base text-sm font-normal"
						onClick={() => {
							console.log("new arrivals");
						}}
					>
						New Arrivals
					</button>
					<button
						className="basis-1/5 lg:px-3 lg:py-4 sm:px-2 sm:py-3 p-1 text-base border-2 rounded-md md:text-base text-sm font-normal"
						onClick={() => {
							console.log("Choose by colors");
						}}
					>
						Choose by colors
					</button>
					<button
						className="basis-1/5 lg:px-3 lg:py-4 sm:px-2 sm:py-3 p-1 text-base border-2 rounded-md md:text-base text-sm font-normal"
						onClick={() => {
							console.log("Choose by Category");
						}}
					>
						Explore by Category
					</button>
					<button
						className="basis-1/5 lg:px-3 lg:py-4 sm:px-2 sm:py-3 p-1 text-base border-2 rounded-md md:text-base text-sm font-normal"
						onClick={() => {
							console.log("Find by artist");
						}}
					>
						Find by artist
					</button>
				</div>
				<ProductList productList={productList} />
				<hr className="mt-8"></hr>
				<hr className="mt-1"></hr>
				<div className="my-20">
					<BannerPage />
				</div>
				<div className="my-20">
					<ArtistPanel />
				</div>
			</div>
		</div>
	);
}

export default Home;
