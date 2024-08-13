import React from "react";
import CategoryEnum from "../../../data/categoryEnum";
import { changeTabFn } from "../../../redux/actions/pageActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CategoryList({ heading, categoryListStyle, itemStyle, headingStyle }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<ul className={`${categoryListStyle}`}>
			{heading && <h2 className={`${headingStyle}`}>{heading}</h2>}

			{Object.values(CategoryEnum).map((category, i) => (
				<li
					className={`${itemStyle}`}
					key={i}
					onClick={() => {
						const _filter = {
							priceRange: [1000, 200000],
							category: [category],
							color: [],
						};
						window.filter = _filter;
						dispatch(changeTabFn(category));
						navigate("/all-products");
					}}
				>
					<a href={`#${category.toLowerCase()}`}>{category}</a>
				</li>
			))}
		</ul>
	);
}

export default CategoryList;
