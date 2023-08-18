function startApp(mediaPlayer, parentPlayer) {
  function buttonEvents() {
    const btn = document.createElement('button');
    btn.textContent = 'ENABLE FULLSCREEN';
    btn.classList.add('btn-fullscreen');
    mediaPlayer.appendChild(btn);

    let isFull = false;

    btn.onclick = function() {
      if (!isFull) {
        isFull = true;
        document.body.appendChild(mediaPlayer);
        mediaPlayer.style.position = 'fixed';
      } else {
        isFull = false;
        mediaPlayer.style.position = 'relative';
        mediaPlayer.classList.add('no-fullscreen')
        parentPlayer.appendChild(mediaPlayer)
      }
    }
  }
  buttonEvents();
};

  const catchPlayer = setInterval(() => {
    const mediaPlayer = document.querySelector('.video-viewer--container--23VX7');
    const parentPlayer = mediaPlayer.parentNode;
  
    if(mediaPlayer) {
      clearInterval(catchPlayer);
      startApp(mediaPlayer, parentPlayer);
    }
  }, 1);

