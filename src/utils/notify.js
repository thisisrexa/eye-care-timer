const options = {
  title: 'Rest Time!',
  body: 'Please look into the far distance for twenty seconds.',
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
