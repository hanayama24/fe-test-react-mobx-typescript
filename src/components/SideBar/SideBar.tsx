import * as React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as SideBarModuleCss } from './SideBar.module.css';

const block = bemCssModules(SideBarModuleCss);

export const SideBar: React.FunctionComponent = (): JSX.Element => (
		<div className={block()}>
			<img src="./logo.svg" />

			<nav className={block('nav')}>
				<ul className={block('nav-list')}>
					<li className={block('nav-list-item')}>
						<a className={block('home-link')} href="/"> Home </a>
					</li>
					<li className={block('nav-list-item')}>
						<a className={block('browse-link')} href="/"> Browse </a>
					</li>
					<li className={block('nav-list-item')}>
						<a className={block('radio-link')} href="/"> RADIO </a>
					</li>
				</ul>
			</nav>

			<div className={block('library')}>
				<h2 className={block('title')}> YOUR LIBRARY </h2>
				<ul className={block('library-list')}>
					<li className={block('library-list-item')}>
						<a className={block('recently-link')} href="/"> RECENTLY PLAYED </a>
					</li>
					<li className={block('library-list-item')}>
						<a className={block('favorite-link')} href="/"> FAVORITE SONGS </a>
					</li>
					<li className={block('library-list-item')}>
						<a className={block('artists-link')} href="/"> ARTISTS </a>
					</li>
					<li className={block('library-list-item')}>
						<a className={block('albums-link')} href="/"> ALBUMS </a>
					</li>
				</ul>
			</div>

			<div className={block('playlists')}>
				<h2 className={block('title')}> PLAYLISTS </h2>
				<ul className={block('playlists-list')}>
					<li className={block('playlists-list-item')}>
						<a href="/"> TOP POP </a>
					</li>
					<li className={block('playlists-list-item')}>
						<a href="/"> CHARTING NOW </a>
					</li>
					<li className={block('playlists-list-item')}>
						<a href="/"> ROMANCE SEASON </a>
					</li>
				</ul>
			</div>
		</div>
);
