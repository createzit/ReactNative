import React from 'react';
import Main from './components/MainComponent';
import {YellowBox} from 'react-native';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

YellowBox.ignoreWarnings(['Warming: ...'])
console.disableYellowBox=true

const store = ConfigureStore();

export default function App() {
	return (<Provider store={store}>
				<Main />
			  </Provider>
			);
}
