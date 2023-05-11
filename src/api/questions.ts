import { Question } from '@/domain/question'

interface QuestionDTO {
  id: number
  title: string
  answer: string
}
const fetchQuestions = async (): Promise<ReadonlyArray<Question>> => {
  const data = await fetch(
    'https://raw.githubusercontent.com/cyrine25/next-ts-app/feat/api-poc/public/data/questions.json?token=GHSAT0AAAAAACCFMYWEVKGAHQUZGYZX2IYAZC4VEBA'
  )
  const questions: ReadonlyArray<QuestionDTO> = await data.json()
  return questions.map(q => new Question(q.id, q.title, q.answer))
}

export default fetchQuestions
