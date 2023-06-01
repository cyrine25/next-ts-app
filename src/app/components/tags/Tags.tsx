import { useEffect, useState, Dispatch, SetStateAction } from 'react'

import TagElement from './tag/TagElement'
import styles from './tags.module.scss'

import { Tag } from '@/domain/question'
type Props = {
  setQuestionsTags: Dispatch<SetStateAction<ReadonlyArray<Tag>>>
}
const Tags = ({ setQuestionsTags }: Props) => {
  const tags = [
    { value: 'Spring Security' },
    { value: 'Kafka' },
    { value: 'React' },
    { value: 'Kotlin' },
    { value: 'Kubernetes' },
    { value: 'Docker' },
    { value: 'Java' },
    { value: 'Spring Cloud' },
    { value: 'GCP' },
    { value: 'Tag 10' },
  ]
  const [selectedTags, setSelectedTags] = useState<ReadonlyArray<Tag>>([])

  useEffect(() => {
    setQuestionsTags(selectedTags)
  }, [selectedTags, setQuestionsTags])

  const handleTagClick = (tag: string) => {
    const existingTag = selectedTags?.find(selectedTag => selectedTag.value === tag)
    if (existingTag) {
      setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== existingTag))
    } else {
      setSelectedTags([...selectedTags, { value: tag }])
    }
  }
  return (
    <div className={styles.tags}>
      {tags.map((tag: Tag, index: number) => (
        <TagElement tagName={tag} key={index} handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}

export default Tags
