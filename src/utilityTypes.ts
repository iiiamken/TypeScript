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
