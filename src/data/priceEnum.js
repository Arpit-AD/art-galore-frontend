const PriceEnum = Object.freeze({
	UNDER_10000: "Under Rs 10,000",
	BETWEEN_10K_25K: "Rs 10,000 - Rs 25,000",
	BETWEEN_25K_1L: "Rs 25,000 - Rs 1 Lac",
	BETWEEN_1L_3L: "Rs 1 Lac - Rs 3 Lac",
	ABOVE_3L: "Above Rs 3 Lac",
});

export const priceLimits = {
	UNDER_10000: { min: 0, max: 10000 },
	BETWEEN_10K_25K: { min: 10000, max: 25000 },
	BETWEEN_25K_1L: { min: 25000, max: 100000 },
	BETWEEN_1L_3L: { min: 100000, max: 300000 },
	ABOVE_3L: { min: 300000, max: Infinity },
};

export default PriceEnum;
