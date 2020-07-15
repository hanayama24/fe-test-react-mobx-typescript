import * as React from 'react';
import { observer } from 'mobx-react-lite';

import { default as bemCssModules } from 'bem-css-modules';
import { default as SearchListModuleCss } from './SearchList.module.css';

import { ITeam } from '../../models/ITeam';
import { SearchResultsStore } from '../../stores/SearchResultsStore';
import { useSearchResultsStore } from '../../stores/hooks';
import { SearchListItem } from '../SearchListItem/SearchListItem';

const block = bemCssModules(SearchListModuleCss);

export const SearchList = observer((): JSX.Element | null => {
	const [ searchResults, setSearchResults ]: [ITeam[], Function] = React.useState([]);
	const {
		results,
		searchQuery,
	}: SearchResultsStore = useSearchResultsStore();

	React.useEffect(() => { setSearchResults(results); }, [ results, searchQuery ]);

	if (!searchResults.length || !searchQuery.length) {
		return null;
	}

	const renderSearchResults =
			searchResults.map((item: ITeam, index: number) => <SearchListItem team={item} key={index} />);

	return (
		<div className={block()}>
			{renderSearchResults}
		</div>
	);
});
