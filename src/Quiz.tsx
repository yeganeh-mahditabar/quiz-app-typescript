import { questions } from "./questions"


function Quiz() {
  return (
    <div className="quiz-container">
        <div className="question-box">
            <h3>{questions[0].question}</h3>
            <ul>
                {
                    questions[0].options.map(
                        (option:string)=> <li>{option}</li>
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default Quiz