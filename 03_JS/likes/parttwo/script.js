function increaseLikes(elementID){
    console.log(elementID);
    let spanElement = document.querySelector("."+ elementID)
    console.log(spanElement.innerText)
    
    let currentCount = spanElement.innerText;

    currentCount++;

    spanElement.innerText = currentCount;
}