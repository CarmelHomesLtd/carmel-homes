import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function PixelTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof fbq !== "undefined") {
      const pathsWithForms = ["/carmel-homes-contracting", "/contracting-form"];
      if (pathsWithForms.includes(location.pathname)) {
        const eventID = uuidv4();
        
        fbq("track", "Lead", {}, {eventID});

        fetch("/.netlify/functions/capi", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event_name: "Lead",
            event_id: eventID,
            event_source_url: window.location.href
          }),
        });
      }
    }
  }, [location]);

  return null; // This component doesn’t render anything
}
