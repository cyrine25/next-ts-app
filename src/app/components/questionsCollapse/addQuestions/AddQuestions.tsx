import { useState, KeyboardEvent, FormEvent } from 'react'

import styles from './AddQuestions.module.scss'

import { Question, Tag } from '@/domain/question'

type Props = {
  handleAddQuestion: (question: Question) => void
}

const NewQuestionInput = ({ handleAddQuestion }: Props) => {
  const [title, setTitle] = useState('')
  const [answer, setAnswer] = useState('')
  const [tags, setTags] = useState<ReadonlyArray<Tag>>([])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (title.trim() !== '' && answer.trim() !== '' && tags.length > 0) {
      const newQuestion: Question = {
        id: Date.now(),
        title,
        answer,
        tags: [...tags],
      }

      handleAddQuestion(newQuestion)

      setTitle('')
      setAnswer('')
      setTags([])
    }
  }

  const handleAddTag = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const newTag: Tag = {
        value: event.currentTarget.value.trim(),
      }

      if (newTag.value !== '' && !tags.some(tag => tag.value === newTag.value)) {
        setTags(questionTags => [...questionTags, newTag])
        event.currentTarget.value = ''
      }
    }
  }

  const handleRemoveTag = (tag: Tag) => {
    setTags(questionTags => questionTags.filter(questionTag => questionTag !== tag))
  }

  return (
    <form onSubmit={handleSubmit} className={styles.new_question_input}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={event => setTitle(event.target.value)} />

      <label htmlFor="answer">Answer:</label>
      <textarea id="answer" value={answer} onChange={event => setAnswer(event.target.value)}></textarea>

      <label htmlFor="tags">Tags:</label>
      <input type="text" id="tags" onKeyDown={handleAddTag} />

      <ul className={styles.tag_list}>
        {tags.map(tag => (
          <li key={tag.value}>
            {tag.value}
            <button type="button" onClick={() => handleRemoveTag(tag)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <button type="submit" className={styles.add_button}>
        Add Question
      </button>
    </form>
  )
}

export default NewQuestionInput
