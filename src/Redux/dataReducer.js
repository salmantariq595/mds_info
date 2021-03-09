import {DATA} from '../shared/data/data';
import * as ActionTypes from "./actionTypes";

export const DataReducer=(state=DATA, action) => {
    switch(action.type){
        case ActionTypes.ADD_DATA:
            var data=action.payload;
            data.id=state.length;
            data.date=new Date().toISOString();
            return state.concat(data);

        default:
            return state
    }
}