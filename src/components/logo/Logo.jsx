import React from "react";
import logoImage from "../../assets/ArtGalore.svg";

function Logo({ width }) {
	return <img src={logoImage} alt="logo-image" width={width ?? "200px"} />;
}

export default Logo;
