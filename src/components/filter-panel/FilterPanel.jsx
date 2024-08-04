import React, { useState } from "react";
import Filter from "./filter/Filter";
import { formatNumberToINR } from "../../utils/products-utils";
import { colorsEnum } from "../../data/colorEnum";
import CategoryEnum from "../../data/categoryEnum";

const FilterPanel = () => {
	const [priceRange, setPriceRange] = useState([1000, 200000]);
	const topColors = colorsEnum.slice(0, 6);

	const handlePriceChange = (event) => {
		const value = parseInt(event.target.value, 10);
		const newRange = [...priceRange];
		if (event.target.name === "minPrice") {
			newRange[0] = value;
		} else {
			newRange[1] = value;
		}
		setPriceRange(newRange);
	};

	return (
		<div className="text-sm my-2 w-full border border-gray-200 p-4 sm:p-6 lg:p-8 text-center">
			<Filter title="Price">
				<div className="flex flex-col">
					<div className="flex justify-between">
						<span>₹{formatNumberToINR(priceRange[0])}</span>
						<span>₹{formatNumberToINR(priceRange[1])}</span>
					</div>
					<input
						type="range"
						name="minPrice"
						min="1000"
						max="200000"
						value={priceRange[0]}
						className="w-full mt-2"
						onChange={handlePriceChange}
					/>
					<input
						type="range"
						name="maxPrice"
						min="1000"
						max="200000"
						value={priceRange[1]}
						className="w-full mt-2"
						onChange={handlePriceChange}
					/>
				</div>
			</Filter>
			<Filter title="Category">
				<ul className="space-y-2">
					{Object.keys(CategoryEnum).map((key, index) => (
						<li className="flex items-center" key={index}>
							<input
								type="checkbox"
								id={`${CategoryEnum[key]}`}
								className="mr-2"
							/>
							<label htmlFor={`${CategoryEnum[key]}`}>
								{CategoryEnum[key]}
							</label>
						</li>
					))}
				</ul>
			</Filter>
			<Filter title="Color">
				<ul className="space-y-2">
					{topColors.map((color, index) => (
						<li className="flex items-center" key={index}>
							<input type="checkbox" id={`${color.name}`} className="mr-2" />
							<label htmlFor={`${color.name}`}>{color.name}</label>
						</li>
					))}
				</ul>
			</Filter>
			<button className="mt-4 border-2 border-maroonRed rounded-lg py-2 px-8 text-sm font-semibold text-maroonRed">
				Filter
			</button>
		</div>
	);
};

export default FilterPanel;
