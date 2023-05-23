'use client'
import { useEffect, useState } from 'react'

import fetchGreetings from '@/api/greetings'

const GreetingInput = () => {
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')

  const [result, setResult] = useState('')

  useEffect(() => {
    const fetchGrettingResult = async () => {
      try {
        const response: Readonly<string> = await fetchGreetings(firstName)
        setResult(response)
      } catch (error) {}
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
      <input type="text" value={userName} onChange={handleChange} />
      <button onClick={handleGreeting}>Greeting</button>
      <div>{result}</div>
    </>
  )
}

export default GreetingInput
