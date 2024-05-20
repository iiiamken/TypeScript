"use strict";
// type One = string
// type Two = string | number
// type Three = "hello"
// //convert to more or less specific types
// let a: One = "hello"
// let b = a as Two // less specific
// let c = a as Three //more specific
// // using angled brackets
// let d = <One>"world" //we also can set a value thereafter
// let e = <string | number>"world"
// /**
//  * Returns the sum of two numbers if the third parameter is "add", or concatenates two numbers as strings if the third parameter is "concat".
//  *
//  * @param {number} a - The first number to be added or concatenated.
//  * @param {number} b - The second number to be added or concatenated.
//  * @param {"add" | "concat"} c - A string indicating whether to add or concatenate the numbers.
//  * @return {number | string} - The sum of the numbers if c is "add", or the concatenated string if c is "concat".
//  */
// const addOrConcat = (
//   a: number,
//   b: number,
//   c: "add" | "concat"
// ): number | string => {
//   if (c === "add") return a + b
//   return "" + a + b
// }
// let myVal: string = addOrConcat(2, 2, "concat") as string
// // careful using as-keyword as u may be wrong and TS will not give an error
// let nextVal: number = addOrConcat(2, 2, "concat") as number
// //TS will check Type assertions if possible
// 10 as string
// //double casting
// 10 as unknown as string
// //useful type assertion with DOM manipulation
// //TS infers the type based on select method
// //querySelector
// const img = document.querySelector("img")!
// img.src
// //getElementByID
// const myImg = document.getElementById("#img")! as HTMLImageElement
// myImg.src
// //some examples of using Typescript
// //Original JS code
// // const year = document.getElementById(".year")
// // const thisYear = new Date().getFullYear()
// // year?.setAttribute("datetime", thisYear)
// // year.textContet = thisYear
// //TS code using assertions. assertion removes the null and undefined!
// //otherwise we would need to check if "year" exists or not
// const year: HTMLSpanElement = document.querySelector(".year") as HTMLSpanElement
// const thisYear: string = new Date().getFullYear().toString()
// year.setAttribute("datetime", thisYear.toString())
// year.textContent = thisYear
