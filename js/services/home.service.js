'use strict'

var gImgIdx = 0
var gShakImgUrls = [
  'https://images.unsplash.com/photo-1520218576172-c1a2df3fa5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  'https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  'https://images.unsplash.com/photo-1498602753442-dfa7a49fc9c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
]
var gLikes = []
const NO_MATCHES_MSG = `<h1>Start swiping now! </h1>`
const DEFAULT_IMG = 'https://unsplash.com/a/img/empty-states/photos.png'

function getLikesForDisplay() {
  const matches = loadMatches()
  console.log(matches)
  return matches ? matches : NO_MATCHES_MSG
}

function getImgForDisplay() {
  return gShakImgUrls[gImgIdx]
}

function getDefaultImg() {
  return DEFAULT_IMG
}
function addNewMatch(match) {
  gLikes = [...gLikes, { src: match.src }]
  console.log(gLikes)

  saveMatches()
}

function setImgIdx() {
  gImgIdx++
}

function saveMatches() {
  localStorage.setItem('matches', JSON.stringify(gLikes))
}

function loadMatches() {
  return JSON.parse(localStorage.getItem('matches'))
}
