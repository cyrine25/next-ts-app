import QuestionElement from './questionElement/QuestionElement'
import styles from './questionsCollapse.module.scss'

import { Question } from '@/domain/question'
type Props = {
  questions: ReadonlyArray<Question>
}

const QuestionsCollapse = ({ questions }: Props) => (
  <div className={styles.questions}>
    {questions.map(question => (
      <QuestionElement
        key={question.id}
        data-cy="question"
        title={question.title}
        answer={question.answer}
        tag={question.tag}
      />
    ))}
  </div>
)
export default QuestionsCollapse
