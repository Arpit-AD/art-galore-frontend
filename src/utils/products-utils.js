export const divideListIntoSublists = (list, numSublists) => {
	const sublists = [];
	const sublistSize = Math.ceil(list.length / numSublists);
	for (let i = 0; i < list.length; i += sublistSize) {
		sublists.push(list.slice(i, i + sublistSize));
	}

	return sublists;
};

export const formatNumberToINR = (number) => {
	// Use toLocaleString with options for Indian Numbering System
	return number.toLocaleString("en-IN");
};

export const arrayToObjectByKey = (array, keyName) => {
	// Clone the original array
	const clonedArray = [...array];
	// Perform the transformation on the cloned array
	const result = clonedArray.reduce((acc, obj) => {
		// Extract the value of the specified key from each object
		const keyValue = obj[keyName];

		// Create an array under the extracted key if it doesn't exist
		if (!acc[keyValue]) {
			acc[keyValue] = [];
		}

		// Push the current object into the array under the extracted key
		acc[keyValue].push(obj);

		return acc;
	}, {});

	return result;
};
