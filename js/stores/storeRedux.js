import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as service from "../services/twits";

const defaultState = {
    twits :[]
}


function twitStore(state = defaultState, action){
    
    switch (action.type) {
        case 'ADD':
            state.twits.unshift(action.value);
            return state;
        case 'DELETE':
            state.twits = state.twits.filter(function(el){
              return el.text !== action.id;
            });
            return state;
        
        case 'DATA_LOADED':
            state.twits = action.twits;
            return state;
        /*
        case 'ASYNC':
            return dispatch => {
                service.getTwits(action.user.name).then((data)=>{
                    dispatch.twits = data;
                    return dispatch;
                })
             };
         */
        
        
        default:
            return state;
    }
}

export default createStore(twitStore, applyMiddleware(thunk));