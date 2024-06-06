import React from "react";
import logoImage from "../../assets/ArtGalore.svg";
import { useNavigate } from "react-router-dom";

function Logo({ width }) {
	const navigate = useNavigate();
	return (
		<img
			src={logoImage}
			alt="logo-image"
			width={width ?? "200px"}
			onClick={() => navigate("/")}
			className="cursor-pointer"
		/>
	);
}

export default Logo;
