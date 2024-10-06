let i = document.getElementById("cnt")
let count = 0
function increase() {
    count += 1
    i.innerHTML = count
}
function reset(){
    count = 0
    i.innerHTML = count
}