const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = getComputedStyle(items);



rightBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    let currentRight = parseInt(computedStyles.right)
    

    if(currentRight <500) {
       // currentRight += 100;
        items.style.right = `${currentRight + 100}px`;
    }
    console.log(currentRight);
})

leftBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);

    if(currentRight > 0) {
        items.style.right = `${currentRight - 100}px`;
    }
    
})