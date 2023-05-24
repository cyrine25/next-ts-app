'use client'
import { useEffect, useState } from 'react'

import Tags from '../components/tags/Tags'

import styles from './Questions.module.scss'

import fetchQuestions from '@/api/questions'
import QuestionsCollapse from '@/app/components/questionsCollapse/QuestionsCollapse'
import { Question } from '@/domain/question'

const QuestionsLoading = () => {
  const [questionsTags, setQuestionsTags] = useState<ReadonlyArray<string>>([])
  const [questions, setQuestions] = useState<ReadonlyArray<Question>>([])

  useEffect(() => {
    const fetchQuestionsResult = async () => {
      try {
        const response: ReadonlyArray<Question> = await fetchQuestions()
        const List = response.filter(question => questionsTags.includes(question.tag))
        setQuestions(List)
      } catch (error) {}
    }
    fetchQuestionsResult()
  }, [questionsTags])

  return (
    <section className={styles.questions} data-cy="Questions">
      <div>
        <Tags handleQuestionsTags={setQuestionsTags} />
      </div>
      <div>
        <h1>Questions List</h1>
        <QuestionsCollapse questions={questions} data-cy="questions-collapse" />
      </div>
    </section>
  )
}
export default QuestionsLoading
