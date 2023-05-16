const firstBtn = document.querySelector<HTMLButtonElement>("#firstBtn")
const secondBtn = document.querySelector<HTMLButtonElement>("#secondBtn")
const firstRow = document.querySelector<HTMLDivElement>("#firstRow")
const secRow = document.querySelector<HTMLDivElement>("#secRow")
const firstNumber = document.querySelector<HTMLInputElement>("#firstNumber")
const secText = document.querySelector<HTMLInputElement>("#secText")
const validatorNumber = document.querySelector<HTMLButtonElement>("#validatorNumber")
const validatorText = document.querySelector<HTMLButtonElement>("#validatorText")
const warningArea = document.querySelector<HTMLDivElement>("#warningArea")
const wrongNumber = document.querySelector<HTMLDivElement>("#wrongNumber")
const rightNumber = document.querySelector<HTMLDivElement>("#rightNumber")
const mainDiv = document.querySelector<HTMLDivElement>("#mainDiv")
const sudokuText = document.querySelector<HTMLDivElement>("#sudokuText")



function warningText() {
  const box = document.createElement("div")
  box.id = "box"
  warningArea?.appendChild(box)
  box.style.textAlign = "center"
  const labelHiba = document.createElement('label')
  labelHiba.innerText = "Error!"
  labelHiba.id = "label1"
  labelHiba.style.fontWeight = "bold"
  labelHiba.style.color = "red"
  box.appendChild(labelHiba)
}

function notWarningText() {
  const box = document.createElement("div")
  box.id = "box"
  warningArea?.appendChild(box)
  box.style.textAlign = "center"
  const labelHiba = document.createElement('label')
  labelHiba.innerText = "Not error!"
  labelHiba.id = "label1"
  labelHiba.style.fontWeight = "bold"
  labelHiba.style.color = "red"
  box.appendChild(labelHiba)
}

function wrongNumberFunc() {
  const box = document.createElement("div")
  box.id = "box"
  wrongNumber?.appendChild(box)
  box.style.textAlign = "center"
  const numberHiba = document.createElement('label')
  numberHiba.innerText = "Wrong value! (2 - 5)"
  numberHiba.id = "label1"
  numberHiba.style.fontWeight = "bold"
  numberHiba.style.color = "red"
  box.appendChild(numberHiba)
}

function rightNumberFunc() {
  const box = document.createElement("div")
  box.id = "box"
  wrongNumber?.appendChild(box)
  box.style.textAlign = "center"
  const numberRight = document.createElement('label')
  numberRight.innerText = "Right value! (2 - 5)"
  numberRight.id = "label1"
  numberRight.style.fontWeight = "bold"
  numberRight.style.color = "green"
  box.appendChild(numberRight)
}

// kitörli a divek tartalmát
function areaCleaner() {
  if (warningArea == null || wrongNumber == null || rightNumber == null || sudokuText == null) return
  warningArea.innerText = ""
  wrongNumber.innerText = ""
  rightNumber.innerText = ""
  sudokuText.innerText = ""
}

secondBtn?.addEventListener("click", e => {
  if (secondBtn == null || warningArea == null || wrongNumber == null || rightNumber == null) return
  if (secRow && firstRow) {
    areaCleaner()
    firstRow.style.display = "none"
    secRow.style.display = "block"
  }
})

firstBtn?.addEventListener("click", e => {
  if (firstBtn == null || sudokuText == null) return
  if (secRow && firstRow) {
    secRow.style.display = "none"
    firstRow.style.display = "block"
    sudokuText.innerText = ""
  }
})


// a beírt számoknak megfelelően küld egy üzenetet a felhasználónak
function numberChecker() {
  if (warningArea == null || firstNumber == null || wrongNumber == null || rightNumber == null) return

  const number: number = parseInt(firstNumber.value)

  areaCleaner()
  if (number == 0) {
    areaCleaner()
    warningText()
  } else if (number == 1) {
    areaCleaner()
    notWarningText()
  } else if (number < 0 || number > 5) {
    areaCleaner()
    wrongNumberFunc()
  } else {
    rightNumberFunc()
    const doneButton = document.createElement('button')
    doneButton.id = 'button'
    rightNumber.appendChild(doneButton)
    doneButton.className = "btn btn-warning text-white"
    doneButton.innerText = "Gift!"
    doneButton.addEventListener("click", e => {
      giftButton()
    })
  }
}

validatorNumber?.addEventListener("click", e => {
  numberChecker()
})

function giftButton() {
  window.open("https://th.bing.com/th/id/R.a24009af4037f177449a3210b47b150f?rik=PopCYmYFUQFFTA&riu=http%3a%2f%2faskandreceive.org%2fwp-content%2fuploads%2f2016%2f05%2fgift-in-hand-art.jpg&ehk=qyRYFkrI7FDk129LW0K9RptSgge%2bQJw2ck8CWG%2f3TaQ%3d&risl=&pid=ImgRaw&r=0", '_blank')
}


// generál egy gombot a "sudoku.html" oldalra
function goToSudoku() {
  if (secText?.value == "Sudoku" || secText?.value == "sudoku") {
    // console.log("asd")
    const sudokuBtn = document.createElement('button')
    sudokuBtn.id = "sudBtn"
    sudokuText?.appendChild(sudokuBtn)
    sudokuBtn.className = "btn btn-primary text-white pt-2"
    sudokuBtn.innerText = "Go to Sudoku!"

  }
}

// átirányít a "sudoku.html" oldalra
console.log(validatorText)
validatorText?.addEventListener("click", e => {
  if(sudokuText == null) return
  sudokuText.innerText = ""
  goToSudoku()
})

