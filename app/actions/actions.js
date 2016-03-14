import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let Actions = {
    
    dataLoaded(){
        AppDispatcher.dispatch({
            actionType: ActionTypes.DATA_LOADED,
            param : ''
        })
    }
    
}

export default Actions;