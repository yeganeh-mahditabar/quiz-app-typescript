import { useState } from "react"
import { questions } from "./questions"


function Quiz() {

  const [score, setScore] = useState<number>(0)
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [isFinal, setIsFinal] = useState<boolean>(false)


  function handleAnswer(option:string){
    setSelectedOption(option)
    if(option == questions[currentQuestion].answer){
        setScore(score+1)
    }

    setTimeout(()=>{
        if(currentQuestion + 1 < questions.length){
            setCurrentQuestion(currentQuestion+1)
        }
        else{
            setIsFinal(true)
        }
    },1000)

  }    
  return (
    <div className="quiz-container">
        {
            isFinal ? (
                <div className="result">
                    <h2>Quiz completed</h2>
                    <p>Your score is: {score} from {questions.length}</p>
                </div>
            ): (
                <div className="question-box">
                    <h3>{questions[currentQuestion].question}</h3>
                    <ul className="options-list">
                        {
                            questions[currentQuestion].options.map(
                                (option, index)=> (
                                  <li key={index}>
                                    <button
                                    className={`option-button ${
                                        selectedOption == option ?
                                        (option === questions[currentQuestion].answer ? "correct": "wrong") :
                                        ""
                                    }`}
                                    
                                    onClick={()=> handleAnswer(option)}
                            
                                    >{option}</button>
                                  </li>
                                )
                            )
                        }
                    </ul>
                </div>
                )
        }
    </div>
  )
}

export default Quiz