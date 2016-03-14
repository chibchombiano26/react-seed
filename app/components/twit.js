import React from "react";
import Actions from "../actions/actions";
import Store from "../stores/store";


export default class Twit extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            <div className="card">
                <div className="col s4 m2">
                  <img src={this.props.image} alt="" class="circle responsive-img valign"/>
                </div>
                <div className="card-content"><p>{this.props.title}</p></div>
                <div className="card-action">
                    Source <div className="content" dangerouslySetInnerHTML={{__html: this.props.link}}></div>
                </div>
            </div>
        );
    }
    
}