const boxs = document.querySelectorAll(".box")
const result = document.querySelector(".result")
const player = document.querySelectorAll(".player")
const playerX = document.getElementById("x")
const playerO = document.getElementById("o")
const newGame = document.querySelector(".new-game")
const start = document.querySelector(".start")
console.log(playerX)
console.log(newGame)

function winer() {
    //---1
    if (boxs[0].textContent == boxs[1].textContent && boxs[1].textContent == boxs[2].textContent && boxs[1].textContent != "") {
        boxs[0].classList.add("active")
        boxs[1].classList.add("active")
        boxs[2].classList.add("active")
        result.innerHTML = boxs[0].textContent + " win"
    }
    //---2
    else if (boxs[3].textContent == boxs[4].textContent && boxs[4].textContent == boxs[5].textContent && boxs[5].textContent != "") {
        boxs[3].classList.add("active")
        boxs[4].classList.add("active")
        boxs[5].classList.add("active")
        result.innerHTML = boxs[4].textContent + " win"
    }
    //---3
    else if (boxs[6].textContent == boxs[7].textContent && boxs[7].textContent == boxs[8].textContent && boxs[8].textContent != "") {
        boxs[6].classList.add("active")
        boxs[7].classList.add("active")
        boxs[8].classList.add("active")
        result.innerHTML = boxs[7].textContent + " win"
    }
    // |
    else if (boxs[0].textContent == boxs[3].textContent && boxs[3].textContent == boxs[6].textContent && boxs[6].textContent != "") {
        boxs[0].classList.add("active")
        boxs[3].classList.add("active")
        boxs[6].classList.add("active")
        result.innerHTML = boxs[4].textContent + " win"
    }
    // ||
    else if (boxs[1].textContent == boxs[4].textContent && boxs[4].textContent == boxs[7].textContent && boxs[7].textContent != "") {
        boxs[1].classList.add("active")
        boxs[4].classList.add("active")
        boxs[7].classList.add("active")
        result.innerHTML = boxs[4].textContent + " win"
    }
    // |||
    else if (boxs[2].textContent == boxs[5].textContent && boxs[5].textContent == boxs[8].textContent && boxs[8].textContent != "") {
        boxs[2].classList.add("active")
        boxs[5].classList.add("active")
        boxs[8].classList.add("active")
        result.innerHTML = boxs[4].textContent + " win"
    }
    //  ///
    else if (boxs[2].textContent == boxs[4].textContent && boxs[4].textContent == boxs[6].textContent && boxs[6].textContent != "") {
        boxs[2].classList.add("active")
        boxs[4].classList.add("active")
        boxs[6].classList.add("active")
        result.innerHTML = boxs[4].textContent + " win"
    }
    //  \\\
    else if (boxs[0].textContent == boxs[4].textContent && boxs[4].textContent == boxs[8].textContent && boxs[8].textContent != "") {
        boxs[0].classList.add("active")
        boxs[4].classList.add("active")
        boxs[8].classList.add("active")
        result.innerHTML = boxs[4].textContent + " win"

    }
}
let current = "x";
boxs.forEach((box) => {
    box.addEventListener('click', () => {
        if (current === "x" && box.textContent === "") {
            box.innerHTML = current;
            current = "o"
            result.innerHTML = "o"
            //remove class order
            player.forEach((item) => {
                item.classList.remove('order')
            })
            //add class order => o
            playerO.classList.add('order')
        }
        else if (current === "o" && box.textContent === "") {
            box.innerHTML = current;
            current = "x"
            result.innerHTML = "x"
            //remove class order
            player.forEach((item) => {
                item.classList.remove('order')
            })
            //add class order => x
            playerX.classList.add('order')
        }
        winer()

    })
})
start.addEventListener('click', () => {
    start.parentElement.remove()
})