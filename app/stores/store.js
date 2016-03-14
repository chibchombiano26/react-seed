import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';
import {EventEmitter} from 'events';

let selectedsCard;
let clickedCard;

class Store extends EventEmitter{
    constructor(props){
        super(props);
        
        AppDispatcher.register(action=>{
            switch (action.actionType) {
                case ActionTypes.DATA_LOADED:
                    this.emit("data_loaded");
                    break;
                default:
                    // code
            }
        });
    }
    
    getCard(){
        return selectedsCard;
    }
    
    getClickedCard(){
        return clickedCard;
    }
    
}

export default new Store();