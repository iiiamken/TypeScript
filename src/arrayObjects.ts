let stringArr = ["one", "hey", "dave"]

let guitars = ["Strat", "Les Paul", 5150]

let mixedData = ["EVH", 1984, true]

stringArr[0] = "John"

stringArr.push("hey")

guitars[0] = 1984

guitars.unshift("Jim")

let test = [1, 2, 3]
let test2 = test

//tuples

let myTuple: [string, number, boolean] = ["Dave", 42, true]

let mixed = ["John", 5, false]

mixed = myTuple // works bcus its exacly the same set of data types

myTuple = mixed

myTuple[2] = true

//Objects
