'use strict'

const { exec } = require('child_process')
const fs = require('fs')
const os = require('os')
const bender = require('./')

const DEG = Math.PI / 180

const mag = 360
const mid = mag * 0.5

const svg = (data) => {
  // http://stackoverflow.com/questions/17455436/is-there-a-way-to-convert-json-to-an-svg-object
  const node = p => `<circle cx="${p.x}" cy="${p.y}" r="1" fill="white"/>`

  const head = `<svg width="${mag}px" height="${mag}px" version="1.1" xmlns="http://www.w3.org/2000/svg">\n`
  const back = `<rect width="${mag}px" height="${mag}px" fill="black"/>`
  const foot = '</svg>\n'

  const body = data.map(node).reduce((acc, val) => acc + val, '')

  return head + back + body + foot
}

const seed = a => Math.floor(Math.random() * a.length)
const feed = [
  [2, 3],
  [4, 1],
  [4, 3],
  [5, 2],
  [6, 4]
]

const [n, d] = feed[seed(feed)]

const createPoint = (i) => {
  const space = mid - 2
  const angle = DEG * i
  const reach = Math.cos(n / d * angle)

  const { x, y } = bender(angle, reach)

  return {
    x: mid + (space * x),
    y: mid + (space * y)
  }
}

const data = Array.from({ length: mag * d }).map((v, i) => i).map(createPoint)
const path = `${os.tmpdir()}/rose.svg`

fs.writeFile(path, svg(data), (e) => {
  if (e) {
    console.error(e)
  } else {
    exec(`open -a "Google Chrome" ${path}`)
  }

  process.exit()
})
