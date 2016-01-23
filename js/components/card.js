import React from "react";

export default class extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {isFaceUp : false};
        this.onChange = this.onChange.bind(this);
    }
    
    onChange = (e) => {
      e.preventDefault();
      let faceUp = !this.state.isFaceUp;
      this.setState({isFaceUp : faceUp});
    };
    
    render() {
        
        var flip = !this.state.isFaceUp? '' : 'flip'
        
        return (<div className={"card_container" + ' ' + flip} onClick={this.onChange.bind(this)}> 
        	<div className="card shadow">
        		<div className="front face"></div>
        		<div className="back face text-center pagination-center">
        			<p>{this.props.item}</p>
        		</div>
        	</div>
        </div>);
    }
}
