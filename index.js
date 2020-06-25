const randomStart = Math.floor(Math.random() * 360)
const debugElement = document.getElementById('debug')
const compassElement = document.getElementById('compass')
let attitude = randomStart

function debug (obj) {
  debugElement.innerText = JSON.stringify(obj, null, '  ')
}


window.addEventListener("deviceorientation", onDeviceOrientation, true)

function onDeviceOrientation (e) {
  console.log('e', e)
  const { alpha, beta, gamma } = e
  debug({ alpha, beta, gamma })
  attitude = randomStart + (alpha || 0)
  debug({ attitude })
}
