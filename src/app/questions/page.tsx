import fetchQuestions from '@/api/questions'
import { Question } from '@/domain/question'

const Page = async () => {
  const questions: ReadonlyArray<Question> = await fetchQuestions()
  return (
    <div>
      <h1>Questions List</h1>
      <div>
        {questions.map(question => (
          <p key={question.id}>{question.title}</p>
        ))}
      </div>
    </div>
  )
}
export default Page
