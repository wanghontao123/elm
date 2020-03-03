import React from 'react';
import ReactDOM from 'react-dom';
import { AsyncLoading } from '@@'

// import 'antd/dist/antd.less';
// import 'antd-mobile/dist/antd-mobile.less'
import '@/styles/iconfont.css'
import '@/styles/rem.js';
import '@/styles/reset.css';
import './index.less';

import Router from '@/router/index'  // 路由
import { store } from './store'  //store
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'   //数据持久化
import { PersistGate } from 'redux-persist/lib/integration/react'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <Router />
            {/* axios 加载的效果 组件 */}
            <AsyncLoading />   
        </PersistGate>
    </Provider>
    , document.getElementById('root'));