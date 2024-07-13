import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ProductDetails from "../../components/product-details/ProductDetails";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

function ProductPage({ create }) {
	const [product, setProduct] = useState(null);
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		if (id) {
			const fetchProduct = async () => {
				try {
					const { data } = await axios.get(
						`http://localhost:3000/api/v1/product/${id}`,
					);
					setProduct(data._product);
				} catch (error) {
					console.log(error);
				}
			};
			fetchProduct();
		}
	}, [id]);
	return (
		<div className="min-h-screen">
			<Helmet>
				<meta charSet="utf-8" />
				<title>{create ? "Create Product" : "Product"}</title>
			</Helmet>
			<ProductDetails create={create} productData={product} />
		</div>
	);
}

export default ProductPage;
