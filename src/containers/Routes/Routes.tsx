import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeContainer } from '../HomeContainer/HomeContainer';
import { TeamContainer } from '../TeamContainer/TeamContainer';

const renderDevTool = (): JSX.Element | null => {
	if (process.env.NODE_ENV !== 'production') {
		// tslint:disable-next-line:no-require-imports
		const DevTools = require('mobx-react-devtools').default;
		return <DevTools />;
	}
	return null;
};

export const Routes = (): JSX.Element => (
		<React.Fragment>
			<Switch>
				<Route exact={true} path="/" component={HomeContainer}/>
				<Route path="/teams/:team" component={TeamContainer}/>
			</Switch>
			{renderDevTool()}
		</React.Fragment>
);
