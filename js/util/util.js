class Util {

    // used to remove something form an array by index
    removeByIndex(arr, index) {
        arr.splice(index, 1);
    }

    insertByIndex(arr, index, item) {
        arr.splice(index, 0, item);
    }

    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
}

export default new Util();