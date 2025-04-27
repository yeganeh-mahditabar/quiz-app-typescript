import { useState } from "react"
import { questions } from "./questions"


function Quiz() {

  const [score, setScore] = useState<number>(0)
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)


  function handleAnswer(option:string){
    setSelectedOption(option)
    if(option == questions[currentQuestion].answer){
        setScore(score+1)
    }

  }    
  return (
    <div className="quiz-container">
        <div className="question-box">
            <h3>{questions[currentQuestion].question}</h3>
            <ul>
                {
                    questions[currentQuestion].options.map(
                        (option:string)=> (
                            <li onClick={()=> handleAnswer(option)}
                            
                            >{option}</li>
                        )
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default Quiz