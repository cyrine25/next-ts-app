import classNames from 'classnames'
import { useState } from 'react'

import styles from './tag.module.scss'
type Props = {
  tagName: string
  key: number
  handleTagClick: (tag: string) => void
}
const Tag = ({ tagName, handleTagClick }: Props) => {
  const [selected, setSelected] = useState(false)

  const handleSelectTag = () => {
    setSelected(!selected)
    handleTagClick(tagName)
  }

  const tagBtn = classNames([styles.tag], { [styles.selected]: selected })
  return (
    <button data-cy={`${tagName}-title`} className={tagBtn} onClick={handleSelectTag}>
      <div>{tagName}</div>
    </button>
  )
}

export default Tag
