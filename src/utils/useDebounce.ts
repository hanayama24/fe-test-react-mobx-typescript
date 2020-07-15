import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number): String => {
	const [ debouncedValue, setDebouncedValue ]: [String, Function] = useState(value);

	useEffect(
		() => {
			const handler = setTimeout(() => { setDebouncedValue(value); }, delay);
			return () => {
				clearTimeout(handler);
			};
		// tslint:disable-next-line: align
		}, [ value ]
	);

	return debouncedValue;
};
