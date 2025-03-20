// parse MMM YYYY to Date object

const parseDate = (dateStr: string): Date => {
	try {
		// Extract the first date part (before the dash)
		const parts = dateStr.split('-');
		if (parts.length < 1) return new Date(0);

		const startDate = parts[0].trim();
		const dateParts = startDate.split(' ');
		if (dateParts.length < 2) return new Date(0);

		const month = dateParts[0];
		const year = dateParts[1];

		// Map month abbreviations to month numbers (0-11)
		const monthMap: Record<string, number> = {
			'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'may': 4, 'jun': 5,
			'jul': 6, 'aug': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11
		};

		const monthKey = month.toLowerCase();
		if (!(monthKey in monthMap)) return new Date(0);

		return new Date(parseInt(year), monthMap[monthKey], 1);
	} catch (error) {
		console.error("Error parsing date:", dateStr, error);
		return new Date(0); // Default to oldest date on error
	}
};

export default parseDate;
