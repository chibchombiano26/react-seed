import React from "react";
import Store from "../stores/storeRedux";

export default class Add extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    submit(e){
        if (e.keyCode  == 13) {
            
            var value =  {
                text : e.target.value,
                user:{
                    profile_image_url_https : 'https://pbs.twimg.com/profile_images/624529854311100416/1svjKAKq_normal.png',
                }
            }
            
            Store.dispatch({type: 'ADD', value: value });
            e.target.value = "";
        }
    }
    
    render(){
        return(
            <input onKeyDown={this.submit.bind(this)}/>    
        );
    }
    
}