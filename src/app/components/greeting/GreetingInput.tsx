'use client'
import { useEffect, useState } from 'react'

import styles from './GreetingInput.module.scss'

import fetchGreetings from '@/api/greetings'
import { greeting } from '@/domain/greeting'
const GreetingInput = () => {
  const [userName, setUserName] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')

  const [result, setResult] = useState<Readonly<greeting>>({ message: '' })

  useEffect(() => {
    const fetchGrettingResult = async () => {
      const response: Readonly<greeting> = await fetchGreetings(firstName)
      setResult(response)
    }
    if (firstName) {
      fetchGrettingResult()
    }
  }, [firstName])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }

  const handleGreeting = () => {
    if (userName) {
      setFirstName(userName)
    }
  }
  return (
    <div className={styles.greetings}>
      <input
        type="text"
        value={userName}
        onChange={handleChange}
        className={styles.grettingInput}
        data-cy="Greeting-input"
      />
      <button onClick={handleGreeting} className={styles.inputButton}>
        Greeting
      </button>
      <div className={styles.greetingResult} data-cy="greeting">
        {result.message}
      </div>
    </div>
  )
}

export default GreetingInput
