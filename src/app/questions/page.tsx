'use client'
import { useEffect, useState } from 'react'

import styles from './Questions.module.scss'

import fetchQuestions from '@/api/questions'
import NewQuestionInput from '@/app/components/questionsCollapse/addQuestions/AddQuestions'
import QuestionsCollapse from '@/app/components/questionsCollapse/QuestionsCollapse'
import Tags from '@/app/components/tags/Tags'
import { Question, Tag } from '@/domain/question'

const QuestionsLoading = () => {
  const [questionsTags, setQuestionsTags] = useState<ReadonlyArray<Tag>>([])
  const [questions, setQuestions] = useState<ReadonlyArray<Question>>([])

  useEffect(() => {
    const fetchQuestionsResult = async () => {
      const response: ReadonlyArray<Question> = await fetchQuestions()
      const filteredQuestions = response.filter(question =>
        question.tags.some(tag => questionsTags.some(questionsTag => questionsTag.value === tag.value))
      )
      setQuestions(filteredQuestions)
    }
    fetchQuestionsResult()
  }, [questionsTags])

  const handleAddQuestion = (question: Question) => {
    setQuestions(prevQuestions => [...prevQuestions, question])
  }
  return (
    <section className={styles.questions} data-cy="Questions">
      <div>
        <Tags setQuestionsTags={setQuestionsTags} />
      </div>
      <div className={styles.questions_list}>
        <h1>Questions List</h1>
        <div className={styles.questions_container}>
          <div className={styles.questions_form}>
            <NewQuestionInput handleAddQuestion={handleAddQuestion} />
          </div>
          <QuestionsCollapse questions={questions} data-cy="questions-collapse" />
        </div>
      </div>
    </section>
  )
}
export default QuestionsLoading
