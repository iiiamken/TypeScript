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
