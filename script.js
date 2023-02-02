window.addEventListener('load', init)

let time = 15
let score = 0
let isplaying

const WordInput = document.querySelector('#label')
const Currentword = document.querySelector('#currentword')
const seconds = document.querySelector('#number')
const message = document.querySelector('#message')
const TimeDisplay = document.querySelector('#time')
const ScoreDispaly = document.querySelector('#score')

const words = [
  'Everything you can imagine is real',
  'Live as if you were to die tomorrow',
  'It always seems impossible until its done',
  'Lead from the heart not the head',
  'Decisions without actions are worthless',
  'Turn your wounds into wisdom',
  'It hurt because it mattered',
  'Whatever you do, do it well',
  'Every day is a good day',
  'Stay hungry stay foolish',
  'Live as if you were to die tomorrow',
  'If you are going through hell, keep going',
  'Nothing is impossible',
  'Aspire to inspire before you expire',
  'Despite the forecast live like its spring',
  'Every moment is a fresh beginning',
  'Be yourself',
  'Every moment is a fresh beginning',
  'Success is the child of audacity',
  'Never regret anything that made you smile',
  'Impossible is for the unwilling',
  'Dream without fear Love without limits',
  'Simplicity is the ultimate sophistication',
  'All limitations are self-imposed',
  'Screw it, lets do it',
  'Broken crayons still color',
  'Yesterday you said tomorrow just do it',
  'Reality is wrong, dreams are for real',
  'To live will be an awfully big adventure',
  'Try to be a rainbow in someones cloud',
  'There is no substitute for hard work',
  'The time is always right to do what is right',
]
function init() {
  showWords(words)
  WordInput.addEventListener('input', Startmatch)
  setInterval(countdown, 1500)
  setInterval(checkstatus, 50)
}

function Startmatch() {
  if (match()) {
    isplaying = true
    time = 16
    showWords(words)
    WordInput.value = ''
    score++
  }
  if (score == -1)
  {
    ScoreDispaly.innerHTML = 0
    location.reload();
  }
  else
  {
    ScoreDispaly.innerHTML = score
  }
}

function match() {
  if (WordInput.value == Currentword.innerHTML) {
    message.innerHTML = 'Bingo...Correct!'
    return true
  } else {
    message.innerHTML = ''
    return false
  }
}
function showWords(words) {
  const randIndex = Math.floor(Math.random() * words.length)
  Currentword.innerHTML = words[randIndex]
}

function countdown() {
  if (time > 0) {
    time--
  } else if (time == 0) {
    isplaying = false
  }
  TimeDisplay.innerHTML = time
}
function checkstatus() {
  if (!isplaying && time == 0) {
    message.innerHTML = 'Oops! You Lost. Better Luck Next Time'
    score = -1
  }
}
