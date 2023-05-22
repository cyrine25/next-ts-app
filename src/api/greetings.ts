const fetchGreetings = async (firstName: string): Promise<Readonly<string>> => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}/greetings?firstname=${firstName}`)
  const result = data.text()
  return result
}

export default fetchGreetings
