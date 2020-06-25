const debugElement = document.getElementById('debug')
function debug (obj) {
  debugElement.innerText = JSON.stringify(obj, null, '  ')
}

window.addEventListener("deviceorientation", onDeviceOrientation, true)

function onDeviceOrientation (e) {
  console.log('e', e)
  const { alpha, beta, gamma } = e

}
