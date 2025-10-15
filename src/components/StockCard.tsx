import React, { useMemo } from "react";
import styles from "../styles";
import Sparkline from "./Sparkline";
import type { Stock } from "../types";

type StockCardProps = {
  stock: Stock;
  onRemove: (id: string) => void;
};

export default function StockCard({ stock, onRemove }: StockCardProps) {
  const { id, symbol, price, history } = stock;

  const { change, changePct, up } = useMemo(() => {
    if (history.length < 2) return { change: 0, changePct: 0, up: true };
    const first = history[0];
    const last = history[history.length - 1];
    const delta = last - first;
    const pct = first ? (delta / first) * 100 : 0;
    return { change: delta, changePct: pct, up: delta >= 0 };
  }, [history]);

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <strong>{symbol}</strong>
        <button style={styles.btnGhost} onClick={() => onRemove(id)}>
          Remove
        </button>
      </div>
      <div style={{ padding: 12, display: "grid", gap: 8 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700 }}>
            ${price.toFixed(2)}
          </div>
          <div style={{ color: up ? "#166534" : "#991b1b", fontWeight: 600 }}>
            {up ? "+" : ""}
            {change.toFixed(2)} ({changePct.toFixed(2)}%)
          </div>
        </div>
        <Sparkline points={history} height={48} />
      </div>
    </div>
  );
}
