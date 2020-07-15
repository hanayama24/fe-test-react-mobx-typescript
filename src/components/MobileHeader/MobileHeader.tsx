import * as React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as MobileHeaderModuleCss } from './MobileHeader.module.css';

const block = bemCssModules(MobileHeaderModuleCss);

export const MobileHeader: React.FunctionComponent = (): JSX.Element => (
		<div className={block()}>
			<div className={block('menu')}>	<img src="./icon-menu.svg" /></div>
			<div className={block('logo')}><img src="./logo.svg" /></div>
			<div className={block('user')}><img src="./user.png" /></div>
		</div>
);
