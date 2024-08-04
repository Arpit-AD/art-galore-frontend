import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Filter = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(null);

	const toggleOpen = () => setIsOpen(!isOpen);

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div ref={ref} className="border-b lg:border-none">
			<button
				className="flex justify-between items-center w-full p-4 text-left lg:p-2"
				onClick={toggleOpen}
			>
				<span>{title}</span>
				<span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
			</button>
			{isOpen && <div className="p-2">{children}</div>}
		</div>
	);
};

export default Filter;
