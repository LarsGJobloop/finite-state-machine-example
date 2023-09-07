const nextButton = document.getElementById("button-next")

let userSwitch = false
let userWon = false

/**
 * To add an event listner (just a function) to multiple elements
 */
// Get a collection (list) of elements
const buttonElements = document.querySelectorAll(".button")

// Add our function to each of these elements
buttonElements.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    const buttonElement = event.target

    // console.log(event.target)
    // console.log(index)

    // Add active to this card
    buttonElement.classList.add("active")
  })
})


function stage1() {
  return new Promise((resolve) => {
    // Have the logic for this stage

    // Trigger the resolve on user input
    nextButton.addEventListener("click", () => resolve())
  })
}

function stage2() {
  return new Promise((resolve) => {
    // Have the logic for this stage

    // Trigger the resolve on user input
    nextButton.addEventListener("click", () => resolve())
  })
}

async function runGame() {
  await stage1()
  console.log("Stage 1 finished")

  await stage2()
  console.log("Stage 2 finished")
}

runGame()

stage1()

function stage2() {
  // Do stage logic here


  // Finaly transition to next stage
  stage3()
}


function stage3() {
  // Do stage logic

  // Wait for user input to transition to next stage
  const switchButton = document.getElementById("next")
  switchButton.addEventListener("click", () => stage4(true))
  
  const keepButton = document.getElementById("next")
  switchButton.addEventListener("click", () => stage4(false))
}

function stage4(userSwitched) {
  // Do stage logic


  // Send result to backend
  post({
    userSwitched,
    userWon
  })
}