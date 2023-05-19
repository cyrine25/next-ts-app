import { Question } from '@/domain/question'

const fetchQuestions = async (): Promise<ReadonlyArray<Question>> => {
  const data = await fetch(`${process.env.API_END_POINT}/questions`)
  const questions: ReadonlyArray<Question> = await data.json()
  return questions.map((q: Question) => ({
    id: q.id,
    title: q.title,
    answer: q.answer,
  }))
}

export default fetchQuestions
