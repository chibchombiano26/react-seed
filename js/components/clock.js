import React from "react";
import Actions from '../actions/Actions';
import Store from "../stores/Store"



export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        
        this.initial();
        this.resetTimer = this.resetTimer.bind(this);
    }
    
    initial(){
        this.state = ({
            timerClass: '',
            timeLimit: 60
        })
    }
    
    resetTimer = () => {
        this.initial();
    };


    componentDidMount() {
        Store.on("reset_timer", this.resetTimer);
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        if (this.state.timeLimit < 14) {
            this.setState({
                timeLimit: this.state.timeLimit - 1,
                timerClass : 'critical'    
            });
        }
        else {
            this.setState({
                timeLimit: this.state.timeLimit - 1,
                timerClass : ''
            });
        }
        
        if(this.state.timeLimit <1){
            this.setState({
                timeLimit: 0
            });
            
            clearInterval(this.interval);
            Actions.timeOut();
        }
    }

    render() {
      
        return (
            <div className={"timer " + this.state.timerClass} >
		        {this.state.timeLimit} 	
            </div>
        );
    }
}
