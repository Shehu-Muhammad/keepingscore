var count = 0;
document.getElementById("result").innerHTML = count;

document.querySelectorAll("button").forEach(button => {
    button.onclick = () => {
        if(button.dataset.operation == "increase") {
            increaseScore();
        } else if (button.dataset.operation == "decrease") {
            decreaseScore();
        } else if (button.dataset.operation == "reset") {
            resetScore();
        }
        document.querySelector("#result").innerHTML = count;
    }
});

function increaseScore() {
    count++;
}

function decreaseScore() {
    if(count == 0) {
        return;
    } else {
        count--;
    }
}

function resetScore() {
    count = 0;
}