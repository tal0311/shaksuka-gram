'use strict'

function onInit() {
  console.log('on init matches')
  renderMatches()
}

function renderMatches() {
  var matches = getLikesForDisplay()
  const matchesContainer = document.querySelector('.matches')
  console.log(matches)
  var strHTML
  if (Array.isArray(matches)) {
    strHTML = matches
      .map((match) => {
        const { src } = match
        return ` 
              <article class="grid-item">
                 <img
                   src="${src}"
                   alt=""
                 />
               </article>`
      })
      .join(',')
  } else {
    console.log('not array')
    strHTML = matches
  }

  console.log(strHTML)
  matchesContainer.innerHTML = strHTML
}
