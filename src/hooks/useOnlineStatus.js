import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // var onlineStatus = true
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    addEventListener("online", () => {
      setOnlineStatus(true);
    });

    addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, [onlineStatus]);

  return onlineStatus; // true --> online , false --> offline
};

export default useOnlineStatus;
