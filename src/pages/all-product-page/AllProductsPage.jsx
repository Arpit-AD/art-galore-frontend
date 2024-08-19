import React, { useEffect, useState } from "react";
import ProductList from "../../components/common/product-list/ProductList";
import { useDispatch, useSelector } from "react-redux";
import FilterPanel from "../../components/filter-panel/FilterPanel";
import Dropdown from "../../components/filter-panel/dropdown/Dropdown";
import { getProduct } from "../../redux/actions/productActions";
import { FaSearch } from "react-icons/fa";
import axiosInstance, { BACKEND_URL } from "../../utils/route-util";
import { toast } from "react-toastify";
import { changeFilter } from "../../redux/actions/pageActions";

export const initialFilter = {
	priceRange: [1000, 200000],
	category: [],
	color: [],
};

function AllProductsPage() {
	const { products } = useSelector((state) => state.productReducer);
	const sortOptions = [
		{ title: "Recommended", name: "recommended" },
		{ title: "What's New", name: "new" },
		{ title: "Price: High to Low", name: "sortDescending" },
		{ title: "Price: Low to High", name: "sortAscending" },
		{ title: "Customer Rating", name: "rating" },
	];
	const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);
	const [displayProducts, setDisplayProducts] = useState([]);
	const [filter, setFilter] = useState(initialFilter);
	const { filterRx } = useSelector((state) => state.pageReducer);

	const dispatch = useDispatch();
	const [query, setQuery] = useState("");

	const handleSearch = async () => {
		try {
			const response = await axiosInstance.get(
				`${BACKEND_URL}/api/v1/products`,
				{ params: { keyword: query } },
			);
			handleFilter(response?.data?._products);
			setSelectedSortOption(sortOptions[0]);
		} catch (err) {
			toast.error("No product found", {
				position: "top-left",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				className: "my-toast",
				theme: "light",
			});
		}
	};

	const handleFilter = (products) => {
		if (products) {
			const productArr = products.filter((product) => {
				if (
					product.price >= filter.priceRange[0] &&
					product.price <= filter.priceRange[1]
				) {
					if (
						filter.category.length === 0 ||
						filter.category.includes(product.category)
					) {
						if (
							filter.color.length === 0 ||
							filter.color.includes(product.majorColor)
						)
							return product;
					}
				}
			});

			setDisplayProducts(productArr);
		}
	};

	const handleSortOptionSelect = (option) => {
		setSelectedSortOption(option);
		// Handle sorting logic here
		switch (option.name) {
			case "new": {
				const _productList = [...displayProducts];
				const dateAccordingProducts = _productList.sort(
					(a, b) => new Date(b.createdDate) - new Date(a.createdDate),
				);
				setDisplayProducts(dateAccordingProducts);
				break;
			}
			case "sortAscending": {
				const _productList = [...displayProducts];
				const ascendingSortedProducts = _productList.sort(
					(a, b) => a.price - b.price,
				);
				setDisplayProducts(ascendingSortedProducts);
				break;
			}
			case "sortDescending": {
				const _productList = [...displayProducts];
				const descendingSortedProducts = _productList.sort(
					(a, b) => b.price - a.price,
				);
				setDisplayProducts(descendingSortedProducts);
				break;
			}
			case "rating": {
				const _productList = [...displayProducts];
				const ratingSortedProducts = _productList.sort(
					(a, b) => parseFloat(b.ratings) - parseFloat(a.ratings),
				);
				setDisplayProducts(ratingSortedProducts);
				break;
			}
			default:
				setDisplayProducts(displayProducts);
		}
	};

	useEffect(() => {
		if (!(products && products?.length)) {
			dispatch(getProduct());
		}
	}, []);

	useEffect(() => {
		if (products && products.length) {
			handleFilter(products);
		}
	}, [products, filter]);

	useEffect(() => {
		if (filterRx) {
			setFilter(filterRx);
		}
	}, [filterRx]);

	return (
		<>
			<div className="sm:my-4 m-1 my-4 xs:flex block justify-between text-center">
				<div className="xs:w-1/2 flex xs:m-0 my-2 w-3/4 mx-auto items-center">
					<input
						placeholder="Search Product"
						onChange={(e) => {
							setQuery(e.target.value);
						}}
						className="appearance-none w-full text-sm relative block px-3 sm:mr-2 mr-1 py-2 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-maroonRed focus:border-maroonRed focus:z-10"
					></input>
					<FaSearch
						className=" text-gray-500 text-3xl cursor-pointer p-2 bg-zinc-300 rounded"
						onClick={handleSearch}
					/>
				</div>
				<Dropdown
					options={sortOptions}
					selectedOption={selectedSortOption}
					onOptionSelect={handleSortOptionSelect}
				/>
			</div>
			<div className="lg:flex block my-4">
				<div className="lg:w-1/5">
					<FilterPanel filter={filter} setFilter={setFilter} />
				</div>
				<div className="lg:w-4/5">
					<ProductList productList={displayProducts} />
				</div>
			</div>
		</>
	);
}

export default AllProductsPage;
