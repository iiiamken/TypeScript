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
