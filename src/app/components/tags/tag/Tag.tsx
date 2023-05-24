import classNames from 'classnames'
import { useState } from 'react'

import styles from './tag.module.scss'
type Props = {
  tagName: string
  key: number
  onTagClick: (tag: string) => void
}
const Tag = ({ tagName, onTagClick }: Props) => {
  const [selected, setSelected] = useState(false)

  const handleTagClick = () => {
    setSelected(!selected)
    onTagClick(tagName)
  }

  const tagBtn = classNames([styles.tag], { [styles.selected]: selected })
  return (
    <button data-cy={`${tagName}-title`} className={tagBtn} onClick={handleTagClick}>
      <div>{tagName}</div>
    </button>
  )
}

export default Tag
