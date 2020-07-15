import * as React from 'react';
import { useParams } from 'react-router';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TeamContainerModuleCss } from './TeamContainer.module.css';
import { SearchResultsStore } from '../../stores/SearchResultsStore';
import { useSearchResultsStore } from '../../stores/hooks';
import { useAsyncEffect } from 'use-async-effect';
import { ITeam } from '../../models/ITeam';

const block = bemCssModules(TeamContainerModuleCss);

export const TeamContainer: React.FunctionComponent = (): JSX.Element | null => {
	const [ isLoaded, setIsLoaded ]: [ boolean, Function ] = React.useState(false);
	const [ searchResults, setSearchResults ]: [ITeam[], Function] = React.useState([]);
	const {
		results,
		searchCharacter,
	}: SearchResultsStore = useSearchResultsStore();
	const { team } = useParams();

	useAsyncEffect(async () => {
		await searchCharacter(team);

		setIsLoaded(true);
	}, []);

	React.useEffect(() => { setSearchResults(results); }, [ results ]);

	const teamInstance: ITeam | undefined =
		searchResults.find((teamItem) => teamItem.strTeam === team);

	if (!isLoaded) {
		return null;
	}

	return (
		<div className={block()}>
			<div className={block('text')}>
				<h2 className={block('title')}> Team Information </h2>
				<h3 className={block('subtitle')}> Country: </h3>
				<p> {teamInstance?.strCountry} </p>
				<h3 className={block('subtitle')}> Alternate: </h3>
				<p> {teamInstance?.strAlternate} </p>
				<h3 className={block('subtitle')}> Description: </h3>
				<p> {teamInstance?.strDescriptionEN} </p>
			</div>
			<div className={block('team-badge')}>
				<h2 className={block('title')}> {team} </h2>
				<img src={teamInstance?.strTeamBadge} alt="team-badge" />
			</div>
		</div>
	);
};
