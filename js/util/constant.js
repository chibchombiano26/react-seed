class Constant {

    constructor(){
        this.rows = 2;
        this.columns = 2;
    }
    
    upLevel(){
        //this.rows = this.rows +2;
        this.columns = this.columns +2;
    }
    
    setVars(row, column){
        this.rows = row;
        this.columns = column;
    }

    getRows() {
        return this.rows;
    };
    getColumns() {
        return this.columns;
    };
    getNumMatches() {
        var item = (this.rows * this.columns) / 2;
        return item;
    };
}

export default new Constant();