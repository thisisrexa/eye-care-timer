import { useRef, useEffect } from 'react';
import { notifyMe, n } from '../utils/notify';

export default function Ding({ endOfTime, reset, timer, show }) {
  // 20s
  useEffect(() => {
    if (endOfTime) {
      notifyMe();
      setTimeout(() => {
        n.close()
        reset();
      }, 20000);
    }
  }, [endOfTime]);

  if (endOfTime) {
    return (
      <>
        <h2>Rest Time</h2>
      </>
    );
  }

  return <>{show && <h2>{timer}</h2>}</>;
}
