'use strict'

var gHammerContainer
var gHeader
function onInit() {
  var elImgContainer = document.querySelector('.img-container')
  var appHeder = document.querySelector('.container header')

  gHammerContainer = new Hammer(elImgContainer)
  gHeader = new Hammer(appHeder, {
    direction: Hammer.DIRECTION_HORIZONTAL,
  })
  onHederSwipe()
  onSwipe()
  renderImg()
}

function onSwipe() {
  var msg = ''

  gHammerContainer.on('swipeleft swiperight', (ev) => {
    msg = ev.type === 'swipeleft' ? 'Unlike' : 'Like'
    if (ev.type === 'swiperight') {
      addNewMatch(ev.target)
      console.log(gLikes)
    }

    addModalContent(msg)
    setTimeout(() => {
      addModalContent()
      setImgIdx()
      renderImg()
    }, 800)
  })
}

function onHederSwipe() {
  gHeader.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL })
  gHeader.on('swipe', () => {
    addModalContent('Refreshing')
    setTimeout(() => {
      window.location.reload()
    }, 800)
  })
}

function addModalContent(msg) {
  var elModal = document.querySelector('.modal')
  elModal.classList.toggle('open')
  var elModalH2 = document.querySelector('.modal h2')

  elModalH2.innerText = msg
}

function renderImg() {
  console.log('render')

  var shakSukaImg = getImgForDisplay()
  var img = `
    <img
    src='${shakSukaImg || getDefaultImg()}'
    alt='shakshuka'
    />`

  document.querySelector('.img-container').innerHTML = img
}
