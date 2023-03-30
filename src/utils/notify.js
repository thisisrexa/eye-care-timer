const options = {
  title: 'وقت استراحته!',
  body: 'من که برنامه م خسته شدم چشات هنوز خسته نشدن؟ :( لطفا 20 ثانیه به فاصله 20 متری نگاه کن.',
  icon: 'timer.png',
};

let n;

function callNotify(title, body, icon) {
  n = new Notification(title, { body: body, icon: icon });
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

export { notifyMe };
