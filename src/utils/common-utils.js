import { toast } from "react-toastify";

export const handleCopyUrl = () => {
	const url = window.location.href;
	navigator.clipboard
		.writeText(url)
		.then(() => {
			toast.success("URL copied to clipboard! You can paste to share.", {
				className: "my-toast",
			});
		})
		.catch((err) => {
			toast.error("Failed to copy URL.", {
				className: "my-toast",
			});
			console.error("Failed to copy: ", err);
		});
};
