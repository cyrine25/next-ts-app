import styles from './Questions.module.scss'

import fetchQuestions from '@/api/questions'
import QuestionsCollapse from '@/components/questionsCollapse/QuestionsCollapse'
import { Question } from '@/domain/question'
const Page = async () => {
  const questions: ReadonlyArray<Question> = await fetchQuestions()

  return (
    <div className={styles.questions}>
      <h1>Questions List</h1>
      <QuestionsCollapse questions={questions} data-cy="questions-collapse" />
    </div>
  )
}
export default Page
