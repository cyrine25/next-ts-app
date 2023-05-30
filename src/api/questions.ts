import { Question } from '@/domain/question'
const tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']

const fetchQuestions = async (): Promise<ReadonlyArray<Question>> => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}/questions`)
  const questions: ReadonlyArray<Question> = await data.json()
  return questions.map((q: Question) => ({
    id: q.id,
    title: q.title,
    answer: q.answer,
    tag: tags[Math.floor(Math.random() * tags.length)],
  }))
}

export default fetchQuestions
