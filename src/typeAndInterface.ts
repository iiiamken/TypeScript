// Type aliases
type stringOrNum = string | number
type stringOrNumArr = (string | number)[]

type Guitarist = {
  name: string
  active?: boolean
  albums: stringOrNumArr
}

//literal types
let myName: "Dave"

let username: "Dave" | "John" | "Mike"
username = "John"

//functions
const add = (a: number, b: number): number => {
  return a + b
}

const logMsg = (message: any): void => {
  console.log(message)
}

const subtract = (c: number, d: number): number => {
  return c - d
}
//type aliases
// type mathFunc = (a: number, b: number) => number

let multiply: mathFunc = (c, d) {
  return c * d
}

console.log(multiply(2, 2))

//interfaces
interface mathFunc {(a: number, b: number): number}

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") { // "type guard"
    return a + b + c
  }
  return a + b
}

//default parameters
const sumAll = (a: number, b: number, c: number = 0): number =>{
  return a + b + c
}

//rest parameters
const total = (a:number, ...nums: number[]): number => {
  return a + nums.reduce((pv, cv) => pv + cv)
}

//never type
const makeError = (msg: string): never => {
  throw new Error(msg)
}

// const infinite = (): never => {
//   let i: number = 1
//   while (true) {
//     i++
//     }
//   }

const infinite = ()=> {
  let i: number = 1
  while (true) {
    i++
    if (i > 100) { //added a break to avoid endless loop
      break
    }
  }
}

//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false
}

//when never type is useful
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return 'string'
  if(isNumber(value)) return 'number'

  return makeError("this code should never execute")
}
