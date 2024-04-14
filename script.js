const annualIncome = document.getElementById("annual-income")
const extraIncome = document.getElementById("extra-income")
const ageGroup = document.getElementById("age")
const deductions = document.getElementById("deductions")
const finalValue = document.getElementById("final-income")
const submitButton = document.getElementById("submit")
const modal = document.getElementById("modal1")
const errorTooltip1 = document.getElementById("errorTooltip1")
const errorTooltip2 = document.getElementById("errorTooltip2")
const errorTooltip3 = document.getElementById("errorTooltip3")
const ageTooltip = document.getElementById("ageTooltip")

const errorIcon = document.createElement('i')

errorIcon.className = "fa fa-exclamation-circle float-end position-absolute error"
errorIcon.ariaHidden = true

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const checkString = () => {
    if (isNaN(annualIncome.value) ) {
        errorTooltip1.appendChild(errorIcon)
    }else {
        errorTooltip1.contains(errorIcon) && errorTooltip1.removeChild(errorIcon)
    }

    if (isNaN(extraIncome.value) ) {
        errorTooltip2.appendChild(errorIcon)
    }else {
        errorTooltip2.contains(errorIcon) && errorTooltip2.removeChild(errorIcon)
    }

    if (isNaN(deductions.value) ) {
        errorTooltip3.appendChild(errorIcon)
    }else {
        errorTooltip3.contains(errorIcon) && errorTooltip3.removeChild(errorIcon)
    }
}
annualIncome.addEventListener('keyup', checkString)
extraIncome.addEventListener('keyup', checkString)
deductions.addEventListener('keyup', checkString)


const handleSubmit = (e) => {
    e.preventDefault()

    const overallIncome = Number(annualIncome.value) + Number(extraIncome.value) - Number(deductions.value)

    const ageError = document.createElement('i')
    ageError.className = 'fa fa-exclamation-circle float-end position-absolute error2'
    ageError.ariaHidden = true
    if (!ageGroup.value) {
        ageTooltip.appendChild(ageError)
    }

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

    if (ageGroup.value == 30 || ageGroup.value == 40 || ageGroup.value == 10) {
        ageTooltip.remove()
    }

    annualIncome.value = ""
    extraIncome.value = ""
    ageGroup.value = ""
    deductions.value = ""
}

submitButton.addEventListener('click', handleSubmit)