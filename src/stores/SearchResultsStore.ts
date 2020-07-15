import { action, observable, runInAction } from 'mobx';
import { default as axios } from 'axios';
import { IAjaxResponse } from '../models/IAjaxResponse';
import { ISearchResult } from '../dtos/ISearchResult';
import { ITeam } from '../models/ITeam';

export class SearchResultsStore {
	@observable
	searchQuery: string = '';

	@observable
	results: ITeam[] = [] as ITeam[];

	@action
	setSearchQuery = (query: string): void => {
		this.searchQuery = query;
	}

	@action
	searchCharacter = async (search: String): Promise<IAjaxResponse<ISearchResult> | null> => {
		const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${search}`;

		const response = await axios.get(url);

		const { teams }: ISearchResult = response.data;
		runInAction((): void => {
			this.results = teams;
		});
		return null;
	}
}
