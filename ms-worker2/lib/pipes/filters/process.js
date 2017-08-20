export function processMsg () {
  console.log(`I'm number ${process.env.BOILER_TAG}`)
  return {solvedBy: process.env.BOILER_TAG}
}
