import "core-js/stable"
import "regenerator-runtime/runtime"

const signUpWindow = document.querySelector(".sign-up")
const successWindow = document.querySelector(".success")

const form = document.querySelector(".form")
const mailInput = document.getElementById("email")

const successMsgEmail = document.querySelector(".success__email")
const btnSuccess = document.querySelector(".success__btn")

const isValidEmail = function (email) {
  const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return mailFormat.test(email)
}

const showSuccesMessage = function (email) {
  successMsgEmail.textContent = email
  signUpWindow.classList.toggle("hidden")
  successWindow.classList.toggle("hidden")
}

const addRemoveErrorClass = function (fieldName, action) {
  const closestFormGroup = document
    .getElementById(fieldName)
    .closest(".form__group")

  if (action === "add") closestFormGroup.classList.add("form__group--error")

  if (action === "remove")
    closestFormGroup.classList.remove("form__group--error")
}

mailInput.addEventListener("change", function (e) {
  const fieldName = e.target.id
  const userEmail = e.target.value

  if (!isValidEmail(userEmail)) {
    addRemoveErrorClass(fieldName, "add")
  } else {
    addRemoveErrorClass(fieldName, "remove")
  }
})

form.addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const [fieldName, userEmail] = [...new FormData(this)][0]

  // Check if user email is valid
  if (!isValidEmail(userEmail)) {
    addRemoveErrorClass(fieldName, "add")
    return
  }

  showSuccesMessage(userEmail)
})

btnSuccess.addEventListener("click", function () {
  signUpWindow.classList.toggle("hidden")
  successWindow.classList.toggle("hidden")
  mailInput.value = ""
})
