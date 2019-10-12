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

let degat= 5

function santer(vitaliter) {

    if( vitaliter =100 ){
    degat=degat + 1

    vitaliter = vitaliter - degat

    document.getElementById("santer").innerHTML = vitaliter
    
    
    }
    
}


let bonus= 0

let regain=1

function magie(mana) {


    if( mana=100){
        mana=mana - 10
        document.getElementById("mana").innerHTML = mana - 10
        console.log(mana)
        }
    
    
    
    
}

const img = document.getElementsByTagName('img')[0]

function changeImage(number) {

    if (score>15) 
    {
        img.src= img.src.replace("peste","goblin")
        let hp = 100
        hp += number 
        
        document.getElementById("hp").innerHTML = hp
        
        
    }
    

    if (score>115) 
    {
        img.src= img.src.replace("peste","goblin")
        let hp = 1000
        hp += number
        document.getElementById("hp").innerHTML = hp
        img.src= img.src.replace("goblin","ganon")
    }
    
}

let prix=100

function achat(number) {
    
    
    if(score = score - prix){
        const integer = parseInt(hp.innerText);
        document.getElementById("hp").innerHTML = hp 
        hp += number
        console.log(hp)
    }
    

    
    img.src= img.src.replace("mastersword","white")
    
    
    console.log(Hp)
    
    changeImage(hp)

}







window.setInterval(function(){
	
    add(bonus);
    santer(degat)
    
	
}, 1000);


add(bonus)




