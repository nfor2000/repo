const text = document.querySelector(".overview .text")
const Name = document.querySelector(".name")
const Avatar = document.querySelector(".avatar")
const position = document.querySelector(".position")
const overviewBtns = document.querySelectorAll('.btns button')

let personIndex = 0
const person = [
    {
        "id": 1,
        "image": "flat-design-forest-landscape_23-2149162735.webp",
        "position": "Boss",
        "name": "Takop",
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nulla quod excepturi rem mollitia architecto!Autem, minus! Incidunt, modi iusto consectetur neque laborum nisi veritatis iste rerum ipsa voluptas officiadistinctio nemo harum eius sunt illum provident quae minima eaque.Minus hic cumque ex quos sit non enimipsa?"
    },
    {
        "id": 2,
        "image": "underwater-ruins-old-city-silhouette-blue-sea-background-natural-underwater-seascape_87946-1856.webp",
        "position": "Assistant Boss",
        "name": "Betrand",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt, maiores tempore temporibus fuga amet excepturi natus eos, totam magni modi inventore aperiam culpa necessitatibus laboriosam quis commodi vero rerum omnis officia hic nisi? Optio minima aliquid recusandae rerum expedita!"
    },
    {
        "id": 3,
        "image": "silhouette-forest-landscape-background_1308-68574.webp",
        "position": "Apprentice",
        "name": "Berry",
        "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente dicta quo facere nobis incidunt totam non blanditiis, ab accusamus, voluptas eveniet exercitationem excepturi explicabo quasi nostrum ipsam! Debitis, quibusdam nulla?"
    },
    {
        "id": 4,
        "image": "data_sofa-beds_della-wooden-sofa-cum-bed-with-armrests_revised_honey_updated_2-810x702.jpg",
        "position": "Apprentice",
        "name": "Tammy",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quis assumenda dolorum recusandae neque nemo soluta tempore, porro ratione omnis debitis repellendus ab amet est temporibus ex commodi doloremque! Molestias."
    }
]
const NewOverviewBtns = Array.from(overviewBtns)
NewOverviewBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (btn.classList.contains("increase")){
            personIndex++
            ToggleTeam()
        }
        if (btn.classList.contains("decrease")) {
            personIndex--
            ToggleTeam()
        }
        if (btn.classList.contains("randombtn")) {
            personIndex = getRandomIndex()
            ToggleTeam()
        }
    })
})
window.addEventListener("DOMContentLoaded",ToggleTeam)
function ToggleTeam(){
    if(personIndex<0){
        personIndex = 3
    }
    if(personIndex>3){
        personIndex=0
    }
    text.innerText = person[personIndex].text
    position.innerText = person[personIndex].position
    Avatar.src = person[personIndex].image
    Name.innerText = person[personIndex].name
}
function getRandomIndex(){
    return Math.floor(Math.random()*person.length)
}