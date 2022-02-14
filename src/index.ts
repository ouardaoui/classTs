import { NumberCollection } from "./NumberCollecetion";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";



const numbercollection = new NumberCollection([-5, -10, 45, 71, 1, 6])
numbercollection.sort()
console.log(numbercollection.data)
// sorter.sort()

// console.log(numbercollection.data)

const charactercollection = new CharactersCollection("aXcB")


charactercollection.sort()

console.log(charactercollection.data)
