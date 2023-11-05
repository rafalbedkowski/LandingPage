const form = document.querySelector("form");
const inputName = form.querySelector("input[name=name]");
const inputEmail = form.querySelector("input[name=email]");
const formMessage = form.querySelector(".form-message");
const rodo = document.getElementById("rodo");

form.addEventListener("submit", e => {
    e.preventDefault();

    const formErrors = [];

    if (inputName.value.length <= 3) {
        formErrors.push("Wypełnij poprawnie pole z imieniem");
    }

    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

    if (!reg.test(inputEmail.value)) {
        formErrors.push("Wypełnij poprawnie pole z emailem");
    }

    if(!rodo.checked){
        formErrors.push("Musisz zaznaczyć zgodę na przetwarzanie danych")
    }

    if (!formErrors.length) { 
        e.target.submit();
     
    } else {
     
        formMessage.innerHTML = `
            <h3 class="form-error-title">Przed wysłaniem proszę poprawić błędy:</h3>
            <ul class="form-error-list">
                ${formErrors.map(el => `<li>${el}</li>`).join("")}
            </ul>
        `;
    }
});