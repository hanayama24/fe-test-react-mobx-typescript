import * as React from 'react';
import { throttle } from 'lodash';
import { default as bemCssModules } from 'bem-css-modules';
import { default as SearchInputModuleCss } from './SearchInput.module.css';

import { useSearchResultsStore } from '../../stores/hooks';
import { SearchResultsStore } from '../../stores/SearchResultsStore';

const block = bemCssModules(SearchInputModuleCss);
const THROTTLE_DELAY = 500;

export const SearchInput = (): JSX.Element => {
	const [ inputValue, setInputValue ]: [string, Function] = React.useState('');

	const {
		searchCharacter,
		setSearchQuery,
	}: SearchResultsStore = useSearchResultsStore();

	const handlerChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
		setSearchQuery(event.target.value);

		await searchCharacter(event.target.value);
	};

	const handleInputThrottled = throttle(handlerChange, THROTTLE_DELAY);

	return (
		<div className={block()}>
			<input
				className={block('input')}
				placeholder="Search for teams etc ..."
				onChange={handleInputThrottled}
				value={inputValue}
			/>
		</div>
	);
};
