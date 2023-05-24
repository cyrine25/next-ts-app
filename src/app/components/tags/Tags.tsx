import { useEffect, useState, Dispatch, SetStateAction } from 'react'

import Tag from './tag/Tag'
type Props = {
  handleQuestionsTags: Dispatch<SetStateAction<ReadonlyArray<string>>>
}
const Tags = ({ handleQuestionsTags }: Props) => {
  const tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']
  const [selectedTags, setSelectedTags] = useState<ReadonlyArray<string>>([])

  useEffect(() => {
    handleQuestionsTags(selectedTags)
  }, [selectedTags, handleQuestionsTags])

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
        <Tag tagName={tag} key={index} onTagClick={handleTagClick} />
      ))}
    </div>
  )
}

export default Tags
