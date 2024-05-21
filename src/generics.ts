const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null
}

console.log(true)
console.log("John")
console.log([1, 2, 3])
console.log({ name: "Dave", age: 42 })
console.log(null)

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg && !arg.length)) return { arg, is: false }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false }
  }
  return { arg, is: true }
}
