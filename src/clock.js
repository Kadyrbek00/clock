import React, { useState, useEffect } from 'react';
import './clock.css'

const DigitalClock = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(rotation => rotation + 6);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="clock">
            <div className="clock-hand" style={{ transform: `rotate(${rotation}deg)` }}></div>
        </div>
    );
};

export default DigitalClock;
