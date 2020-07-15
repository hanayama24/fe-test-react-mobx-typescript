import * as React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as FooterModuleCss } from './Footer.module.css';

const block = bemCssModules(FooterModuleCss);

export const Footer: React.FunctionComponent = (): JSX.Element => (
		<div className={block()}>
			<img src="./footer.png" />
		</div>
);
