let keyPiano = {
  'do': 'audio/Do.mp3'
}

document.addEventListener('keydown', (event) => {
  // <div class="key white-key" data-key="do"></div>
  playPiano(event.key);
})

let audio = new Audio();
function playPiano(key){
  // 1º option
  //let audio = new Audio(keyPiano[key]);
  //audio.play();
  // 2º option
  //audio.src = keyPiano[key].source;
  //audio.play();
}
