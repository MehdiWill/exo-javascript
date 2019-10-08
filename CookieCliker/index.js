let score = 0;


function add(number) {
    const integer = parseInt(cookies.innerText);
    score= score + number
    document.getElementById("cookies").innerHTML = score
    
}


let bonus= 0

function paid() {

    const cout= 100
    
    if( score > cout ){
    bonus=bonus + 2
    score = score - cout

    
    console.log(bonus)
    }
    
    

}


window.setInterval(function(){
	
	add(bonus);
	
}, 1000);


add(bonus)


// const integer = parseInt(suiv.innerText);
// suiv.innerText = increment + integer;