const btnCap = document.getElementById("btn-cap")
const cap = document.getElementById('cap')
const numbers = document.querySelectorAll('.num-active')


const capcha = () => {
    let capChaContainer = ""
    let capChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i = 0; i < 8; i++){
        capChaContainer += capChar.charAt(Math.random() * 65)
    }
    cap.value = capChaContainer
}

capcha()

btnCap.addEventListener('click', e => {
    capcha()
})


numbers[0].focus()

numbers.forEach((num,idx) => {
    num.addEventListener("keydown", () => {
        if(num.value.length >= 3){
            setTimeout(() => {
                numbers[idx + 1].focus()
            },60)
        }
    })
})













