var dodger = document.getElementById('dodger')
function moveDodgerRight() {
  var leftNumbers = dodger.style.right.replace('px', '')
  var left = parseInt(rightNumbers, 10)
 
  if (left > 0) {
    dodger.style.right = `${right - 1}px`
  }
}
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})