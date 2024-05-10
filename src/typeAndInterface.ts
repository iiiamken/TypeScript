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
