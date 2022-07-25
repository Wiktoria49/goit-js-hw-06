const focusInput = document.querySelector("#validation-input")
focusInput.addEventListener("blur", e => inputHandle(e))
function inputHandle(e) {
    console.log(focusInput.getAttribute("data-length"))
    if (e.target.value.length==focusInput.getAttribute("data-length")) {
    focusInput.classList.add("valid")
    } else {
     focusInput.classList.add("invalid")   
 }   
}