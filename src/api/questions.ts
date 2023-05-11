import data from 'public/data/questions.json'

import { Question } from '@/domain/question'

interface QuestionDTO {
  id: number
  title: string
  answer: string
}
const fetchQuestions = async (): Promise<ReadonlyArray<Question>> => {
  const questions: ReadonlyArray<QuestionDTO> = await data
  return questions.map(q => new Question(q.id, q.title, q.answer))
}

export default fetchQuestions
