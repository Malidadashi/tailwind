import React, { useState, useEffect } from "react";
import "./OfflineNotification.css"; // Optional: For styling
import { IoCloudOfflineOutline } from "react-icons/io5";

const OfflineNotification = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="offline-notification">
      <span>
        <IoCloudOfflineOutline />
      </span>
      OOPS!!!
      <span className="unhappyicon">:(</span> You are offline
    </div>
  );
};

export default OfflineNotification;
