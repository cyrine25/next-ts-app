import fetchData from '@/api/https'
interface Question {
  id: number
  title: string
  answer: string
}

interface QuestionListInt {
  questions: Question[]
}
const Page = async () => {
  const questionsList: QuestionListInt = await fetchData()
  return (
    <div>
      <h1>Questions List</h1>
      <div>
        {questionsList.questions.map(question => (
          <p key={question.id}>{question.title}</p>
        ))}
      </div>
    </div>
  )
}
export default Page
