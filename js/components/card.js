import React from "react";
import global from "../util/global";
import constantsService from "../util/constant";
import Actions from '../actions/Actions';
import LinkStore from "../stores/Store"

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
       e.preventDefault();
       Actions.clickedCard({item : this.props.item, isFaceUp: this.props.isFaceUp, key : this.props.key, id: this.props.id});
    };

    render() {
        
        var divStyle = {
          backgroundImage: 'url(' + this.props.url + ')',
        };
        
        var flip = !this.props.isFaceUp ? '' : 'flip'

        return (<div className={"card_container" + ' ' + flip} onClick={this.onChange.bind(this)}> 
        	<div className="card shadow">
        		<div className="front face"></div>
        		<div className="back face text-center pagination-center">
        			<div className="imageCard" style={divStyle}>
			        </div>
        		</div>
        	</div>
        </div>);
    }
}
