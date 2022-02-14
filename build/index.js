"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollecetion_1 = require("./NumberCollecetion");
const CharactersCollection_1 = require("./CharactersCollection");
const numbercollection = new NumberCollecetion_1.NumberCollection([-5, -10, 45, 71, 1, 6]);
numbercollection.sort();
console.log(numbercollection.data);
// sorter.sort()
// console.log(numbercollection.data)
const charactercollection = new CharactersCollection_1.CharactersCollection("aXcB");
charactercollection.sort();
console.log(charactercollection.data);
