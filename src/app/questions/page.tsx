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
        const filteredQuestions = response.filter(question => questionsTags.includes(question.tag))
        setQuestions(filteredQuestions)
      } catch (error) {}
    }
    fetchQuestionsResult()
  }, [questionsTags])

  return (
    <section className={styles.questions} data-cy="Questions">
      <div>
        <Tags setQuestionsTags={setQuestionsTags} />
      </div>
      <div>
        <h1>Questions List</h1>
        <QuestionsCollapse questions={questions} data-cy="questions-collapse" />
      </div>
    </section>
  )
}
export default QuestionsLoading
