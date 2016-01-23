class Util{
    
    // used to remove something form an array by index
    removeByIndex(arr, index) {
        arr.splice(index, 1);
    }
    
    insertByIndex(arr, index, item) {
    	arr.splice(index, 0, item);
    }
}

export default new Util();