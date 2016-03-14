
const http = require('http');
import {get} from "jquery";

export default function request(url) {
  return new Promise(resolve => {
    
        get(url).done(resp=>{
            resolve(resp);
        })
  });
}