import React from "react";
import Actions from "../actions/actions";
import Store from "../stores/storeRedux";


export default class Twit extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    deleteElement(){
       Store.dispatch({
           type: "DELETE",
           id: this.props.title
       }) 
    }
    
    render(){
        
        return(
            <div className="card">
                <div className="col s4 m2">
                  <img src={this.props.image} alt="" className="circle responsive-img valign"/>
                </div>
                <div className="card-content"><p>{this.props.title}</p></div>
                <div className="card-action">
                    Source <div className="content" dangerouslySetInnerHTML={{__html: this.props.link}}></div>
                    <div className="content">
                        <a onClick={this.deleteElement.bind(this)}>
                            delete
                        </a>
                    </div>
                </div>
                
            </div>
        );
    }
    
}