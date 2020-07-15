import * as React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HomeContainerModuleCss } from './HomeContainer.module.css';

import { SearchList } from '../../components/SearchList/SearchList';
import { SearchInput } from '../../components/SearchInput/SearchInput';

const block = bemCssModules(HomeContainerModuleCss);

export const HomeContainer = (): JSX.Element => (
	<div className={block()}>
		<div className={block('header')}>
			<div className={block('search-container')}>
				<SearchInput />
				<SearchList />
			</div>
		</div>
		<div className={block('content')}>
			<img src="./main.png" alt="main" />
		</div>
	</div>
);
