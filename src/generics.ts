// const echo = <T>(arg: T): T => arg

// const isObj = <T>(arg: T): boolean => {
//   return typeof arg === "object" && !Array.isArray(arg) && arg !== null
// }

// console.log(true)
// console.log("John")
// console.log([1, 2, 3])
// console.log({ name: "Dave", age: 42 })
// console.log(null)

// ////original code
// // const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
// //   if (Array.isArray(arg) && !arg.length) {
// //     return { arg, is: false }
// //   }

// //   if (isObj(arg) && !Object.keys(arg as keyof T).length) {
// //     return { arg, is: false }
// //   }
// //   return { arg, is: true }
// // }

// //using interface
// interface BoolCheck<T> {
//   value: T
//   is: boolean
// }
// const isTrue = <T>(arg: T): BoolCheck<T> => {
//   if (Array.isArray(arg) && !arg.length) {
//     return { value: arg, is: false }
//   }

//   if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//     return { value: arg, is: false }
//   }
//   return { value: arg, is: true }
// }

// // extending interface

// interface HasID {
//   id: number
// }

// const proccessUser = <T extends HasID>(user: T): T => {
//   //do stuff with user
//   return user
// }

// //genereics with classes
// class StateObject<T> {
//   private data: T
//   constructor(value: T) {
//     this.data = value
//   }

//   get state(): T {
//     return this.data
//   }
//   set state(value: T) {
//     this.data = value
//   }
// }

// const store = new StateObject("Dave")
// console.log(store.state)
// store.state = "John"
// // store.state = 12 // error as TS infers the type to be string

// const myState = new StateObject<(string | number | boolean)[]>([15])
// myState.state = ["Dave", 42, true]
