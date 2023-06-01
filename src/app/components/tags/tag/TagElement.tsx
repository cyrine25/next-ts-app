import classNames from 'classnames'
import { useState } from 'react'

import styles from './tag.module.scss'

import { Tag } from '@/domain/question'
type Props = {
  tagName: Tag
  key: number
  handleTagClick: (tag: string) => void
}
const Tag = ({ tagName, handleTagClick }: Props) => {
  const [selected, setSelected] = useState<boolean>(false)

  const handleSelectTag = () => {
    setSelected(!selected)
    handleTagClick(tagName.value)
  }

  const tagBtn = classNames([styles.tag], { [styles.selected]: selected })
  return (
    <button data-cy={`${tagName}-title`} className={tagBtn} onClick={handleSelectTag}>
      <div>{tagName.value}</div>
    </button>
  )
}

export default Tag
