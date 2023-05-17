'use client'
import { Collapse } from 'antd'
import React from 'react'

import { Question } from '@/domain/question'

const { Panel } = Collapse
type Props = {
  questions: ReadonlyArray<Question>
}

const QuestionsCollapse = ({ questions }: Props) => (
  <Collapse defaultActiveKey={['1']}>
    {questions.map(question => (
      <Panel header={question.title} key={question.id} data-cy="question">
        <p>{question.answer}</p>
      </Panel>
    ))}
  </Collapse>
)
export default QuestionsCollapse
