import React from "react";
import Card from "./card";
import Deck from "../util/deckUtil"

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        var deck = Deck.makeDake();
        this.state = ({
            deck: deck,
            timerClass: '',
            timeLimit: 60
        })
    }


    componentDidMount() {
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
        }
    }

    render() {

        let cards = this.state.deck.rows.map(function(row, i) {
            return (
                <tr key={i}>
                {
                    row.cards.map(function(card, j){
                      j = (j +1) *10;
                      return <td><Card item={card.item} key={j}/></td>   
                    })
                }
            
            </tr>)
        })


        return (
            <div>
            <div className={"timer " + this.state.timerClass} >
		        {this.state.timeLimit} 	
            </div>
            <table className="table-top">
                <tbody>
                     {cards}
                </tbody>
            </table>
            </div>);
    }
}
