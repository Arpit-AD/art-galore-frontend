import { useState, useEffect } from "react";
import ProductCard from "../product-card/ProductCard";
import { divideListIntoSublists } from "../../../utils/products-utils";

const ProductList = ({ productList }) => {
	const [numSublists, setNumSublists] = useState(3);

	const updateNumSublists = () => {
		if (window.innerWidth > 1024) {
			setNumSublists(3);
		} else {
			setNumSublists(2);
		}
	};

	useEffect(() => {
		updateNumSublists();
		window.addEventListener("resize", updateNumSublists);

		return () => window.removeEventListener("resize", updateNumSublists);
	}, []);

	const sublists = divideListIntoSublists(productList, numSublists);

	return (
		<div className="flex flex-wrap m-auto">
			{sublists.map((sublist, index) => (
				<div className="flex flex-col lg:w-1/3 w-1/2">
					{sublist.map((product, idx) => (
						<ProductCard product={product} key={idx} />
					))}
				</div>
			))}
		</div>
	);
};

export default ProductList;
