import { useState, useEffect, useMemo, useRef } from 'react';

import { notifyMe } from '../utils/notify';
import formatTime from '../utils/formatTime';

export default function Timer({ play, running, seconds }) {
	const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, seconds));
	const [restTime, setRestTime] = useState(false)

	useEffect(() => {
		if (!running) {
			return;
		}
		const intervalID = setInterval(() => {
			setTime((prevTime) => new Date(prevTime.getTime() - 1000));
		}, 1000);

		return () => clearInterval(intervalID);
	}, [running]);

	useEffect(() => {
		if (time.getTime() === new Date(0, 0, 0, 0, 0, 0).getTime()) {
				play();
				notifyMe();
				setRestTime(true)
				const timeoutID = setTimeout(() => {
					setRestTime(false)
					setTime(new Date(0, 0, 0, 0, 0, seconds))
			}, 20000)
		}
		return;
		return () => clearTimeout(timeoutID);
	}, [time]);

	return restTime ? <h1>Rest Time</h1> : <h1>{formatTime(time)}</h1>;
}
