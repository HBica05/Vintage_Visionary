function toggleAudio() {
  const bgm = document.getElementById('bgm');
  const btn = document.getElementById('audioToggle');
  if (bgm.paused) {
    bgm.play();
    btn.textContent = '⏸ PAUSE';
  } else {
    bgm.pause();
    btn.textContent = '▶ PLAY';
  }
}