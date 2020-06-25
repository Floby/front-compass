const mainElement = document.querySelector('main')
const northElement = document.getElementById('north')
const needle = document.querySelector('#needle .needle')
var attitude = 0

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
  const decay = (180 - ((180+attitude)%360))
  const RANGE = document.body.clientWidth * 2
  const offset = decay * (RANGE / 180) * -1
  northElement.style.left = `${offset}px`
  needle.style.transform = `rotateZ(${-decay}deg)`
}

