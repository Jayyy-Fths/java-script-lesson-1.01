// Helper function: writes any HTML into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet () {
  const name = prompt('Please enter your name:')
  if (name && name.trim()) {
    render(`Hello, ${name}!`)
  } else {
    render('Hello there, friendly stranger!')
  }
}

/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers () {
  const input = prompt('Enter numbers separated by commas:')
  if (!input) {
    render('No numbers provided')
    return
  }
  
  const numbers = input.split(',').map(num => parseFloat(num.trim()))
  const validNumbers = numbers.filter(num => !isNaN(num))
  
  if (validNumbers.length === 0) {
    render('No valid numbers found')
    return
  }
  
  const average = validNumbers.reduce((a, b) => a + b) / validNumbers.length
  render(`Numbers: ${validNumbers.join(', ')}<br>Average: ${average.toFixed(2)}`)
}

/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay () {
  const hour = new Date().getHours()
  let greeting = ''
  
  if (hour < 12) {
    greeting = 'Good morning!'
  } else if (hour < 18) {
    greeting = 'Good afternoon!'
  } else {
    greeting = 'Good evening!'
  }
  
  render(greeting)
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween () {
  const min = parseFloat(prompt('Enter the minimum number:'))
  const max = parseFloat(prompt('Enter the maximum number:'))
  
  if (isNaN(min) || isNaN(max)) {
    render('Please enter valid numbers')
    return
  }
  
  if (min >= max) {
    render('Maximum number must be greater than minimum number')
    return
  }
  
  const random = Math.floor(Math.random() * (max - min + 1)) + min
  render(`Random number between ${min} and ${max}: ${random}`)
}

function changetitle () {
  const newTitle = prompt('Enter a new page title:')
  if (newTitle) {
    document.title = newTitle
    render(`Page title changed to: ${newTitle}`)
  }
}

/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function cyclecolor () {
  const colors = ['red', 'blue', 'green', 'purple', 'orange']
  const outDiv = document.getElementById('out')
  const currentColor = outDiv.style.color
  const currentIndex = colors.indexOf(currentColor)
  const nextIndex = (currentIndex + 1) % colors.length
  outDiv.style.color = colors[nextIndex]
  render(outDiv.innerHTML || 'Color changed!')
}

/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function BgColor () {
  const outDiv = document.getElementById('out')
  // Color combinations (background and matching text color)
  const colorSchemes = [
    { bg: '#f8d7da', text: '#842029' },  // Red theme
    { bg: '#cfe2ff', text: '#084298' },  // Blue theme
    { bg: '#d1e7dd', text: '#0f5132' },  // Green theme
    { bg: '#fff3cd', text: '#664d03' },  // Yellow theme
    { bg: '#e2e3e5', text: '#41464b' },  // Gray theme
    { bg: '#f5e6ff', text: '#590995' }   // Purple theme
  ]

  // Get current scheme or start with -1 for first run
  const currentBg = outDiv.style.backgroundColor
  let currentIndex = -1
  for (let i = 0; i < colorSchemes.length; i++) {
    if (colorSchemes[i].bg === currentBg) {
      currentIndex = i
      break
    }
  }

  // Move to next color scheme
  const nextIndex = (currentIndex + 1) % colorSchemes.length
  const newScheme = colorSchemes[nextIndex]

  // Apply the new colors
  outDiv.style.backgroundColor = newScheme.bg
  outDiv.style.color = newScheme.text

  // Show the current color theme name
  const themeNames = ['Red', 'Blue', 'Green', 'Yellow', 'Gray', 'Purple']
  render(`Color Theme: ${themeNames[nextIndex]} 🎨`)
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function double () {
  document.body.classList.toggle('angry-mode')
  if (document.body.classList.contains('angry-mode')) {
    document.body.style.backgroundColor = '#ff4444'
    document.body.style.color = '#fff'
    const buttons = document.getElementsByTagName('button')
    for (let btn of buttons) {
      btn.style.backgroundColor = '#aa0000'
      btn.style.color = '#fff'
      btn.style.borderColor = '#770000'
    }
    render('ANGRY MODE ON! 😠')
  } else {
    document.body.style = ''
    const buttons = document.getElementsByTagName('button')
    for (let btn of buttons) {
      btn.style = ''
    }
    render('Calm mode restored 😊')
  }
}
/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput () {
  render('Output cleared.')
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnChangeTitle').addEventListener('click', changetitle)
document.getElementById('btnCycleColor').addEventListener('click', cyclecolor)
document.getElementById('btnBgColor').addEventListener('click', BgColor)
document.getElementById('btnDouble').addEventListener('click', double)
document.getElementById('btnClear').addEventListener('click', clearOutput)

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Cycle the output box text color (switch to a different color each time clicked).
  3) Change BOTH the text and background color of #out.
  4) Angry Mode (toggle) — switch the Bootstrap theme colors to look "angry."
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/
