import Tags from '../components/tags/Tags'

import styles from './Questions.module.scss'

import fetchQuestions from '@/api/questions'
import QuestionsCollapse from '@/app/components/questionsCollapse/QuestionsCollapse'
import { Question } from '@/domain/question'
const QuestionsLoading = async () => {
  const questions: ReadonlyArray<Question> = await fetchQuestions()
  return (
    <section className={styles.questions} data-cy="Questions">
      <div>
        <Tags />
      </div>
      <div>
        <h1>Questions List</h1>
        <QuestionsCollapse questions={questions} data-cy="questions-collapse" />
      </div>
    </section>
  )
}
export default QuestionsLoading
