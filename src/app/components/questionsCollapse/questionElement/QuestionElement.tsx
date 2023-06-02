import styles from './QuestionElement.module.scss'

import { Tag } from '@/domain/question'

interface QuestionProps {
  title: string
  answer: string
  tags: ReadonlyArray<Tag>
}

const QuestionElement = ({ title, answer, tags }: QuestionProps) => (
  <div className={styles.question}>
    <h2 className={styles.question_title}>Question: {title}</h2>
    <p className={styles.question_answer}>
      Answer: <br /> {answer}
    </p>
    <div className={styles.question_tags}>
      {tags.map(tag => (
        <span key={tag.value} className={styles.question_tag}>
          {tag.value}
        </span>
      ))}
    </div>
  </div>
)

export default QuestionElement
