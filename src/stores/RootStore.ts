import { RouterStore } from 'mobx-react-router';
import { SearchResultsStore } from './SearchResultsStore';

export interface IRootStore {
	rootStore: RootStore;
}

export class RootStore {
	public readonly routerStore: RouterStore;
	public readonly searchResultsStore: SearchResultsStore;

	constructor() {
		this.routerStore = new RouterStore();
		this.searchResultsStore = new SearchResultsStore();
	}
}
