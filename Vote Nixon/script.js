let main = document.getElementsByTagName("body")
main = main[0]
console.log(main)

let button = document.getElementById("button")
let mcGovern = document.getElementById("mcGovern")
let textArea = document.getElementById("span")
let okMaybe = document.getElementById("newOption")
let nixon = document.getElementById("nixon")
let poptab = document.getElementById("popup")
let outerpopup = document.getElementById("outerpopup")
let nav = document.getElementsByTagName("nav")

popup = function(event){
    poptab.innerHTML = "<h1>On This Page You Will Select Your Candidate.</h1> <br> <button onClick='closetab()'>Ok</button> <button onClick='closepage()'>Cancel</button>"
}

let closetab = function(){
    poptab.style.display = "none"
    outerpopup.style.background = "transparent"
    outerpopup.style.display = "none"
}

let closepage = function(){
    window.close()
}

// button.onclick = function(){
//     for (let i = 0; i < 30; i++) {
//         document.createElement("div")
//         div.textContent = "Vote nixon"
        
//     }
// }

// nav.
window.onload = popup()
let fact = function (event) {
    let info = textArea.innerHTML = "<div id='fact'>Richard Nixon Would Be A Great PRESIDENT</div><div><button id='mcGovernFactButton'>Another Fact</button></div>"
    button.style.display = "none"
    mcGovernFactButton.addEventListener("click", mcGovernFact)
}
let mcGovernFact = function (event){
    let newInfo = textArea.innerHTML = "<div id='fact2'>McGovern is Unbased</div> <div><a href='https://youtu.be/GK2GUxOnjDQ'>McGoverns Favorite song</a></div>"
}

let switchMcGovern = function (event) {
    let mcGovern = document.getElementById("mcGovern")
    this.textContent = "Vote Nixon"
    this.style.background = "linear-gradient(180deg, rgba(255, 42, 42, 1) 0%, rgba(148, 0, 0, 1) 100%"
}

let hoverNixon = function (event) {
    this.style.background = "goldenrod"
    this.style.border = "8px solid gold"
    this.style.color = "black"
    this.style.webkitTextStroke = "gold 3px"
}
let noHover = function (event) {
    this.style.background = "linear-gradient(180deg, rgba(255, 42, 42, 1) 0%, rgba(148, 0, 0, 1) 100%"
    this.style.border = "black solid 3px"
    this.style.color = "white"
    this.style.webkitTextStroke = "black 3px"
}

let exitMcGovern = function (event) {
    let mcGovern = document.getElementById("mcGovern")
    this.innerHTML = "<a href='mcGovern.html'><div id='mcGovern2' class='bigButton'>Vote McGovern</div></a>"
    mcGovern.removeEventListener("click", switchMcGovern)
    // mcGovern.onclick = URL
    mcGovern.onclick = "mcGovern.html"
    mcGovern = document.getElementById("mcGovern")
    mcGovern.style.background = "transparent"
    mcGovern.style.border = "none"

}

let corrct = function(){
    alert("Thank you for taking the time out of your day and picking Richard Nixon. Goodbye. To Exit click the X in the top right.")
}



mcGovern.addEventListener("click", switchMcGovern)
button.addEventListener("click", fact)
nixon.addEventListener("mouseover", hoverNixon)
nixon.addEventListener("mouseout", noHover)
mcGovern.addEventListener("mouseout", exitMcGovern)
nixon.addEventListener("click", corrct)







//use cords and rand to randomly transport button onclick

// let laugh = function(){
//     let audio = document.getElementById("laugh")
//     audio.play()
// }

// mcGovern.addEventListener("mouseenter", laugh)




//2/4 trying to get the exitmcGOvern function to take me to the Script1.js file 