'use client'
import classNames from 'classnames'
import { useState } from 'react'

import styles from './tag.module.scss'
type Props = {
  tagName: string
  key: number
}
const Tag = ({ tagName }: Props) => {
  const [selectedTags, setSelectedTags] = useState<ReadonlyArray<string>>([])
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  const tagBtn = classNames([styles.tag], { [styles.selected]: selectedTags.includes(tagName) })
  return (
    <button data-cy={`${tagName}-title`} className={tagBtn} onClick={() => handleTagClick(tagName)}>
      <div>{tagName}</div>
    </button>
  )
}

export default Tag
