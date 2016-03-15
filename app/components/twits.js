import React from "react";
import Twit from "./twit";
import Actions from "../actions/actions";
import Store from "../stores/store";
import StoreRedux from "../stores/storeRedux";
import * as service from "../services/twits";


const user = {
    name: "pypestream"
}

export default class Twits extends React.Component {
    
    constructor(props){
        super(props);
        
        
        this.state = StoreRedux.getState();
        
        
        StoreRedux.subscribe(()=>{
            this.setState(StoreRedux.getState());
        })
    }
    
  
    
    handleClick(){
        StoreRedux.dispatch({
            type: "ASYNC",
            user
        })
    }
    
    componentDidMount(){
        StoreRedux.dispatch({
            type: "ASYNC",
            user
        })
    }
    
    render(){
        
        
        var twits = this.state.twits.map(function(item, index){
            return(
                <Twit key={index} title={item.text} link={item.source} image={item.user.profile_image_url_https}></Twit>
            )
        })
        
        
        return(
            <div>
                 <p onClick={this.handleClick}>
                    Click to load
                  </p>
                {twits}
            </div>
        );
    }
    
}