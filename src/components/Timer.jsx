import { useState, useEffect, useMemo, useRef } from 'react';

import { notifyMe } from '../utils/notify';
import formatTime from '../utils/formatTime';

export default function Timer({ play, running, seconds }) {
	const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, seconds));

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
			setTime(new Date(0, 0, 0, 0, 0, seconds));
		}

		return;
	}, [time]);

	return <h1>{formatTime(time)}</h1>;
}
