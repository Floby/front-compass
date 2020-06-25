const randomStart = Math.floor(Math.random() * 360)
const debugElement = document.getElementById('debug')
const compassElement = document.getElementById('compass')
const northElement = document.getElementById('north')
var attitude = randomStart

function debug (obj) {
  debugElement.innerText = JSON.stringify(obj, null, '  ')
}


window.addEventListener("deviceorientation", onDeviceOrientation, true)

function onDeviceOrientation (e) {
  const alpha = 0 + (e.alpha || 0)
  attitude = alpha % 360;
  debug({ attitude })
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
}

