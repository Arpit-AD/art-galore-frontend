import React, { useEffect, useState } from "react";
import ProductList from "../../components/common/product-list/ProductList.jsx";
import Carousel from "../../components/carousel/Carousel.jsx";
import { useNavigate } from "react-router-dom";
import BannerPage from "../../components/banner-page/BannerPage.jsx";
import ArtistPanel from "../../components/artist-panel/ArtistPanel.jsx";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/productActions.js";
import ColorComponent from "../../components/color-component/ColorComponent.jsx";
import { arrayToObjectByKey } from "../../utils/products-utils.js";
import CategoryComponent from "../../components/common/category-component/CategoryComponent.jsx";
function Home() {
	const navigate = useNavigate();
	const [filter, setFilter] = useState(null);
	const [productList, setProductList] = useState([]);
	const [categoryObj, setCategoryObj] = useState({});
	const { products } = useSelector((state) => state.productReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!(products && products?.length)) {
			dispatch(getProduct());
		}
	}, []);

	useEffect(() => {
		if (products && products?.length) {
			setProductList(products);
		}
	}, [products]);

	return (
		<div className="bg-white min-h-screen m-1">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Home</title>
				<link rel="icon" type="image/png" href="./logo.png" />
			</Helmet>
			<Carousel
				images={[
					"https://res.cloudinary.com/dkb4cxn9b/image/upload/v1715626280/artGaloreCarousel/carousel-madhubani.png",
					"https://res.cloudinary.com/dkb4cxn9b/image/upload/v1715536651/artGaloreCarousel/carousel-peacock.png",
					"https://res.cloudinary.com/dkb4cxn9b/image/upload/v1715625000/artGaloreCarousel/carousel-puppets.png",
				]}
			/>
			<div>
				{" "}
				<div className="mt-12 mb-6 flex align-center justify-between font-semibold lg:text-3xl sm:text-2xl text-xl xl:px-0 px-4">
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
						className={`basis-1/4 mx-1 lg:px-3 lg:py-4 sm:px-2 sm:py-3 p-1 text-base border-2 rounded-md md:text-base text-sm font-normal ${
							filter === "new" ? "border-maroonRed text-maroonRed" : ""
						}`}
						onClick={() => {
							if (filter !== "new") {
								const _productList = [...productList];
								const sortedProductsDesc = _productList.sort(
									(a, b) => new Date(b.createdDate) - new Date(a.createdDate),
								);
								setProductList(sortedProductsDesc);
								setFilter("new");
							} else {
								setProductList(products);
								setFilter("");
							}
						}}
					>
						New Arrivals
					</button>
					<button
						className={`basis-1/4 mx-1 lg:px-3 lg:py-4 sm:px-2 sm:py-3 p-1 text-base border-2 rounded-md md:text-base text-sm font-normal ${
							filter === "color" ? "border-maroonRed text-maroonRed" : ""
						}`}
						onClick={() => {
							if (filter !== "color") setFilter("color");
							else setFilter("");
						}}
					>
						Choose by colors
					</button>
					<button
						className={`basis-1/4 mx-1 lg:px-3 lg:py-4 sm:px-2 sm:py-3 p-1 text-base border-2 rounded-md md:text-base text-sm font-normal ${
							filter === "category" ? "border-maroonRed text-maroonRed" : ""
						}`}
						onClick={() => {
							if (filter !== "category") {
								setFilter("category");
								const _obj = arrayToObjectByKey(productList, "category");
								setCategoryObj(_obj);
							} else setFilter("");
						}}
					>
						Explore by Category
					</button>
					<button
						className={`basis-1/4 mx-1 lg:px-3 lg:py-4 sm:px-2 sm:py-3 p-1 text-base border-2 rounded-md md:text-base text-sm font-normal ${
							filter === "artist" ? "border-maroonRed text-maroonRed" : ""
						}`}
						onClick={() => {
							setFilter("artist");
							navigate("/all-products");
						}}
					>
						Find by artist
					</button>
				</div>
				{!filter || filter === "new" ? (
					<ProductComponent productList={productList} />
				) : (
					<></>
				)}
				{filter === "color" ? <ColorComponent /> : <></>}
				{filter === "category" ? (
					<CategoryComponent categoryObj={categoryObj} />
				) : (
					<></>
				)}
				<hr className="mt-8"></hr>
				<hr className="mt-1"></hr>
				<div className="lg:my-20 my-8">
					<BannerPage />
				</div>
				<div className="sm:my-20 my-4">
					<ArtistPanel />
				</div>
			</div>
		</div>
	);
}

const ProductComponent = ({ productList }) => {
	return <ProductList productList={productList.slice(0, 6)} />;
};

export default Home;
