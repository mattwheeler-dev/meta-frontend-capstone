const seededRandom = (seed) => {
	var m = 2 ** 35 - 31;
	var a = 185852;
	var s = seed % m;
	return () => {
		return (s = (s * a) % m) / m;
	};
};

export const fetchAPI = (date) => {
	let result = [];
	let newDate = new Date(date);
	let random = seededRandom(newDate.getDate());

	for (let i = 17; i <= 23; i++) {
		if (random() < 0.5) {
			result.push(i + ":00");
		}
		if (random() < 0.5) {
			result.push(i + ":30");
		}
	}
	return result;
};

export const submitAPI = (formData) => {
	return true;
};
