if(!localStorage.getItem("count")) {
    var count = 0;
    localStorage.setItem("count", count);
} else {
    count = localStorage.getItem("count");
} 


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
        localStorage.setItem("count", count);
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