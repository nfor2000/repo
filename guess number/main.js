const AgainBtn = document.querySelector(".restart-btn");
const ChekBtn = document.querySelector(".Check-btn");
const inputEl = document.querySelector(".input-el");
const Textel = document.querySelector(".text");
const HighScoreEl= document.querySelector(".Highscore-el");
const ScoreEl = document.querySelector(".score-el");
const GuessEl = document.querySelector(".Guess-numel");
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const hide = document.querySelectorAll('.hidden')

function generateRandomNumber(){
    let number = Math.floor(Math.random()*21)
    if(number===0){
        return 1;
    }else{
        return number
    }
}

let guessedNumber
let UnknownNumber = generateRandomNumber()
console.log(UnknownNumber)
let result={score:10}
HighScoreEl.textContent=`🏆 Highscore:${JSON.parse(localStorage.getItem('Highscore'))}`
ScoreEl.textContent=`💯 score:${result.score}`
let guessRight=false
ChekBtn.addEventListener("click",()=>{
    if(guessRight===false){
        guessedNumber = inputEl.value
        inputEl.value=""
     if(guessedNumber>20||guessedNumber<0){
        Textel.textContent="🤥 oops. Number not within range!"
     }
    else{
        if(guessedNumber<UnknownNumber){
            Textel.textContent=" 🔽 too low"
            localStorage.setItem("score",JSON.stringify(result.score-=1))
        }
        else if(guessedNumber>UnknownNumber){
            Textel.textContent="🌋 too high"
            localStorage.setItem("score",JSON.stringify(result.score-=1))
        }
        else{
            Textel.textContent="🎉🎉 you guessed right"
            document.querySelector("main").style.background=' #008000c2'
            GuessEl.textContent=UnknownNumber
            localStorage.setItem("score",JSON.stringify(result.score+=1))
            guessRight= true
        }
        let score=JSON.parse(localStorage.getItem("score"))
        if(score===0){
            Textel.textContent=`💥 you're out of the game`
            guessRight=true
            localStorage.setItem("score",JSON.stringify(result.score=20))
        }
        let Highscore=JSON.parse(localStorage.getItem("Highscore"))
        if(score>Highscore){
            modal.style.display="flex"
            overlay.classList.add('active')
            Highscore=score
            document.querySelector('.hiddenscore').textContent= Highscore
            localStorage.setItem("Highscore",JSON.stringify(Highscore))
            HighScoreEl.textContent=`🏆 Highscore:${Highscore}`
        }
        ScoreEl.textContent= `💯 Score:${JSON.parse(localStorage.getItem("score"))}`
    }
    }
     
})

AgainBtn.addEventListener("click",function(){
    document.querySelector('main').style.background=""
    Textel.textContent="🤔Start guessing......."
    GuessEl.textContent="?"
    UnknownNumber = generateRandomNumber()
    guessRight=false
    inputEl.value=''
    console.log(UnknownNumber)

})
hide.forEach(q =>{
    q.addEventListener("click",function (){
        modal.style.display ="none"
        overlay.classList.remove('active')
    })
})