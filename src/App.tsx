import { useState } from 'react';
import './App.css';

import Header from './components/header/header'
import Resultado from './components/resultado/resultado'
import Options from './components/options/options'

type RockPaperScissors = {
  userChoice: string,
  systemChoice: string,
  result: string | null,
  score: number,
  newGames?: number
}

function App () {
  const options: string[] = ['Rock', 'Paper', 'Scissors']
  const condition = ['GANHOU!!!!', 'EMPATOU', 'PERDEU']

  const [RockPaperScissors, setRockPaperScissors] = useState<RockPaperScissors>({
    userChoice: "",
    systemChoice: "",
    result: null,
    score: 0,
    newGames: 1
  })

  const [btn, setBtn] = useState("")

  const chooseRandom = () => {
    const number = Math.floor(Math.random() * 3)
    const result = options[number]
    return result
  }

  function chooseHandler (item: string) {
    setBtn(item)
    let localScore = RockPaperScissors.score || 0
    const newGames = RockPaperScissors.newGames || 1
    const systemChoice = chooseRandom() // set system choose
    const myChoice = item
    let status = ""

    if (myChoice === systemChoice) {
      status = condition[1] // draw
      // rock - paper
    } else if (myChoice === options[0] && systemChoice === options[1]) {
      status = condition[2] // loose
      // rock - scissor
    } else if (myChoice === options[0] && systemChoice === options[2]) {
      status = condition[0] // win
      localScore = (localScore / newGames)
      console.log(localScore)
      // paper - rock
    } else if (myChoice === options[1] && systemChoice === options[0]) {
      status = condition[0] // win
      localScore += 10
      // paper - scissors
    } else if (myChoice === options[1] && systemChoice === options[2]) {
      status = condition[2] // loose
      // scissor - rock
    } else if (myChoice === options[2] && systemChoice === options[0]) {
      status = condition[2] // loose
      // scissor - paper
    } else if (myChoice === options[2] && systemChoice === options[1]) {
      status = condition[0] // win
      localScore += 10
    }
    console.log(myChoice)
    setRockPaperScissors(prevState => ({ ...prevState, systemChoice: "", score: localScore }))
    setTimeout(() => {
      setRockPaperScissors({
        userChoice: myChoice,
        systemChoice: systemChoice,
        result: status,
        score: +localScore
      })
    }, 100)

  }


  return (
    <div className="h-full flex flex-col bg-secondary">
      <Header title="JOKENPO" />
      <main className='flex flex-col h-full w-full p-6 gap-6 '>
        <Resultado
          // choose={RockPaperScissors.userChoice}
          result={RockPaperScissors.systemChoice}
          winner={RockPaperScissors.result}
          score={RockPaperScissors.score.toString()}
        />
        <Options
          options={options}
          selected={btn}
          clickHandler={chooseHandler}
        />
      </main>
    </div>
  );
}

export default App;
