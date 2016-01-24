import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let Actions = {
    
    
    clickedCard(clicked){
        AppDispatcher.dispatch({
            actionType: ActionTypes.CLICK_CARD,
            clicked : clicked
        })
    },
    
    timeOut(){
        AppDispatcher.dispatch({
            actionType: ActionTypes.TIME_LIMIT,
            param : ''
        })
    },
    
    resetTimer(){
        AppDispatcher.dispatch({
            actionType: ActionTypes.RESET_TIMER,
            param : ''
        })
    },
    
    dataLoaded(){
        AppDispatcher.dispatch({
            actionType: ActionTypes.DATA_LOADED,
            param : ''
        })
    }
    
    
}

export default Actions;