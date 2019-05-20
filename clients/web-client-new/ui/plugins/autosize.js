
const autoSize = function () {
  const stdWidth = 1500
  const stdHeight = 600

  let width = window.innerWidth
  let height = window.innerHeight

  const zoomFactor = Math.max(1, width / stdWidth)

  document.querySelector('html').style.setProperty('zoom', zoomFactor)
  //document.querySelector('meta[name=viewport]').setAttribute('content', 'width=' + width + ',minimum-scale=' + scale + ',maximum-scale=' + scale + ',initial-scale=' + scale)
}

autoSize()

window.addEventListener('resize', autoSize, true)

document.addEventListener('dragover', event => {
  event.preventDefault()
  return false
})

document.addEventListener('drop', event => {
  event.preventDefault()
  return false
})
