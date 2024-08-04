import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ProductDetails from "../../components/product-details/ProductDetails";
import { useParams } from "react-router-dom";
import axiosInstance, { BACKEND_URL } from "../../utils/route-util";
import { useSelector } from "react-redux";

function ProductPage({ create }) {
	const [product, setProduct] = useState(null);
	const { id } = useParams();
	const { productReview } = useSelector((state) => state.productReducer);

	useEffect(() => {
		if (id || productReview) {
			const fetchProduct = async () => {
				try {
					const { data } = await axiosInstance.get(
						`${BACKEND_URL}/api/v1/product/${id}`,
					);
					setProduct(data._product);
				} catch (error) {
					console.log(error);
				}
			};
			fetchProduct();
		}
	}, [id, productReview]);

	return (
		<div className="min-h-screen">
			<Helmet>
				<meta charSet="utf-8" />
				<title>
					{create ? "Create Product" : `Product - ${product?.name}`}
				</title>
			</Helmet>
			<ProductDetails create={create} productData={product} />
		</div>
	);
}

export default ProductPage;
