import { Question } from '@/domain/question'

interface QuestionDTO {
  id: number
  title: string
  answer: string
}
const fetchQuestions = async (): Promise<ReadonlyArray<Question>> => {
  const data = await fetch('http://localhost:3000/data/questions.json')
  const questions: ReadonlyArray<QuestionDTO> = await data.json()
  return questions.map(q => new Question(q.id, q.title, q.answer))
}

export default fetchQuestions
