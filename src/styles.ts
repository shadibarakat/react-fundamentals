// src/styles.ts
const styles = {
    page: {
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: "#0f172a",
      color: "#f1f5f9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
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
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "1200px",
    },
    title: { fontSize: "1.5rem", fontWeight: 700 },
    metrics: { opacity: 0.8, fontSize: "0.95rem" },
    button: {
      backgroundColor: "#3b82f6",
      color: "#fff",
      border: "none",
      padding: "0.55rem 0.9rem",
      borderRadius: "0.4rem",
      cursor: "pointer",
    },
  };
  
  export default styles; // <-- important
  