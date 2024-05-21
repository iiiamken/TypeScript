//Partial

interface Assignment {
  studentId: string
  title: string
  grade: number
  verified?: boolean
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
) => {
  return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
  studentId: "comsdfi1123",
  title: "Final",
  grade: 0,
}

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })

//Required

const recordAssignment = (assign: Required<Assignment>) => {
  //send to db
  return assign
}
//Readonly
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
}

//Record
const hexColorMap: Record<string, string> = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "F"

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "A",
}

//record with interface
interface Grades {
  assign1: number
  assign2: number
}
const studentGrade: Record<Students, Grades> = {
  Sara: {
    assign1: 90,
    assign2: 85,
  },
  Kelly: {
    assign1: 100,
    assign2: 95,
  },
}

//pick and omit
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
  studentId: "comsdfi1123",
  grade: 95,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
  studentId: "comsdfi1123",
  title: "Final",
}

//Exlude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">

type highScorers = Extract<LetterGrades, "A" | "B">

//Nonnullable
type AllPossibleGrades = "Dave" | "John" | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

// type newAssign = { title: string; points: number }

const createNewAssign = (title: string, points: number) => {
  return {
    title: title,
    points: points,
  }
}

type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign("utility types", 100)

console.log(tsAssign)

//Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: newAssign = createNewAssign(...assignArgs)

console.log(tsAssign2)

//Awaited - return type of async function aka. promise

interface User {
  id: number
  name: string
  username: string
  email: string
}

/**
 * Fetches a list of users from the given API endpoint.
 *
 * @return {Promise<User[]>} A promise that resolves to an array of User objects.
 */
const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message)
    })
  return data
}

// type FetchUsersReturnType = <ReturnType<typeof fetchUsers>>
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then((users) => console.log(users))
