class Global {
    constructor(){
         this.currentSessionOpen = false;
         this.previousCard = null;
         this.numPairs = 0;
    }
}

export default new Global();