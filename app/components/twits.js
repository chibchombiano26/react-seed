import React from "react";
import Twit from "./twit";
import Actions from "../actions/actions";
import Store from "../stores/store";
import * as service from "../services/twits";



export default class Twits extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state = ({
           twits : [] 
        });
        
        this.twitService = service;
        this.twitService.getTwits("pypestream");
        this.dataLoaded = this.dataLoaded.bind(this);
    }
    
    
    dataLoaded = () =>{
        
        this.setState({
            twits : this.twitService.twits
        })
    }
    
    componentDidMount(){
        Store.on("data_loaded", this.dataLoaded);
    }
    
    render(){
        
        
        var twits = this.state.twits.map(function(item, index){
            return(
                <Twit title={item.text} link={item.source} image={item.user.profile_image_url_https}></Twit>
            )
        })
        
        
        return(
            <div>
                {twits}
            </div>
        );
    }
    
}