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
                case ActionTypes.CARD_SELECTED:
                    selectedsCard = action.card;
                    this.emit("card_selected");
                    break;
                case ActionTypes.CLICK_CARD:
                    clickedCard = action.clicked;
                    this.emit("clicked_card");
                    break;
                case ActionTypes.TIME_LIMIT:
                    this.emit("time_limit");
                    break;
                case ActionTypes.RESET_TIMER:
                    this.emit("reset_timer");
                    break;
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