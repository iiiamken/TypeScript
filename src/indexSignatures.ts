// interface TransactionObj {
//   [key: string]: number //index signature
// }

// // interface TransactionObj {
// //   Pizza: number
// //   Books: number
// //   Job: number
// // }

// const todaysTransactions: TransactionObj = {
//   Pizza: -10,
//   Books: -5,
//   Job: 50,
// }

// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions["Pizza"])

// //dynamic selecting ex.
// let prop: string = "Pizza"
// console.log(todaysTransactions[prop])

// const todaysNet = (transactions: TransactionObj) => {
//   let total = 0
//   for (const transaction in transactions) {
//     total += transactions[transaction]
//   }
//   return total
// }

// ///////////////////////////////////////
// interface Student {
//   [key: string]: string | number | undefined | number[]
//   name: string
//   GPA: number
//   classes?: number[]
// }

// const student: Student = {
//   name: "Dave",
//   GPA: 4.0,
//   classes: [100, 200],
// }

// //keyof-keyword ex
// for (const key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`)
// }
// // keyof example 2
// Object.keys(student).map(
//   //.keys method creates an array of the key values.
//   (key) => console.log(student[key as keyof typeof student])
// )

// //keyof example 3
// const logStudentKey = (student: Student, key: keyof Student): void => {
//   console.log(`Student ${key}: ${student[key]}`)
// }

// logStudentKey(student, "name")

// ///////////////////////////////////////////////////////////

// // interface Incomes {
// //     [key: string] :number
// // }

// //alternative using type-keyword

// type Streams = "salary" | "bonus" | "side-hustle" //strin literals can be used as key types with records

// type Incomes = Record<Streams, number>

// const monthlyIncomes: Incomes = {
//   salary: 500,
//   bonus: 100,
//   "side-hustle": 250,
// }

// // records need to access keyof
// for (const revenue in monthlyIncomes) {
//   console.log(monthlyIncomes[revenue as keyof Incomes])
// }
