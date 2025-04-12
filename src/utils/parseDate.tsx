const MONTH_MAP: Record<string, number> = {
	'jan': 1, 'feb': 2, 'mar': 3, 'apr': 4, 'may': 5, 'jun': 6,
	'jul': 7, 'aug': 8, 'sep': 9, 'oct': 10, 'nov': 11, 'dec': 12,
	'since': 0, 'present': 0, '': 0
};

const DATE_PATTERNS = [
	'(\\d{4})', // YYYY
	'([a-z]{3}) (\\d{4})', // MMM YYYY
	'([a-z]{3}) (\\d{4}) - ([a-z]{3}) (\\d{4})', // MMM YYYY - MMM YYYY
	'[sS]ince (\\d{4})', // Since YYYY
	'(\\d{4}) - [pP]resent', // Present
	'(\\d{4}) - (\\d{4})', // YYYY - YYYY
]

const validateDateFormat = (dateStr: string): boolean => {
	for (const pattern of DATE_PATTERNS) {
		const thisPattern = new RegExp(`^${pattern}$`, 'i');
		if (thisPattern.test(dateStr)) {
			return true;
		}
	}
	return false;
}

const getStartDate = (dateStr: string): Date => {
	
	if (dateStr.toLowerCase() === "present") {
		throw new Error(`dateStr ${dateStr} must not start with "Present".`);
	}
	
	const dateParts = dateStr.split(" - ");
		
	// If the date string is in the format of "YYYY", return Jan 01 of the current year as the end date
	const dateStrRegex = /^\d{4}$/;
	if (dateStrRegex.test(dateParts[0])) {
		return new Date(parseInt(dateParts[0]), 0, 1);
	}
	
	// Check if the date string is in the format of "Since YYYY"
	if (dateParts[0].toLowerCase().startsWith("since")) {
		const yearStr = dateParts[0].split(" ")[1];
		const year = parseInt(yearStr, 10);
		return new Date(year, 0, 1);
	}
	
	const [monthStr, yearStr] = dateParts[0].toLowerCase().split(" ");
	const month = MONTH_MAP[monthStr];
	const year = parseInt(yearStr, 10);
	
	return new Date(year, month - 1, 1);
}

const getEndDate = (dateStr: string): Date => {
	const dateParts = dateStr.split(" - ");
	
	/* 
	 * Check if the date string is in the format of "Since YYYY" or 
	 * if the second part is "Present"
	 * If ither condition is true, return today's date as the end date
	 */
	
	if (
		dateParts[0].toLowerCase().startsWith("since") ||
		(dateParts[1] !== undefined && dateParts[1].toLowerCase() === "present")
	) {
		const today = new Date();
		return new Date(today.getFullYear(), today.getMonth(), 1);
	}
	
	// Check if the date string is in the format of "YYYY"
	// If yes, return December 31 of the current year as the end date
	const dateStrRegex = /^\d{4}$/;
	if (dateStrRegex.test(dateParts[0])) {
		return new Date(new Date().getFullYear(), 11, 31);
	}
	
	const [monthStr, yearStr] = dateParts[1].toLowerCase().split(" ");
	const month = MONTH_MAP[monthStr];
	const year = parseInt(yearStr, 10);
	
	return new Date(year, month - 1, 1);
}

const parseDate = (dateStr: string): [Date, Date] => {
	
	if (!validateDateFormat(dateStr)) {
		return [
			new Date(2000, 0, 1),
			new Date(new Date().getFullYear(), 0, 1)
		];
	}
	
	const startDate = getStartDate(dateStr);
	const endDate = getEndDate(dateStr);
	
	if (startDate > endDate) {
		throw new Error(`Start date ${startDate} is after end date ${endDate}`);
	}
	return [startDate, endDate];
};

export default parseDate;
