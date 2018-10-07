import {createStore} from 'redux';
import {appReducer} from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

export default createStore(appReducer, devToolsEnhancer());