import * as ActionTypes from './actionTypes'

export const addData=(category,name,picture,rating,detail) =>({
    type:ActionTypes.ADD_DATA,
    payload:{
        category:category,
        name:name,
        picture:picture,
        rating:rating,
        detail:detail
    }
})