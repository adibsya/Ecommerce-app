import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Check if there's a target date in localStorage
    let targetDate = localStorage.getItem('targetDate');

    if (!targetDate) {
      // If not, set a new target date 3 days from now and store it in localStorage
      targetDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);
      localStorage.setItem('targetDate', targetDate);
    } else {
      // Convert the stored target date to a number
      targetDate = Number(targetDate);
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // If the countdown is over, clear the interval
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        localStorage.removeItem('targetDate'); // Optionally remove the target date from localStorage
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
    </div>
  );
};

export default CountdownTimer;