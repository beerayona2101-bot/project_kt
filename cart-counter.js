let counterElement=document.getElementById("counterValue");
function incrementOf(){
    let previousCounterElement=counterElement.textContent;
    let updatedCounter=parseInt(previousCounterElement) + 1;
    if (updatedCounter>0){
        counterElement.style.color="green";
    }
    else if(updatedCounter<0){
        counterElement.style.color="red";
    }
    else {
        counterElement.style.color="black"
    }
    counterElement.textContent=updatedCounter;
}
function decrementOf(){
    let previousCounterElement=counterElement.textContent;
    let updatedCounter=parseInt(previousCounterElement) - 1;
    if (updatedCounter>0){
        counterElement.style.color="green";
    }
    else if(updatedCounter<0){
        counterElement.style.color="red";
    }
    else {
        counterElement.style.color="black"
    }
    counterElement.textContent=updatedCounter;
}

function resetOf(){
    counterElement.textContent=0;
    counterElement.style.color="black";


}
