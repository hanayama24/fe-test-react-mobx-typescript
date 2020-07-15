import React from 'react';
import { StoreContext } from './StoreProvider';
import { RootStore } from './RootStore';

import { SearchResultsStore } from './SearchResultsStore';

const getRootStore = (): RootStore => {
	const rootStore = React.useContext(StoreContext);
	if (!rootStore) {
		throw new Error('Missing RootStore provider');
	}
	return rootStore;
};

export const useSearchResultsStore = (): SearchResultsStore => {
	const rootStore = getRootStore();
	return rootStore.searchResultsStore;
};
