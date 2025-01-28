const btn =document.getElementById("btn");


let hexcodecolor=()=>{
    let num="0123456789ABCDE";
    let x="#";
    for(let i=0;i<6;i++){
        x=x+num[Math.floor(Math.random()*16)]
        console.log(x);
    }
    return x;
}


function colorreader(){
    document.body.style.backgroundColor=hexcodecolor();
}


btn.addEventListener("click",colorreader);