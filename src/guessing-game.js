class GuessingGame {
    constructor() {}

    setRange(min, max) {

    	this.min = min;
    	this.max = max;
    }

    guess() {

    	this.curNum = Math.ceil((this.min + this.max) / 2);
    	return this.curNum;
    }

    lower() {

    	this.max = this.curNum;
    }

    greater() {

    	this.min = this.curNum;
    }
}

module.exports = GuessingGame;
