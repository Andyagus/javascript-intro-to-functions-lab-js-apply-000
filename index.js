function whisper(string) {
  return string.toLowerCase()
}

function shout(string) {
  return string.toUpperCase()
}

function logShout(string){
  console.log ("Hello".toUpperCase())
}

function logWhisper(string){
  console.log ("Hello".toLowerCase())
}

function sayHiToGrandma(stringy) {
  if (stringy.toLowerCase()===stringy) {
      return ("I can\'t hear you")
  }
  else if (stringy.toUpperCase()===stringy) {
      return ("YES INDEED!")
  }
}

sayHiToGrandma("hi")
