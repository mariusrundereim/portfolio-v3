import { useEffect, useState } from "react";

function Countdown({ time, onCountdownEnd }) {
  const [countdown, setCountdown] = useState(time);

  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      onCountdownEnd();
    }
  }, [countdown, onCountdownEnd]);

  return <div>{countdown}</div>;
}

export default Countdown;
