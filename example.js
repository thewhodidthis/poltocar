'use strict'

const fs = require('fs')
const os = require('os')
const pol2car = require('./')

const { exec } = require('child_process')

const size = 360
const center = size * 0.5
const ostmpdir = os.tmpdir()
console.log(ostmpdir)
const filepath = `${ostmpdir}/rose.svg`

const toRad = deg => deg * (Math.PI / 180)
const toSvg = (points) => {
  // http://stackoverflow.com/questions/17455436/is-there-a-way-to-convert-json-to-an-svg-object
  const node = point => `<circle cx="${point.x}" cy="${point.y}" r="1" fill="purple"/>`
  const body = points.map(node).reduce((acc, val) => acc + val, '')
  const head = `<svg width="${size}px" height="${size}px" version="1.1" xmlns="http://www.w3.org/2000/svg">\n`
  const foot = '</svg>\n'

  return head + body + foot
}

const pairs = [
  [2, 3],
  [4, 1],
  [4, 3],
  [5, 2],
  [6, 4]
]

const seed = pairs[Math.floor(Math.random() * pairs.length)]
const n = seed[0]
const d = seed[1]
const k = n / d

const createPoint = (i) => {
  const angle = toRad(i)
  const radius = Math.cos(k * angle)
  const point = pol2car(angle, radius)
  const correction = center - 2

  return {
    x: center + (correction * point.x),
    y: center + (correction * point.y)
  }
}

const points = Array.from(Array(size * 2 * d)).map((v, i) => i * 0.5).map(createPoint)

fs.writeFile(filepath, toSvg(points), (error) => {
  if (error) {
    console.error(error)
  } else {
    exec(`open -a "Google Chrome" ${filepath}`)
  }

  process.exit()
})
