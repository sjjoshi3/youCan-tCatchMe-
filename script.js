let box = document.getElementById("box");
let windowHeight = window.innerHeight;
let windowWidth  = window.innerWidth;

// console.log(`Inner height is : ${windowHeight}\nInner Width is : ${windowWidth}`);



box.addEventListener("mouseover", ()=>{

    var boxDetails = box.getBoundingClientRect();

    //console.log(boxDetails.height+"\n"+boxDetails.width);
    let position = newPosition(boxDetails.height, boxDetails.width);

    console.log(position);
    box.style.top =  position.y+"px";
    box.style.left = position.x+"px";
    
 
    

});

function newPosition(height, width){

    let x = ((Math.floor(Math.random()*windowWidth))-width);
    let y = ((Math.floor(Math.random()*windowHeight))-height);


    
// console.log(x);
// console.log(y);
    
if(x<0){
    x = 0;
}

if(y<0){
    y = 0;
}



return {x : x, y : y}
}