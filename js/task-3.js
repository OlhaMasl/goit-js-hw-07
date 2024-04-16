const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (evt) => {
    const name = evt.currentTarget.value;
    const cleanName = name.trim();
    if (cleanName.length !== 0) {
       return outputName.textContent = cleanName; 
    } else {
        return outputName.textContent = "Anonymous";
    }
});
