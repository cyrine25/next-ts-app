import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import Select, { MultiValue, StylesConfig } from 'react-select'

import TagElement from './tag/TagElement'
import style from './tags.module.scss'

import { SelectTags, Tag } from '@/domain/question'
import { tags } from 'public/data/color'

type Props = {
  setQuestionsTags: Dispatch<SetStateAction<ReadonlyArray<Tag>>>
}
const Tags = ({ setQuestionsTags }: Props) => {
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

  const customStyles: StylesConfig = {
    control: styles => ({
      ...styles,
      backgroundColor: 'transparent',
    }),
    valueContainer: styles => ({
      ...styles,
      width: '200px',
      maxHeight: '100px',
      minWidth: '200px',
      flexWrap: 'nowrap',
      flexDirection: 'row-reverse',
    }),
    clearIndicator: styles => ({
      ...styles,
      visibility: 'hidden',
      display: 'none',
    }),
    multiValue: styles => ({
      ...styles,
      visibility: 'hidden',
      display: 'none',
    }),
    multiValueRemove: styles => ({
      ...styles,
      visibility: 'hidden',
      display: 'none',
    }),
    placeholder: styles => ({
      ...styles,
      visibility: 'visible',
    }),
  }
  return (
    <div className={style.tags_container}>
      <div>
        <Select
          closeMenuOnSelect={false}
          isMulti
          placeholder="Select tags..."
          options={tags}
          value={selectedTags}
          hideSelectedOptions={true}
          styles={customStyles}
          onChange={e => {
            const selectedValues = (e as MultiValue<SelectTags>)?.map(option => option.value)
            setSelectedTags(tags.filter(tag => selectedValues.includes(tag.value)))
          }}
        />
      </div>
      <div className={style.tags}>
        {selectedTags.map((tag: Tag) => (
          <TagElement tagName={tag} key={tag.value} handleTagClick={handleTagClick} />
        ))}
      </div>
    </div>
  )
}

export default Tags
