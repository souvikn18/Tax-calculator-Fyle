const annualIncome = document.getElementById("annual-income")
const extraIncome = document.getElementById("extra-income")
const ageGroup = document.getElementById("age")
const deductions = document.getElementById("deductions")
const finalValue = document.getElementById("final-income")
const submitButton = document.getElementById("submit")
const modal = document.querySelector(".modal-custom")
const modalBody = document.querySelector(".modal-custom-body")
const closeModal = document.getElementById("close-modal")
const errorTooltip1 = document.getElementById("errorTooltip1")
const errorTooltip11 = document.getElementById("errorTooltip11")
const errorTooltip2 = document.getElementById("errorTooltip2")
const errorTooltip3 = document.getElementById("errorTooltip3")
const ageTooltip = document.getElementById("ageTooltip")

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const checkAnnualIncome = () => {
    if (!annualIncome.value) {
        errorTooltip11.classList.remove("hidden");
    } else {
        errorTooltip11.classList.add("hidden");
    }
    
    if (isNaN(annualIncome.value)) {
        errorTooltip1.classList.remove("hidden");
    } else {
        errorTooltip1.classList.add("hidden");
    }
}

const checkAge = () => {
    if (!ageGroup.value) {
        ageTooltip.classList.remove("hidden");
    } else {
        ageTooltip.classList.add("hidden");
    }
}

const handleSubmit = (e) => {
    e.preventDefault()

    if (!annualIncome.value) {
        checkAnnualIncome();
        return;
    }
    
    if (!ageGroup.value) {
        checkAge();
        return;
    }

    const overallIncome = Number(annualIncome.value) + Number(extraIncome.value) - Number(deductions.value)

    if (overallIncome <= 800000 ) {
        alert('No need to pay tax')
        finalValue.innerHTML = overallIncome.toFixed(2)
    }
    if (overallIncome > 800000 && ageGroup.value == 30) {
        const tax = (overallIncome - 800000) * 0.3
        const finalIncome = overallIncome - tax
        finalValue.innerHTML = finalIncome.toFixed(2)
    }
    if (overallIncome > 800000 && ageGroup.value == 40)  {
        const tax = (overallIncome - 800000) * 0.4
        const finalIncome = overallIncome - tax
        finalValue.innerHTML = finalIncome.toFixed(2)
    }
    if (overallIncome > 800000 && ageGroup.value == 10) {
        const tax = (overallIncome - 800000) * 0.1
        const finalIncome = overallIncome - tax
        finalValue.innerHTML = finalIncome.toFixed(2)
    }

    modal.classList.remove("hidden")
    modalBody.classList.add("modal-animation")
    document.body.style.overflow = "hidden"

    annualIncome.value = ""
    extraIncome.value = ""
    ageGroup.value = ""
    deductions.value = ""
}

annualIncome.addEventListener("keyup", checkAnnualIncome)

extraIncome.addEventListener("keyup", () => {
    if (isNaN(extraIncome.value)) {
        errorTooltip2.classList.remove("hidden")
    } else {
        errorTooltip2.classList.add("hidden")
    }
})

deductions.addEventListener("keyup", () => {
    if (isNaN(deductions.value)) {
        errorTooltip3.classList.remove("hidden")
    } else {
        errorTooltip3.classList.add("hidden")
    }
})

ageGroup.addEventListener("change", checkAge)

submitButton.addEventListener("click", handleSubmit)

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden")
    modalBody.classList.remove("modal-animation")
    document.body.style.overflow = "scroll"
})