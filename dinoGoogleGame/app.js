var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

const jump = () => {
    if (character.classList.contains("animate")) { return }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}

var checkDead = setInterval(function () {
    let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    // Zaktualizowane wartości do detekcji kolizji
    if (blockLeft < 120 && blockLeft > 50 && characterBottom < 40) { // Zmieniono warunki kolizji, aby uwzględnić nowe wymiary
        block.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);

document.addEventListener('keydown', jump);
