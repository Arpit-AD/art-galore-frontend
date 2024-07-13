import React from "react";
import CategoryEnum from "../../../data/categoryEnum";

function CategoryList({ heading, categoryListStyle, itemStyle, headingStyle }) {
	return (
		<ul className={`${categoryListStyle}`}>
			{heading && <h2 className={`${headingStyle}`}>{heading}</h2>}

			{Object.values(CategoryEnum).map((category, i) => (
				<li className={`${itemStyle}`} key={i}>
					<a href={`#${category.toLowerCase()}`}>{category}</a>
				</li>
			))}
		</ul>
	);
}

export default CategoryList;
