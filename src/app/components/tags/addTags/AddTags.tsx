import { useState } from 'react'

import styles from './AddTags.module.scss'
interface ButtonProps {
  onAdd: (value: string) => void
}

const AddTags: React.FC<ButtonProps> = ({ onAdd }) => {
  const [isInputOpen, setIsInputOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleClick = () => {
    setIsInputOpen(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleAdd = () => {
    if (inputValue !== '') {
      onAdd(inputValue)
      setInputValue('')
      setIsInputOpen(false)
    }
  }

  return (
    <div>
      {!isInputOpen ? (
        <div className={styles.button_container}>
          <button onClick={handleClick}>Add Item</button>
        </div>
      ) : (
        <div className={styles.input_container}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleAdd}>Confirm</button>
        </div>
      )}
    </div>
  )
}

export default AddTags
