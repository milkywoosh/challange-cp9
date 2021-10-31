
// input (gunting, kertas, batu);

export class Suitclass {

    constructor() {
        this.pool = ["gunting", "batu", "kertas"];
        this.rand = Math.floor(Math.random() * this.pool.length);
        this.result = null;
        this.inputP1 = null;
    }

    computer() {
        return this.pool[this.rand];
    }

    getInputCOM() {
        // return this.pool[this.rand];
        console.log("computer: ", this.pool[this.rand])
    }

    getInputP1() {
        // return this.inputP1;
        console.log("player 1: ", this.inputP1)
    }

    suit(inputUser) {
        this.inputP1 = inputUser;
        if (inputUser === "gunting") {
            if (this.pool[this.rand] === inputUser) {
                this.result = "seri";
            } else if (this.pool[this.rand] === "kertas") {
                this.result = "menang"
            } else if (this.pool[this.rand] === "batu") {
                this.result = "kalah"
            }
        } else if (inputUser === "batu") {
            if (this.pool[this.rand] === inputUser) {
                this.result = "seri";
            } else if (this.pool[this.rand] === "kertas") {
                this.result = "kalah"
            } else if (this.pool[this.rand] === "gunting") {
                this.result = "menang"
            }
        } else if (inputUser === "kertas") {
            if (this.pool[this.rand] === inputUser) {
                this.result = "seri";
            } else if (this.pool[this.rand] === "gunting") {
                this.result = "kalah"
            } else if (this.pool[this.rand] === "batu") {
                this.result = "menang"
            }
        }

        return (this.result);
    }
}