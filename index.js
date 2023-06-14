function addHTML () {
  var el, i, domEl, fileName, xmlHttp

  /*Iterate all DOM*/
  el = document.getElementsByTagName('*')
  for (i = 0; i < el.length; i++) {
    domEl = el[i]

    /*find the element having w3-include-html attribute*/
    fileName = domEl.getAttribute('w3-include-html')
    if (fileName) {
      /*http request with attribute value as file name*/
      xmlHttp = new XMLHttpRequest()
      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            domEl.innerHTML = this.responseText
          }
          if (this.status == 404) {
            domEl.innerHTML = 'Page not found.'
          }

          /* Remove the attribute and invoke the function again*/
          domEl.removeAttribute('w3-include-html')
          addHTML()
        }
      }
      xmlHttp.open('GET', fileName, true)
      xmlHttp.send()

      /*function ends*/
      return
    }
  }
}
addHTML()
var dialog = document.getElementById('settingsDialog')

function settings () {
  document.getElementById('settingsBtn').onclick = function () {
    dialog.classList.add('settings')
    dialog.showModal()
  }
  document.getElementById('hide').onclick = function () {
    dialog.classList.remove('settings')
    dialog.close()
  }
}
settings()

var toggle = document.getElementById('theme-toggle')
const themeName = document.getElementById('themeName')

var storedTheme =
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
if (storedTheme)
  document.documentElement.setAttribute('data-theme', storedTheme)

toggle.onclick = function () {
  var currentTheme = document.documentElement.getAttribute('data-theme')
  var targetTheme = 'light'

  if (currentTheme === 'light') {
    targetTheme = 'dark'
  }

  document.documentElement.setAttribute('data-theme', targetTheme)
  localStorage.setItem('theme', targetTheme)
  themeName.innerText = targetTheme
}

themeName.innerText = localStorage.getItem('theme')

let signupForm = document.getElementById('signupForm')
signupForm.addEventListener('submit', e => {
  e.preventDefault()
  console.table(e)
})
const signupDialog = document.getElementById('signupDialog')
const signupBtn = document.getElementById('userBtn')
const signupCloseBtn = document.getElementById('signupCloseBtn')
function user () {
  signupBtn.onclick = function () {
    signupDialog.showModal()
  }
  signupCloseBtn.onclick = function () {
    signupDialog.close()
  }
}
user()
