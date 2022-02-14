"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const array = this.data.split("");
        // const array = [array[rightIndex], array[leftIndex]]
        const temp = array[rightIndex];
        array[rightIndex] = array[leftIndex];
        array[leftIndex] = temp;
        this.data = array.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
