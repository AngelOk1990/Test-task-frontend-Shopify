let content = document.querySelector('.collapsible__content')
let button = document.querySelector('.collapsible__button')


document.addEventListener("DOMContentLoaded", () => {
  button.textContent = "Скрыть содержимое"
})
function hideText() {
    if (button.classList.contains('hidden')) {
        content.animate([
            {transform: 'translateX(-600px)'}
        ],
        {
            duration: 100,
            iterations: 1,
            fill: "forwards"
        }
        )
    } else {
        content.animate([
            {transform: 'translateX(0px)'}
        ],
        {
            duration: 100,
            iterations: 1,
            fill: "forwards"
        }
        )
    }
    }
  
button.addEventListener('click', () => {
    changeButtonText()
    hideText()
})

function changeButtonText() {
if(button.classList.contains('hidden')) {
    button.textContent = "Скрыть содержимое"
} else {
    button.textContent = "Показать содержимое"
}
button.classList.toggle("hidden")
}