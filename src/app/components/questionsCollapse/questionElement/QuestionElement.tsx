import styles from './QuestionElement.module.scss'

import { Tag } from '@/domain/question'

interface QuestionProps {
  title: string
  answer: string
  tags: ReadonlyArray<Tag>
}

const QuestionElement = ({ title, answer, tags }: QuestionProps) => (
  <div className={styles.question}>
    <h2 className={styles.question__title}>Question: {title}</h2>
    <p className={styles.question__answer}>
      Answer: <br /> {answer}
    </p>
    <div className={styles.question__tags}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.question__tag}>
          {tag.value}
        </span>
      ))}
    </div>
  </div>
)

export default QuestionElement
