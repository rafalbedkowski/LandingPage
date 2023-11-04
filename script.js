const form = document.querySelector("form");
const inputName = form.querySelector("input[name=name]");
const inputEmail = form.querySelector("input[name=email]");
const formMessage = form.querySelector(".form-message");
const rodo = document.getElementById("rodo");

form.addEventListener("submit", e => {
    e.preventDefault();

    let formErrors = [];

    if (inputName.value.length <= 3) {
        formErrors.push("Wypełnij poprawnie pole z imieniem");
    }

    const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
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