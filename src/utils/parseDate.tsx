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
			'jan': 1, 'feb': 2, 'mar': 3, 'apr': 4, 'may': 5, 'jun': 6,
			'jul': 7, 'aug': 8, 'sep': 9, 'oct': 10, 'nov': 11, 'dec': 12,
			'since': 12, 'present': 0
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
