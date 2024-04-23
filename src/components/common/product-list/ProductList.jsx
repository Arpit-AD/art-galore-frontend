import React from "react";
import ProductCard from "../product-card/ProductCard";

function ProductList({ productList }) {
	return (
		<div className="flex justify-center flex-wrap w-4/5 m-auto">
			<div className="flex flex-col lg:w-1/3 w-1/2">
				{productList.map((product) => (
					<ProductCard product={product} />
				))}
			</div>
			<div className="flex flex-col lg:w-1/3 w-1/2 ">
				{" "}
				{productList.map((product) => (
					<ProductCard product={product} />
				))}
			</div>
			<div className="lg:flex flex-col lg:w-1/3 hidden">
				{" "}
				{productList.map((product) => (
					<ProductCard product={product} />
				))}
			</div>
		</div>
	);
}

export default ProductList;
