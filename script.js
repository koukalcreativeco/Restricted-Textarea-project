const textArea = document.getElementById("input");
const counter = document.getElementById("counter");
const maxLength = textArea.getAttribute("maxlength");

textArea.addEventListener("input", () => {
    const currentLength = textArea.value.length;
    counter.textContent = `${currentLength} / ${maxLength}`;
    if (currentLength == maxLength) {
        textArea.style.borderColor = "red";
    } else {
        textArea.style.borderColor = "black";
    }
})