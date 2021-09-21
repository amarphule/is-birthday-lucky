const birthDate = document.querySelector("#birth-date")
const luckyNumber = document.querySelector("#lucky-number")
const checkbtn = document.querySelector("#check")
const message = document.querySelector("#message")

checkbtn.addEventListener('click', () => {
    let dob = birthDate.value

    if (dob && luckyNumber.value) {
        let dobNumber = dob.replaceAll("-", "")
        let sum = 0;
        for (let num of dobNumber) {
            sum = sum + Number(num)
        }
        (sum % luckyNumber.value == 0) ? message.innerHTML = `🥳Yayy!! ${luckyNumber.value} is lucky for you. you are lucky person 🥳🥳` : message.innerHTML = "Don't bilieve in lucky, Create Own!🤠"
    } else
        message.innerHTML = "Enter both input"
})
