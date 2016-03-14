import actions from "../actions/actions";
import request from './request';

export function getTwits(user) {
  return new Promise((resolve)=>{
    
    request('/twitter?user=' + user).then(data => {
       this.twits = data;
       actions.dataLoaded(this.twits);
       resolve(this.twits);
     });
    
  })
  
}