let score = 0;
let hp= 15

function add(number) {
    const integer = parseInt(cookies.innerText);
    score= score + number
    hp= hp - number

    document.getElementById("cookies").innerHTML = score
    document.getElementById("hp").innerHTML = hp


    changeImage(hp)
    
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

const img = document.getElementsByTagName('img')[0]

function changeImage(number) {

    if (score>15) 
    {
        img.src= img.src.replace("peste","goblin")
        let hp = 100
        hp -= number 
        
        document.getElementById("hp").innerHTML = hp
        console.log(hp)
        
    }
    

    if (score>115) 
    {
        img.src= img.src.replace("goblin","ganon")
    }
    
}




window.setInterval(function(){
	
	add(bonus);
	
}, 1000);


add(bonus)


// const integer = parseInt(suiv.innerText);
// suiv.innerText = increment + integer;