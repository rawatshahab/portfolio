import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash (anchor), scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    }
    // Note: If there is a hash, the browser usually handles the scroll automatically.
    // However, if we needed to force it, we could do it here.
  }, [pathname, hash]);

  return null;
}