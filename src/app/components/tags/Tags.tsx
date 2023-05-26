import { useEffect, useState, Dispatch, SetStateAction } from 'react'

import TagElement from './tag/TagElement'

import { Tag } from '@/domain/question'
type Props = {
  setQuestionsTags: Dispatch<SetStateAction<ReadonlyArray<Tag>>>
}
const Tags = ({ setQuestionsTags }: Props) => {
  const tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']
  const [selectedTags, setSelectedTags] = useState<ReadonlyArray<Tag>>([])

  useEffect(() => {
    setQuestionsTags(selectedTags)
  }, [selectedTags, setQuestionsTags])

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  return (
    <div>
      {tags.map((tag: string, index: number) => (
        <TagElement tagName={tag} key={index} handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}

export default Tags
