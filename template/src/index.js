import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Routers from './routers';
import 'styles/common.less';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers';

let store = createStore(rootReducer, applyMiddleware(thunk));

const unsubscribe = store.subscribe(() =>
  	console.log("store: ", store.getState())
)

ReactDOM.render(
    (<LocaleProvider locale={zhCN}>
    	<Provider store={store}>
    		<Routers />
		</Provider>
    </LocaleProvider>), document.getElementById('root')
);
