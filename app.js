const cookieBtn = document.querySelector('#cookie-btn')
const resetBtn = document.querySelector('#reset-btn')
const messageEl = document.querySelector('#message')

let cookies = 0

function updateMessage() {
  if (cookies === 0) {
    messageEl.textContent = 'You have 0 cookies'
  } else if (cookies === 1) {
    messageEl.textContent = 'You won 1 cookie!'
  } else {
    messageEl.textContent = `You won ${cookies} cookies!`
  }
}

cookieBtn.addEventListener('click', () => {
  cookies++
  updateMessage()
})

resetBtn.addEventListener('click', () => {
  cookies = 0
  updateMessage()
})