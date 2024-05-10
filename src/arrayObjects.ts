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

let bands: string[] = []

mixed = myTuple // works bcus its exacly the same set of data types

myTuple = mixed

myTuple[2] = true

//Objects
let myObj: object
myObj = [] // will be type object
myObj = bands //bands = array of strings
myObj = {}

const exampleObj = {
  prop1: "Dave",
  prop2: true,
}

exampleObj.prop1 = "john"
exampleObj.prop1 = 5

type Guitarist = {
  name: string
  active: boolean
  albums: (number | string)[]
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
}

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "III"],
}
