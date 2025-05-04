import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Router";

function AppWithLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <span className="loading loading-bars loading-xl text-secondary"></span>
        <span className="loading loading-bars loading-xl text-secondary"></span>
        <span className="loading loading-bars loading-xl text-secondary"></span>
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWithLoader />
  </StrictMode>
);
