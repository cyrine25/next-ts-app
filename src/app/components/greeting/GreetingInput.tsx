'use client'
import { useEffect, useState } from 'react'

import fetchGreetings from '@/api/greetings'
import { greeting } from '@/domain/greeting'

const GreetingInput = () => {
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')

  const [result, setResult] = useState({ message: '' })

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
    <>
      <input type="text" value={userName} onChange={handleChange} data-cy="Gretting-input" />
      <button onClick={handleGreeting}>Greeting</button>
      <div data-cy="greeting">{result.message}</div>
    </>
  )
}

export default GreetingInput
