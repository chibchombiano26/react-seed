import constantsService from './constant';
import utilService from './util';
import Global from './global'
import Parse from "parse";
import Actions from '../actions/Actions';

class deckUtil{
    
    constructor(){
        
        this.images = [];
        
        Parse.initialize("hfxqabnwIplOsugoe3N8xCyDJppdsU632TkxgsnH", "DEbOLceWp9X39CsoxWvydcEz8YR1YwNW8eB1dxY3");
        let Simpsoms = Parse.Object.extend("simpsoms");
        let simpson = new Simpsoms();
        let query = new Parse.Query(simpson);
        query.find().then((data, err)=>{
       
            this.images = data.map((item)=>{
                var element = item.toJSON();
                return {id: element.objectId, url: element.pictureUrl};
            });
            
            Actions.dataLoaded();
        })
    }
    
    upLevel(){
        constantsService.upLevel();
        return this.makeDake(this.images);
    }
    
    createDeck(){
        return this.makeDake(this.images);
    }
    
    makeDake(data){
        var rows = constantsService.getRows();
    	var cols = constantsService.getColumns();
    	var key = this.createRandom(data);
    	var deck = {};
    	deck.rows = [];
    
    	// create each row
    	for(var i = 0; i < rows; i++) {
    		var row = {};
    		row.cards = [];
    		
    		// creat each card in the row
    		for (var j = 0; j < cols; j++) {
    			var card = {};
    			var element = key.pop()
    			card.isFaceUp = false;
    			card.item = element.id;
    			card.id = utilService.makeid();
    			card.url = element.url;
    			row.cards.push(card);
    		}
    		deck.rows.push(row);
    	}
    	return deck;
    }
    
    createRandom(data) {
    	var matches = constantsService.getNumMatches();
    	var pool = [];
    	var answers = [];
    	
    
    	var items = data;    
    
    	// create the arrays for random numbers and item holder
    	for (var i = 0; i < matches * 2; i++) {
    		pool.push(i); // random numbers
    	}
    	
    	// generate an array with the random items
    	for (var n = 0; n < matches; n++) {
    		// grab random letter from array and remove that letter from the
    		// original array
    		var randLetter = Math.floor((Math.random() * items.length));
    		var letter = items[randLetter];
    		utilService.removeByIndex(items, randLetter);
    		// generate two random placements for each item
    		var randPool = Math.floor((Math.random() * pool.length));
    		
    		// remove the placeholder from answers and insert the letter into 
    		// random slot
    		utilService.insertByIndex(answers, pool[randPool], letter);
    		
    		// remove random number from pool
    		utilService.removeByIndex(pool, randPool);
    		
    		// redo this process for the second placement
    		randPool = Math.floor((Math.random() * pool.length));
    		utilService.insertByIndex(answers, pool[randPool], letter);
    
    		// remove rand number from pool
    		utilService.removeByIndex(pool, randPool);
    	}
    	return answers;
    } 
    
}

export default new deckUtil();