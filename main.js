
document.querySelector("#items").addEventListener("wheel", () => {
    if(event.deltaY < 0) {
        event.target.scrollBy(300, 0)
    } else {
        event.target.scrollBy(-300, 0)
    }
    event.preventDefault()
})
