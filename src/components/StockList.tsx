import React from "react";
import styles from "../styles";
import StockCard from "./StockCard";
import type { Stock } from "../types";

type StockListProps = {
  stocks: Stock[];
  onRemove: (id: string) => void;
};

export default function StockList({ stocks, onRemove }: StockListProps) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {stocks.length === 0 ? (
        <div style={styles.card}>
          <div style={{ padding: 12, opacity: 0.7 }}>
            No stocks yet. Add some from Controls.
          </div>
        </div>
      ) : (
        stocks.map((s) => (
          <StockCard key={s.id} stock={s} onRemove={onRemove} />
        ))
      )}
    </div>
  );
}
