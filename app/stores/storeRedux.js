import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as service from "../services/twits";

const defaultState = {
    twits :[]
}


function twitStore(state = defaultState, action){
    
    switch (action.type) {
        case 'ADD_TWIT':
            return Object.assign({}, state, {
                twits: state.twits.concat([{
                    twit: action.twit,
                }]),
            });
        case 'LOAD':
          state.twits.push(action.twit);
          return state;
        
        case 'ASYNC':
            return dispatch => {
                service.getTwits(action.user.name).then((data)=>{
                    dispatch.twits = data;
                    return dispatch;
                })
             };
        
        default:
            return state;
    }
}

export default createStore(twitStore, applyMiddleware(thunk));