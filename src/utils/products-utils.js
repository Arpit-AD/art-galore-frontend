export const divideListIntoSublists = (list, numSublists) => {
	const sublists = [];
	const sublistSize = Math.ceil(list.length / numSublists);

	for (let i = 0; i < list.length; i += sublistSize) {
		sublists.push(list.slice(i, i + sublistSize));
	}

	return sublists;
};
