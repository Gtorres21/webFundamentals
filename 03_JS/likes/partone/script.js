function increaseLikes(elementID){
    let spanElement = document.querySelector(".likes_counter"+ elementID)
    console.log(spanElement.innerText)

    let currentCount = spanElement.innerText;
    currentCount++;
    spanElement.innerText = currentCount;
}