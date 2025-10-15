import React from "react";
import styles from "../styles";

type HeaderProps = {
  totals: { count: number; avg: string };
  isAuto: boolean;
  onToggleAuto: () => void;
  onRefreshOnce: () => void;
};

export default function Header({
  totals,
  isAuto,
  onToggleAuto,
  onRefreshOnce,
}: HeaderProps) {
  return (
    <div style={styles.header}>
      <div>
        <h1 style={{ margin: 0 }}>Stock Tracker (Simulated)</h1>
        <p style={{ margin: "4px 0 0", opacity: 0.8 }}>
          CSC 436 – Project 2 · Component-based React
        </p>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span style={styles.badgeOk}>Tracked: {totals.count}</span>
        <span style={styles.badgeMuted}>Avg: ${totals.avg}</span>
        <button style={styles.btnSecondary} onClick={onRefreshOnce}>
          Refresh
        </button>
        <button
          style={isAuto ? styles.btnPrimary : styles.btnGhost}
          onClick={onToggleAuto}
        >
          {isAuto ? "Auto: ON" : "Auto: OFF"}
        </button>
      </div>
    </div>
  );
}
