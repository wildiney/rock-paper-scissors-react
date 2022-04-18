import React, { useState } from 'react';
import './App.css';

import Header from './components/header/header'
import Resultado from './components/resultado/resultado'
import Options from './components/options/options'

function App() {
  const options = ['Rock', 'Paper', 'Scissors']
  const condition = ['GANHOU!!!!','EMPATOU','PERDEU']

  const [RockPaperScissors, setRockPaperScissors] = useState({userChoice:null, systemChoice:null, result:null, score:0, partidas:1})
  const [btn, setBtn]=useState()

  function chooseHandler(choosed, item) {
    setBtn(item)
    let localScore = parseInt(RockPaperScissors.score)
    let partidas = parseInt(RockPaperScissors.partidas)
    const systemChoice = chooseRandom() // set system choose
    const myChoice = choosed.value
    let status = null
    if(myChoice === systemChoice){
      status = condition[1] // draw
      // rock - paper
    } else if(myChoice===options[0] && systemChoice===options[1]){
      status = condition[2] // loose
      // rock - scissor
    } else if (myChoice===options[0] && systemChoice===options[2]){
      status = condition[0] // win
      localScore=(localScore/partidas)
      console.log(localScore)
      // paper - rock
    } else if (myChoice===options[1] && systemChoice===options[0]){
      status = condition[0] // win
      localScore+=10
      // paper - scissors
    } else if (myChoice===options[1] && systemChoice===options[2]){
      status = condition[2] // loose
      // scissor - rock
    } else if (myChoice===options[2] && systemChoice===options[0]){
      status = condition[2] // loose
      // scissor - paper
    } else if (myChoice===options[2] && systemChoice===options[1]){
      status = condition[0] // win
      localScore+=10
    }
    console.log(myChoice)
    setRockPaperScissors({systemChoice:null, score: localScore})
    setTimeout(()=>{
      setRockPaperScissors({userChoice:myChoice, systemChoice: systemChoice, result: status, score: localScore})
    },1500)
    
  }

  const chooseRandom = ()=>{
    const number = Math.floor(Math.random() * 3)
    const result = options[number]
    return result
  }
 
  return (
    <div className="App">
      <Header appName="Jokenpo v.01" />
      <main>
        <Resultado choose={RockPaperScissors.userChoice} result={RockPaperScissors.systemChoice} winner={RockPaperScissors.result} score={RockPaperScissors.score} />
        <Options options={options} selected={btn} click={chooseHandler} />
      </main>
      {/* <nav>
        <ul>
          <li><button>Jogo</button></li>
          <li><button>Config</button></li>
        </ul>
      </nav> */}
    </div>
  );
}

export default App;
