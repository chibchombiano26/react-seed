import actions from "../actions/actions";
import request from './request';
import Store from "../stores/storeRedux";

export function getTwits(user) {
  return new Promise((resolve)=>{
    
    request('/twitter?user=' + user).then(data => {
       this.twits = data;
       actions.dataLoaded(this.twits);
       Store.dispatch({type: 'DATA_LOADED', twits : this.twits});
       resolve(this.twits);
     });
    
  })
  
}