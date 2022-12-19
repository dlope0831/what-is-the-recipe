import {  useReducer } from 'react';

import {
    SEARCH_RECIPE
} from './actions';


export const reducer = (state, action) => {
    switch(action.type){
    case SEARCH_RECIPE:
    return {
        ...state, 
        recipes: [ ...action.recipes]
    }
}
}