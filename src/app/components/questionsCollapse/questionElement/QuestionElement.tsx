import styles from './QuestionElement.module.scss'

import { Tag } from '@/domain/question'

interface QuestionProps {
  title: string
  answer: string
  tag: Tag
}

const QuestionElement = ({ title, answer, tag }: QuestionProps) => (
  <div className={styles.question}>
    <h2 className={styles.question__title}>Question: {title}</h2>
    <p className={styles.question__answer}>
      Answer: <br /> {answer}
    </p>
    <div className={styles.question__tags}>
      <span className={styles.question__tag}>{tag}</span>
    </div>
  </div>
)

export default QuestionElement
