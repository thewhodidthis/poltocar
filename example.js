'use strict'

const fs = require('fs')
const os = require('os')
const pol2car = require('./')

const { exec } = require('child_process')

const mag = 360
const mid = mag * 0.5

const ostmpdir = os.tmpdir()
const filepath = `${ostmpdir}/rose.svg`

const rad = deg => deg * (Math.PI / 180)
const svg = (points) => {
  // http://stackoverflow.com/questions/17455436/is-there-a-way-to-convert-json-to-an-svg-object
  const node = point => `<circle cx="${point.x}" cy="${point.y}" r="1" fill="white"/>`
  const head = `<svg width="${mag}px" height="${mag}px" version="1.1" xmlns="http://www.w3.org/2000/svg">\n`
  const back = `<rect width="${mag}px" height="${mag}px" fill="black"/>`
  const body = points.map(node).reduce((acc, val) => acc + val, '')
  const foot = '</svg>\n'

  return head + back + body + foot
}

const pairs = [
  [2, 3],
  [4, 1],
  [4, 3],
  [5, 2],
  [6, 4]
]

const s = Math.floor(Math.random() * pairs.length)
const [n, d] = pairs[s]
const k = n / d

const createPoint = (i) => {
  const space = mid - 2
  const angle = rad(i)
  const reach = Math.cos(k * angle)

  const { x, y } = pol2car(angle, reach)

  return {
    x: mid + (space * x),
    y: mid + (space * y)
  }
}

const points = Array.from(Array(mag * 2 * d)).map((v, i) => i * 0.5).map(createPoint)

fs.writeFile(filepath, svg(points), (error) => {
  if (error) {
    console.error(error)
  } else {
    exec(`open -a "Google Chrome" ${filepath}`)
  }

  process.exit()
})
