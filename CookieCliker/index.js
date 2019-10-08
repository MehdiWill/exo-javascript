var score = 0;

function add(number) {
    score= score + number
    document.getElementById("cookies").innerHTML = score
    
    console.log(score)
}

function paid() {
    if( document.getElementById('text').value > 10){
    document.getElementById('text').value = score - 11
    
    }
    else {
        document.getElementById('text').value = score -1
        console.log(score)
    }
    

}

var score = 0;

paid()
add()