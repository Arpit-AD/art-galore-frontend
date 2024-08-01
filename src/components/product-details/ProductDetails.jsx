import React, { useEffect, useState } from "react";
import {
	wishlist_buttonClicked,
	formatNumberToINR,
	isProductLiked,
	getRatingValue,
} from "../../utils/products-utils";
import { handleCopyUrl } from "../../utils/common-utils";
import { FaCopy, FaHeart, FaShoppingCart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import ArtistCard_II from "../common/artist-card-ii/ArtistCard_II";
import Loader from "../common/loader/Loader";
import ProductList from "../common/product-list/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/productActions";
import ReviewList from "../common/review-list/ReviewList";
import ReviewForm from "../review-form/ReviewForm";

const formatDate = (isoDate) => {
	const date = new Date(isoDate);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based in JavaScript
	const year = date.getFullYear();
	return `${day}-${month}-${year}`;
};

function ProductDetails({ create, productData }) {
	const dispatch = useDispatch();
	const [starKey, setStarKey] = useState(0);
	const { products } = useSelector((state) => state.productReducer);
	const { user, isLoggedIn } = useSelector((state) => state.userReducer);
	const [productList, setProductList] = useState([]);
	const [likedProduct, setLikedProduct] = useState(
		isProductLiked(productData?._id),
	);

	useEffect(() => {
		if (productData) {
			setStarKey(Math.random() * 100);
		}
	}, [productData]);

	useEffect(() => {
		if (user && productData) {
			setLikedProduct(isProductLiked(productData._id));
		}
	}, [user, productData]);

	useEffect(() => {
		if (!(products && products?.length)) {
			dispatch(getProduct());
		}
	}, []);

	useEffect(() => {
		if (products && products.length && productData) {
			const filterProducts = products.filter(
				(product) =>
					product.user === productData.user && product._id !== productData._id,
			);
			setProductList(filterProducts.slice(0, 6));
		}
	}, [products, productData]);

	const getOptions = () => {
		const opt = {
			className: "z-0",
			edit: false,
			color: "rgba(20,20,20,0.1)",
			activeColor: "tomato",
			size: window.innerWidth < 600 ? 17 : window.innerWidth < 1000 ? 20 : 25,
			value: getRatingValue(productData?.reviews),
			isHalf: true,
		};
		return opt;
	};

	if (!productData) {
		return <Loader loading={!productData} />;
	}

	return (
		<>
			{create ? (
				<form>form</form>
			) : (
				<div className="my-8 md:text-base text-sm">
					<img
						src={`${
							productData?.images[0]?.url
								? productData?.images[0]?.url
								: "https://res.cloudinary.com/dkb4cxn9b/image/upload/v1720353302/artGaloreProducts/no_image_available.jpg"
						}`}
						alt=""
						className="mb-8 mx-auto"
					/>
					<div className="xl:m-0 sm:mx-4 mx-2">
						<div>
							<div className="my-8 sm:text-left text-center">
								<div className="md:text-3xl md:text-2xl text-xl font-semibold">
									{productData?.name}
								</div>
								<div className="sm:flex  items-center justify-between">
									<div className="md:text-3xl ms:text-2xl text-xl">
										₹{" "}
										{formatNumberToINR(
											productData?.price ? productData.price : 0,
										)}
									</div>
									<div className="sm:flex text-center items-center sm:mt-0 mt-3">
										<button
											className="border-2 rounded-lg px-6 sm:py-3 py-2 font-semibold text-gray-500 border-gray-300 bg-white mx-1"
											onClick={handleCopyUrl}
										>
											<FaCopy className="m-auto" />
										</button>
										<button
											className={`border-2 rounded-lg px-6 sm:py-3 py-2 font-semibold text-gray-500 border-gray-300 bg-white mx-1 ${
												likedProduct ? "border-maroonRed" : ""
											}`}
											onClick={() => {
												wishlist_buttonClicked(productData?._id, likedProduct);
											}}
										>
											<FaHeart
												className={`m-auto ${
													likedProduct ? "text-maroonRed" : ""
												}`}
											/>
										</button>
										<button className=" border-2 border-maroonRed rounded-lg sm:py-2 py-1 sm:px-6 px-2 font-semibold bg-maroonRed text-white mx-1">
											<div className="flex">
												<FaShoppingCart className="m-auto" />{" "}
												<span className="ml-2">Buy</span>
											</div>
										</button>
									</div>
								</div>
							</div>
							<hr className="my-1" />
							<hr className="my-1" />
							<div className="my-8 sm:flex justify-between items-center">
								<div className="basis-1/2 leading-10 mx-4">
									<div className="md:text-xl text-base font-semibold underline">
										Specifications
									</div>
									<ul className="md:text-base text-sm">
										<li className="flex">
											<div className="basis-1/2">Category:</div>
											<div className="basis-1/2">{productData?.category}</div>
										</li>{" "}
										<hr />
										<li className="flex">
											<div className="basis-1/2">Created on:</div>
											<div className="basis-1/2">
												{formatDate(productData?.createdDate)}
											</div>
										</li>{" "}
										<hr />
										<li className="flex">
											<div className="basis-1/2">Sold By:</div>
											<div className="basis-1/2">{productData?.artist}</div>
										</li>{" "}
										<hr />
										<li className="flex">
											<div className="basis-1/2">Stock:</div>
											<div className="basis-1/2">{productData?.stock}</div>
										</li>{" "}
										<hr />
										<li className="flex">
											<div className="basis-1/2">Rating:</div>
											<div className="basis-1/2">
												<ReactStars key={starKey} {...getOptions()} />
											</div>
										</li>{" "}
										<hr />
										<li className="flex">
											<div className="basis-1/2">Shipping Available:</div>
											<div className="basis-1/2">Yes</div>
										</li>
										<hr />
									</ul>
								</div>
								<div className="basis-1/2 mx-4 sm:my-0 my-6">
									<ArtistCard_II userId={productData?.user} />{" "}
								</div>
							</div>
							<div className="my-8 mx-4 md:text-base text-sm">
								<div className="md:text-xl text-base font-semibold underline">
									Description
								</div>
								<p className="my-4">{productData?.description}</p>
							</div>
							<hr className="my-1" />
							<hr className="my-1" />
							<div>
								{isLoggedIn ? <ReviewForm /> : <></>}
								<ReviewList
									productId={productData?._id}
									message={"No Reviews Yet"}
								/>
							</div>
						</div>
						<hr className="my-1" />
						<hr className="my-1" />
						<div className="my-8 mx-2">
							<div className="md:text-xl text-base font-semibold underline">
								Other products from artist
							</div>
							<div className="my-4">
								<ProductList
									productList={productList}
									message={"No new products from artist"}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ProductDetails;
