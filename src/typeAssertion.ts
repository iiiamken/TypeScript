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
