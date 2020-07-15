import React, { Component } from 'react';
import { configure } from 'mobx';

import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore, SynchronizedHistory } from 'mobx-react-router';
import { createHashHistory, History } from 'history';
import { RootStore } from './stores/RootStore';

import { default as bemCssModules } from 'bem-css-modules';
import { default as AppModuleCss } from './App.module.css';

import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { StoreProvider } from './stores/StoreProvider';
import { Routes } from './containers/Routes/Routes';
import { SideBar } from './components/SideBar/SideBar';
import { Footer } from './components/Footer/Footer';
// tslint:disable-next-line: no-import-side-effect
import './App.css';
import { MobileHeader } from './components/MobileHeader/MobileHeader';

bemCssModules.setSettings({
	modifierDelimiter: '--',
	throwOnError: true,
});

const block = bemCssModules(AppModuleCss);

const styleNode = document.createElement('noscript');
document.head.insertBefore(styleNode, document.head.firstChild);

configure({ enforceActions: 'observed' });
export interface IAppState {
	error?: Error;
}

export class App extends Component<IAppState> {

	private readonly browserHistory: History;
	private readonly rootStore: RootStore;
	private readonly history: SynchronizedHistory;

	constructor(props: {}) {
		super(props);

		this.browserHistory = createHashHistory();
		this.rootStore = new RootStore();
		this.history = syncHistoryWithStore(this.browserHistory, this.rootStore.routerStore);

		this.state = {};
	}

	static getDerivedStateFromError(error: Error): IAppState {
		return { error };
	}

	render(): JSX.Element {
		const { error }: IAppState = this.state;

		if (error) {
			return (
				<div className={block()}>
					<ErrorMessage {...{ error }} />
				</div>
			);
		}

		return (
			<div className={block()}>
				<Provider rootStore={this.rootStore}>
					<StoreProvider >
						<MobileHeader />
						<div className={block('container')}>
							<SideBar />
							<div className={block('content')}>
								<Router history={this.history}>
									<Routes />
								</Router>
							</div>
						</div>
						<Footer />
					</StoreProvider>
				</Provider>
			</div>
		);
	}
}
