const options = {
  title: 'وقت استراحته!',
  body: 'داش خودتو به کشتن میدی 3: بیست ثانیه به فاصله ی شش متری نگاه کن.',
  icon: 'timer.png',
  song: 'notify.ogg',
};

let n;

function callNotify(title, body, icon) {
  n = new Notification(title, { body: body, icon: icon });
  const audioElement = new Audio(options.song);
  audioElement.addEventListener('canplaythrough', (event) => {
    /* the audio is now playable; play it if permissions allow */
    audioElement.play();
    console.log('Can play');
  });
}

function notifyMe() {
  if (!('Notification' in window)) {
    alert('This browser does not support Desktop notifications');
  }

  if (Notification.permission === 'granted') {
    callNotify(options.title, options.body, options.icon);
    return;
  }

  if (Notification.permission !== 'denied') {
    Notification.requestPermission((permission) => {
      if (permission === 'granted') {
        callNotify(options.title, options.body, options.icon);
      }
    });
    return;
  }
}

export { notifyMe, n };
