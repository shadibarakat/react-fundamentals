import React, { useState } from "react";
import styles from "../styles";

const PRESETS = [
  "AAPL",
  "MSFT",
  "NVDA",
  "AMZN",
  "GOOGL",
  "META",
  "TSLA",
  "AMD",
  "NFLX",
  "AVGO",
] as const;

type ControlsProps = {
  onAdd: (symbol: string) => void;
  onRefreshOnce: () => void;
  isAuto: boolean;
  onToggleAuto: () => void;
};

export default function Controls({
  onAdd,
  onRefreshOnce,
  isAuto,
  onToggleAuto,
}: ControlsProps) {
  const [symbol, setSymbol] = useState<string>(PRESETS[0]);

  function handleAddClick() {
    if (symbol.trim()) onAdd(symbol.trim());
  }

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h3 style={{ margin: 0 }}>Controls</h3>
      </div>
      <div style={{ padding: 12, display: "grid", gap: 10 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            style={styles.select}
          >
            {PRESETS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <button style={styles.btnPrimary} onClick={handleAddClick}>
            Add
          </button>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={styles.btnSecondary} onClick={onRefreshOnce}>
            Refresh Once
          </button>
          <button
            style={isAuto ? styles.btnPrimary : styles.btnGhost}
            onClick={onToggleAuto}
          >
            {isAuto ? "Stop Auto" : "Start Auto"}
          </button>
        </div>
      </div>
    </div>
  );
}
