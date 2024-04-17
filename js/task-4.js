const loginForm = document.querySelector(".login-form")
const onFormSubmit = evt => {
    evt.preventDefault();
    const formElements = evt.currentTarget.elements;
    const formElEmail = formElements.email.value.trim();
    const formElPass = formElements.password.value.trim();

    if (formElEmail === ""  || formElPass === "") {
        alert("All form fields must be filled in")
    } else {
        const results = {
            email: formElEmail,
            password: formElPass,
        }
        console.log(results);
    }

    evt.currentTarget.reset();
};

loginForm.addEventListener("submit", onFormSubmit);