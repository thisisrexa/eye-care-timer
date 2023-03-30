import { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';

import Timer from './components/Timer';
import { notifyMe } from './utils/notify';

import notifySfx from '/notify.ogg';
import './App.css';

export default function App() {
  const [play] = useSound(notifySfx);
  const [running, setRunning] = useState(false);

  const handleToggleRunning = () => {
    running ? setRunning(false) : (setRunning(true), play(), notifyMe());
  };

  return (
    <div className='App'>
      <button onClick={handleToggleRunning}>
        {running ? (
          <Timer play={play} running={running} seconds={20 * 60} />
        ) : (
          'Start'
        )}
      </button>
    </div>
  );
}
