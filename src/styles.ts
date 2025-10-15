import type { CSSProperties } from "react";

const styles = {
    page: {
    maxWidth: 980,
    margin: "32px auto",
    padding: "0 16px 48px",
    display: "grid",
    gap: 12,
    } as React.CSSProperties,
    header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    background: "#fafafa",
    } as React.CSSProperties,
    grid: {
    display: "grid",
    gridTemplateColumns: "360px 1fr",
    gap: 12,
    alignItems: "start",
    } as React.CSSProperties,
    card: {
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    background: "white",
    overflow: "hidden",
    } as React.CSSProperties,
    cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderBottom: "1px solid #e5e7eb",
    background: "#fafafa",
    } as React.CSSProperties,
    btnPrimary: {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid #1f2937",
    background: "#111827",
    color: "white",
    cursor: "pointer",
    } as React.CSSProperties,
    btnSecondary: {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid #d1d5db",
    background: "white",
    cursor: "pointer",
    } as React.CSSProperties,
    btnGhost: {
    padding: "8px 12px",
    borderRadius: 10,
    border: "1px solid #e5e7eb",
    background: "white",
    cursor: "pointer",
    } as React.CSSProperties,
    badgeOk: {
    background: "#e6f4ea",
    color: "#1b5e20",
    padding: "6px 10px",
    borderRadius: 999,
    fontWeight: 700,
    fontSize: 12,
    } as React.CSSProperties,
    badgeMuted: {
    background: "#eef2ff",
    color: "#3730a3",
    padding: "6px 10px",
    borderRadius: 999,
    fontWeight: 700,
    fontSize: 12,
    } as React.CSSProperties,
    select: {
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #d1d5db",
    minWidth: 140,
    } as React.CSSProperties,
    footer: {
    marginTop: 8,
    textAlign: "center",
    opacity: 0.7,
    } as React.CSSProperties,
    };
    
    
    export default styles;