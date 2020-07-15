import * as React from 'react';

import { default as bemCssModules } from 'bem-css-modules';
import { default as SearchListItemModuleCss } from './SearchListItem.module.css';
import { ITeam } from '../../models/ITeam';
import { Link } from 'react-router-dom';

const block = bemCssModules(SearchListItemModuleCss);

const LETTER_COUNT = 2;

interface ISearchListItemProps {
	team: ITeam;
}

export const SearchListItem = (props: ISearchListItemProps): JSX.Element => {
	const { team }: ISearchListItemProps = props;
	const renderTeamBadge = (): JSX.Element => {
		if (team.strTeamBadge) {
			return (<img src={team.strTeamBadge} alt="image"/>);
		}

		return (<span className={block('letter-badge')}> {team.strTeam.slice(0, LETTER_COUNT)} </span>);
	};

	return (
		<Link className={block()} to={`/teams/${team.strTeam}`}>
			<div className={block('item-img')}>
				{renderTeamBadge()}
			</div>
			<span className={block('item-name')}> {team.strTeam} </span>
		</Link>
	);
};
