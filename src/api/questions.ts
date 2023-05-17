import { Question } from '@/domain/question'

const fetchQuestions = async (): Promise<ReadonlyArray<Question>> => {
  const data = await fetch('http://localhost:8080/api/v1/questions', { next: { revalidate: 0 } })
  const questions: ReadonlyArray<Question> = await data.json()
  return questions.map((q: Question) => ({
    id: q.id,
    title: q.title,
    answer: q.answer,
  }))
}

export default fetchQuestions
