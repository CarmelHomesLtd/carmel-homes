import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PixelTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof fbq !== "undefined") {
      const pathsWithForms = ["/carmel-homes-contracting", "/contracting-form"];
      if (pathsWithForms.includes(location.pathname)) {
        fbq("track", "Lead");
      }
    }
  }, [location]);

  return null; // This component doesn’t render anything
}
