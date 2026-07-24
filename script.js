const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [ 'pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices [randomNumber]
}

const result = document.getElementById('result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playTheGame = (human,machine) => {
    console.log('humano:' + human + 'Maquina:' + machine )

    if(human === machine){
        result.innerHTML = "Empate!"
    } else if (
            (human === 'papel' && machine === 'pedra') ||
            (human === 'pedra' && machine === 'tesoura') ||
            (human === 'tesoura' && machine === 'papel') 
        ){
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
        } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa"
    }
}