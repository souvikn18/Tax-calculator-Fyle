const submitButton = document.getElementById("submit")
const modal = document.getElementById("modal1")

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const handleSubmit = (e) => {
    e.preventDefault()

    const annualIncome = document.getElementById("annual-income").value
    const extraIncome = document.getElementById("extra-income").value
    const ageGroup = document.getElementById("age").value
    const deductions = document.getElementById("deductions").value
    const finalValue = document.getElementById("final-income")

    const overallIncome = Number(annualIncome) + Number(extraIncome) - Number(deductions)

    if (overallIncome <= 800000 ) {
        alert('No need to pay tax')
    }
    if (overallIncome > 800000 && ageGroup == 30) {
        const tax = (overallIncome - 800000) * 0.3
        const finalIncome = overallIncome - tax
        finalValue.innerHTML = finalIncome.toFixed(2)
    }
    if (overallIncome > 800000 && ageGroup == 40)  {
        const tax = (overallIncome - 800000) * 0.4
        const finalIncome = overallIncome - tax
        finalValue.innerHTML = finalIncome.toFixed(2)
    }
    if (overallIncome > 800000 && ageGroup == 10) {
        const tax = (overallIncome - 800000) * 0.1
        const finalIncome = overallIncome - tax
        finalValue.innerHTML = finalIncome.toFixed(2)
    }

    annualIncome = ""
}

submitButton.addEventListener('click', handleSubmit)