type One = string
type Two = string | number
type Three = "hello"

//convert to more or less specific types
let a: One = "hello"
let b = a as Two // less specific
let c = a as Three //more specific

// using angled brackets
let d = <One>"world" //we also can set a value thereafter
let e = <string | number>"world"

/**
 * Returns the sum of two numbers if the third parameter is "add", or concatenates two numbers as strings if the third parameter is "concat".
 *
 * @param {number} a - The first number to be added or concatenated.
 * @param {number} b - The second number to be added or concatenated.
 * @param {"add" | "concat"} c - A string indicating whether to add or concatenate the numbers.
 * @return {number | string} - The sum of the numbers if c is "add", or the concatenated string if c is "concat".
 */
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b
  return "" + a + b
}

let myVal: string = addOrConcat(2, 2, "concat") as string
