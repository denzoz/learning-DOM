alert("After pressing OK, rest of script will be executed");

function changeText() {
    var target = document.firstElementChild.lastElementChild.querySelector("UL").lastElementChild;
    target.innerHTML = "hi";
    target.style.color = "green";
}

document.getElementById("scriptTrigger").onclick = changeText();