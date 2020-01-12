import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
// 数据持久化
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import * as rdc from '@/reducer'

//我要对那些state做数据持久化
const rootPersistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2   // 多层
}

//单独为 某个 reduce 做数据持久化
const myPersistReducer = combineReducers({
    login: persistReducer(
        rootPersistConfig,
        rdc.login
    ),
    global: rdc.global, // 全局
    shoplist: persistReducer(
        rootPersistConfig,
        rdc.shoplist
    ),
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    myPersistReducer,
    composeEnhancers(applyMiddleware(promise, thunk))
)

window.store = store

export { store }