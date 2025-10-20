import type { CSSProperties } from "react";

const styles = {
    page: {
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: "#0f172a",
      color: "#f1f5f9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "2rem",
    },
  
    grid: {
      display: "grid",
      gridTemplateColumns: "300px 1fr",
      gap: "2rem",
      width: "100%",
      maxWidth: "1200px",
      marginTop: "1.5rem",
    },
  
    footer: {
      marginTop: "3rem",
      paddingTop: "1rem",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: "0.9rem",
      opacity: 0.8,
      textAlign: "center" as const,
    },
  
    card: {
      backgroundColor: "#1e293b",
      borderRadius: "0.75rem",
      padding: "1rem",
      boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    },
  
    button: {
      backgroundColor: "#3b82f6",
      color: "#fff",
      border: "none",
      padding: "0.6rem 1rem",
      borderRadius: "0.4rem",
      cursor: "pointer",
      fontSize: "0.95rem",
      transition: "background 0.2s ease-in-out",
    },
  
    buttonDisabled: {
      backgroundColor: "#475569",
      cursor: "not-allowed",
    },
  };