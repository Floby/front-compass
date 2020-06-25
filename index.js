const randomStart = Math.floor(Math.random() * 360)
const mainElement = document.querySelector('main')
const compassElement = document.getElementById('compass')
const northElement = document.getElementById('north')
const needle = document.querySelector('#needle .needle')
var attitude = randomStart

window.addEventListener("deviceorientation", onDeviceOrientation, true)

function onDeviceOrientation (e) {
  if (e.alpha === null && !window.location.search.includes('force')) {
    mainElement.classList.add('incompatible')
    return
  }
  const alpha = 0 + (e.alpha || 0)
  attitude = alpha % 360;
  window.requestAnimationFrame(onAnimation)
}

function onAnimation () {
  console.log('attitude', attitude)

  const decay = (180 - ((180+attitude)%360))
  console.log('decay', decay)

  const RANGE = document.body.clientWidth * 2
  console.log('RANGE', RANGE)

  const offset = decay * (RANGE / 180) * -1
  northElement.style.left = `${offset}px`

  console.log('needle', needle)

  needle.style.transform = `rotateZ(${-decay}deg)`
}

