interface TransactionObj {
  [key: string]: number //index signature
}

// interface TransactionObj {
//   Pizza: number
//   Books: number
//   Job: number
// }

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions["Pizza"])

//dynamic selecting ex.
let prop: string = "Pizza"
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj) => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction]
  }
  return total
}

///////////////////////////////////////
interface Student {
  [key: string]: string | number | undefined | number[]
  name: string
  GPA: number
  classes?: number[]
}

const student: Student = {
  name: "Dave",
  GPA: 4.0,
  classes: [100, 200],
}

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`)
}
