import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selectedOption, onOptionSelect }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option) => {
		onOptionSelect(option);
		setIsOpen(false);
	};

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
		<div className="relative inline-block text-left" ref={dropdownRef}>
			<div>
				<button
					type="button"
					className="inline-flex justify-between w-44 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
					id="options-menu"
					aria-haspopup="true"
					aria-expanded="true"
					onClick={handleToggle}
				>
					{selectedOption.title}
					<svg
						className="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M10 3a1 1 0 00-.707.293l-5 5a1 1 0 001.414 1.414L10 5.414l4.293 4.293a1 1 0 001.414-1.414l-5-5A1 1 0 0010 3z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
			{isOpen && (
				<div
					className="origin-top-right absolute right-0 mt-2 z-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="options-menu"
				>
					<div className="py-1" role="none">
						{options.map((option, index) => (
							<button
								key={index}
								className={`${
									selectedOption === option.title ? "bg-gray-100" : ""
								} text-gray-700 block px-4 py-2 text-sm w-full text-left`}
								role="menuitem"
								onClick={() => handleOptionClick(option)}
							>
								{option.title}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
