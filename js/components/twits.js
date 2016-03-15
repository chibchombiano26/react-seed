import React from "react";
import Twit from "./twit";
import Add from "./add";
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
            console.log(StoreRedux.getState());
            this.setState(StoreRedux.getState());
        })
    }
    
    
    componentDidMount(){
        service.getTwits('pypestream');
    }
    
    render(){
        
        var twits = this.state.twits.map(function(item, i){
            return(
                <div>
                    <Twit key={i} title={item.text} link={item.source} image={item.user.profile_image_url_https}></Twit>
                </div>
            )
        })
        
        
        return(
            <div>
                <Add/>
                {twits}
            </div>
        );
    }
    
}