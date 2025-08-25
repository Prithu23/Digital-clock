"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [time, setTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(true); // 🌗 theme toggle state

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // choose styles based on theme
  const theme = darkMode
    ? {
        backgroundColor: "#000000",
        color: "#00ffcc",
      }
    : {
        backgroundColor: "#ffffff",
        color: "#222222",
      };

  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
        fontFamily: "monospace",
        fontSize: "3rem",
        ...theme, // merge theme styles here
      }}
    >
      <section style={{ textAlign: "center" }}>
        {/* ⏰ clock with seconds */}
        <div suppressHydrationWarning style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
        </div>

        {/* 📅 date */}
        <div style={{ fontSize: "1.5rem", opacity: 0.8 }}>
          {time.toLocaleDateString([], {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </div>

        {/* 🌗 theme toggle button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            marginTop: "1.5rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: darkMode ? "#222" : "#ddd",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          Switch to {darkMode ? "Day" : "Night"} Mode
        </button>
      </section>
    </main>
  );
}
