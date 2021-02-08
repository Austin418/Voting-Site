let votes = 0

voteButton.onclick = function(event){
    let fieldCoords = field.getBoundingClientRect();
    for (let i = 0; i < 10; i++) {
        
    }

    let leftRand = Math.random()* field.clientWidth
    let topRand = Math.random()*field.clientHeight

    

    let voteCoords = {
        top:  topRand,
        left: leftRand
    }

    //prevent the voteButton from moving out of bounds
    if(voteCoords.top < 0) {
        voteCoords.top = 0;
    }
    if(voteCoords.left < 0) {
        voteCoords.left = 0
    }

    if(voteCoords.left + voteButton.clientWidth > field.clientWidth){
        voteCoords.left = field.clientWidth - voteButton.clientWidth
    }
    if(voteCoords.top + voteButton.clientHeight > field.clientHeight){
        voteCoords.top = field.clientHeight - voteButton.clientHeight
    }

    voteButton.style.left = voteCoords.left+"px"
    voteButton.style.top = voteCoords.top+"px"
    console.log(voteCoords.left)
    console.log(voteCoords.top)
    votes++
    document.getElementById("votes").textContent = votes
    if(votes > 20){
        field.style.background = "black"
        document.getElementById("votes").style.background = "black"
        document.getElementById("votes").style.color = "white"
    }
    if(votes > 100){
        field.style.background = "url(media/deepfried_1612562902617.jpg)"
        document.getElementById("votes").style.background = "black"
        document.getElementById("votes").style.color = "white"
    }

}

let start_time;
function end() {
    start_time = new Date();
}
function start() {
    var now = new Date();
    alert(now-start_time);
}
if(now - start_time < Date())


finish.onclick = function(event){
    alert(`Thank you, ${votes} votes have been awarded to Future President Richard Nixon. Please press the X at the top of the screen to exit`)
}   

