'use client'
import { Collapse } from 'antd'

import styles from './Questions.module.scss'

import fetchQuestions from '@/api/questions'
import { Question } from '@/domain/question'
const Page = async () => {
  const questions: ReadonlyArray<Question> = await fetchQuestions()
  const { Panel } = Collapse

  return (
    <div className={styles.questions}>
      <h1>Questions List</h1>
      <Collapse defaultActiveKey={['1']}>
        {questions.map(question => (
          <Panel header={question.title} key={question.id}>
            <p key={question.id}>{question.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}
export default Page
