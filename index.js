
function createButton() {
  const btn = document.createElement('div');
  btn.innerText = 'ENABLE FULLSCREEN';
  btn.classList.add('btn-fullscreen');
  
  return btn;
};

function startApp(mediaPlayer, parentPlayer) {
  let isFull = false;
  
  const btn = createButton();

  mediaPlayer.appendChild(btn);

  btn.onclick = function() {
    if (!isFull ) {
      isFull = true;
      btn.innerText = 'DISABLE FULLSCREEN';
      document.body.appendChild(mediaPlayer);
      mediaPlayer.style.position = 'fixed';
      document.body.style.overflow = 'hidden';
    } else {
      isFull = false;
      btn.innerText = 'ENABLE FULLSCREEN';
      mediaPlayer.style.position = 'relative';
      document.body.style.overflow = 'auto';
      parentPlayer.appendChild(mediaPlayer);
    }
  };

};  

function relaodPage() {
  const reload = location.reload();

  return reload;
}

const catchVideoChange = setInterval(() => {
  const next = document.getElementById('go-to-next-item');
  const prev = document.getElementById('go-to-previous-item');

  next.addEventListener('click', relaodPage);
  prev.addEventListener('click', relaodPage);

}, 100)

const catchPlayer = setInterval(() => {
  const mediaPlayer = document.querySelector('.video-player--container--YDQRW');
  const parentPlayer = mediaPlayer.parentNode;
  
  if (mediaPlayer) {
    startApp(mediaPlayer, parentPlayer);
    clearInterval(catchPlayer);
  };
}, 1);