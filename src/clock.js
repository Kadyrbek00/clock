import React, { useState, useEffect } from 'react';
import './clock.css'

const DigitalClock = () => {
    const [secondsRotation, setSecondsRotation] = useState(0);
    const [minutesRotation, setMinutesRotation] = useState(0);
    const [hoursRotation, setHoursRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const seconds = now.getSeconds();
            const minutes = now.getMinutes();
            const hours = now.getHours();

            setSecondsRotation((secondsRotation) => (secondsRotation + 4));
            const minutesRotation = (minutes / 60) * 360;
            const hoursRotation = (hours / 12) * 360;

            setMinutesRotation(minutesRotation);
            setHoursRotation(hoursRotation);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="clock">
            <div className="hand seconds-hand" style={{ transform: `rotate(${secondsRotation}deg)` }}></div>
            <div className="hand minutes-hand" style={{ transform: `rotate(${minutesRotation}deg)` }}></div>
            <div className="hand hours-hand" style={{ transform: `rotate(${hoursRotation}deg)` }}></div>
        </div>
    );
};

export default DigitalClock;
