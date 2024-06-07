
export default function Page(
  { params }: { params: { schoolId: number, examId: number } }
) {

  return <h1>Classes Page {params.schoolId} {params.examId} </h1>

} 