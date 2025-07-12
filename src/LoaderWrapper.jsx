// LoaderWrapper.jsx
import React, { useEffect, useState } from "react";
import Loader from "./loader.jsx";           // ← your existing component

export default function LoaderWrapper({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    /** 1️⃣  Hide as soon as DOM is parsed (fast on mobile) */
    const done = () => setReady(true);
    document.addEventListener("DOMContentLoaded", done);

    /** 2️⃣  Safety timeout: force‑hide after 5 s */
    const t = setTimeout(done, 5000);

    /** Cleanup */
    return () => {
      document.removeEventListener("DOMContentLoaded", done);
      clearTimeout(t);
    };
  }, []);

  /** Show loader until we're ready */
  if (!ready) return <Loader />;
  return children;
}
