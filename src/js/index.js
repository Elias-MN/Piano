let keyPiano = {
  'do': 'src/audio/1.mp3',
  'do#': 'src/audio/a.mp3',
  're': 'src/audio/2.mp3',
  're#': 'src/audio/b.mp3',
  'mi': 'src/audio/3.mp3',
  'fa': 'src/audio/4.mp3',
  'fa#': 'src/audio/c.mp3',
  'sol': 'src/audio/5.mp3',
  'sol#': 'src/audio/d.mp3',
  'la': 'src/audio/6.mp3',
  'la#': 'src/audio/e.mp3',
  'si': 'src/audio/7.mp3'
}


document.addEventListener('keydown', (event) => {

  let keyDown = event.key.toLowerCase();

  switch (keyDown) {
    case "q":
      playPiano("do");
    break;
    case "2":
      playPiano("do#");
    break;
    case "w":
      playPiano("re")
    break;
    case "3":
      playPiano("re#")
    break;
    case "e":
      playPiano("mi")
    break;
    case "r":
      playPiano("fa")
    break;
    case "5":
      playPiano("fa#")
    break;
    case "t":
      playPiano("sol")
    break;
    case "6":
      playPiano("sol#")
    break;
    case "y":
      playPiano("la")
    break;
    case "7":
      playPiano("la#")
    break;
    case "u":
      playPiano("si")
    break;
  }
});

function playPiano(key){
  let audio = new Audio(keyPiano[key]);
  audio.play();
  let keyElement = document.getElementById(key);
  keyElement.classList.add("active");
  setTimeout(() => {
    keyElement.classList.remove("active");
  }, 250);
}
