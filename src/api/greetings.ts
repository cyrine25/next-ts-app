import { greeting } from '@/domain/greeting'

const fetchGreetings = async (firstName: string): Promise<Readonly<greeting>> => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}/greetings?firstname=${firstName}`)
  const response: Readonly<greeting> = await data.json()
  return {
    message: response.message,
  }
}

export default fetchGreetings
