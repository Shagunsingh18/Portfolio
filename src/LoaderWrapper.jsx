
import React, { useEffect, useState } from "react";
import Loader from "./loader.jsx";

export default function LoaderWrapper({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // 1️⃣  If DOM is already parsed, hide immediately
    if (document.readyState === "interactive" || document.readyState === "complete") {
      setReady(true);
      return;             // no listener needed
    }

    // 2️⃣  Otherwise, wait for DOMContentLoaded
    const done = () => setReady(true);
    document.addEventListener("DOMContentLoaded", done);

    // 3️⃣  Safety timeout: hide after 5 s regardless
    const t = setTimeout(done, 5000);

    return () => {
      document.removeEventListener("DOMContentLoaded", done);
      clearTimeout(t);
    };
  }, []);

  return ready ? children : <Loader />;
}
