import React from "react";
import Card from "./card";
import Clock from "./clock";
import Deck from "../util/deckUtil"
import Util from "../util/util"
import Actions from '../actions/Actions';
import Store from "../stores/Store"
import _ from 'lodash';
import Parse from "parse";



export default class Board extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = ({
            deck: []
        })
        
        this.cardClick = this.cardClick.bind(this);
        this.timeLimit = this.timeLimit.bind(this);
        this.dataLoaded = this.dataLoaded.bind(this);
    }

    initial() {
        this.selectedCards = [];
        this.allowClick = true;
        
        this.deck = Deck.createDeck();
        this.setState({
            deck : this.deck
        })
    }

    dataLoaded = () =>{
        this.initial();
    };
    
    cardClick = () => {

        if (this.allowClick) {
            var card = Store.getClickedCard();

            setTimeout(() => {
                this.validatePairs(card);
            }, 500);

            this.faceUpCard(card, true);

            this.setState({
                deck: this.deck
            })
        }

    };

    timeLimit = () => {
        this.allowClick = false;
        alert('Time out, please reload the browser');
    };

    validatePairs(card) {
        if (this.selectedCards.length == 0) {
            this.selectedCards.push(card);
        }
        else if (this.selectedCards.length == 1) {
            this.selectedCards.push(card);

            if (!(this.selectedCards[0].item === this.selectedCards[1].item)) {
                _.each(this.selectedCards, (e) => {
                    this.faceUpCard(e, false);
                });
            }
            this.selectedCards = [];
        }

        this.setState({
            deck: this.deck
        })

        var numberOfFaceUp = this.countFaceUp();

        if (numberOfFaceUp == 0) {
            Actions.resetTimer();

            this.deck = Deck.upLevel();
            this.state = ({
                deck: this.deck
            })

            this.setState({
                deck: this.deck
            });

        }

    }

    faceUpCard(card, value) {
        _.each(this.deck.rows, (e) => {
            var row = e;

            _.each(row.cards, (item) => {
                if (card.id == item.id) {
                    item.isFaceUp = value;
                }
            })
        });
    }

    countFaceUp() {
        let i = 0;
        _.each(this.deck.rows, (e) => {
            var row = e;

            _.each(row.cards, (item) => {
                if (!item.isFaceUp) {
                    i = i + 1;
                }
            })
        });

        return i;
    }

    componentDidMount() {
        Store.on("clicked_card", this.cardClick);
        Store.on("time_limit", this.timeLimit);
        Store.on("data_loaded", this.dataLoaded);
    }

    render() {

        let cards;
        if (this.state.deck.rows) {
                cards = this.state.deck.rows.map(function(row, i) {
                return (
                    <tr key={i}>
                        {
                            row.cards.map(function(card, j){
                              return <td><Card item={card.item} key={card.id} id={card.id} isFaceUp={card.isFaceUp} url={card.url}/></td>   
                            })
                        }
                    
                    </tr>)
            })
        }


        return (
            <div>
            <Clock></Clock>
            <table className="table-top">
                <tbody>
                     {cards}
                </tbody>
            </table>
            </div>);
    }
}
