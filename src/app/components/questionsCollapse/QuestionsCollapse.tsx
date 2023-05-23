import { Question } from '@/domain/question'
type Props = {
  questions: ReadonlyArray<Question>
}

const QuestionsCollapse = ({ questions }: Props) => (
  <div>
    {questions.map(question => (
      <div key={question.id} data-cy="question">
        <h3>{question.title}</h3>
        <p>{question.answer}</p>
      </div>
    ))}
  </div>
)
export default QuestionsCollapse
