//Imports for redux and redux store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createForms } from 'react-redux-form';

//Imports for shared data related Files
import {DataReducer} from "../Redux/dataReducer";
import { DATA } from '../shared/data/data';


export const ConfigureStore=()=> {
    const store=createStore(
        combineReducers({
            data:DataReducer,
            ...createForms({
                addData:DATA
            })
        }),applyMiddleware(thunk,logger)
    )
    return store
}