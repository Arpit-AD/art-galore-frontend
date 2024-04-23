import React from "react";
import Navbar from "../../components/navbar/Navbar";
import NewsBanner from "../../components/news-banner/NewsBanner";
import Footer from "../../components/footer/Footer";
import CategoryEnum from "../../data/categoryEnum.js";
import ProductCard from "../../components/common/product-card/ProductCard.jsx";
import ProductList from "../../components/common/product-list/ProductList.jsx";

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
	product,
	product,

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
	return (
		<div>
			<NewsBanner
				news={
					"New products available at 30% discounted price. Shipping worldwide"
				}
			/>
			<Navbar />
			<div className="bg-white">
				<ProductList productList={productList} />
			</div>
			<Footer />
		</div>
	);
}

export default Home;
