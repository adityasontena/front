import React, { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h1>{theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
