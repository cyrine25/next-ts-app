import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import Select, { MultiValue, StylesConfig } from 'react-select'

import AddTags from './addTags/AddTags'
import TagComponent from './tag/TagComponent'
import style from './tags.module.scss'

import { Tag } from '@/domain/question'
import { SelectTags, tags } from 'public/data/tags'

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
  const handleAddTag = (tag: string) => {
    setSelectedTags([...selectedTags, { value: tag }])
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
      <div className={style.select_btn_container}>
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
        <AddTags onAdd={handleAddTag} />
      </div>

      <div className={style.tags}>
        {selectedTags.map((tag: Tag) => (
          <TagComponent tagName={tag} key={tag.value} handleTagClick={handleTagClick} />
        ))}
      </div>
    </div>
  )
}

export default Tags
