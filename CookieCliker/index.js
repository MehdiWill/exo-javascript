
function add() {

    document.getElementById('text').value = score ++
    return score
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