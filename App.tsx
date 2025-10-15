import React from "react";
import Header from "./components/Header";
import Controls from "./components/Controls";
import StockList from "./components/StockList";
import styles from "./styles";
import prices from "./lib/prices"; // if you exported default; else use { prices }

export type Stock = {
  id: string;
  symbol: string;
  price: number;
  history: number[];
};

export default function App() {
  const [stocks, setStocks] = useState<Stock[]>(
    seedStocks(["AAPL", "MSFT", "NVDA"])
  );
  const [isAuto, setIsAuto] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const totals = useMemo(() => {
    const count = stocks.length;
    const avg = count ? stocks.reduce((s, x) => s + x.price, 0) / count : 0;
    return { count, avg: avg.toFixed(2) };
  }, [stocks]);

  function handleRefreshOnce() {
    setStocks((prev) => prev.map(nextTick));
  }

  function handleToggleAuto() {
    setIsAuto((v) => !v);
  }

  function handleAdd(symbol: string) {
    setStocks((prev) => {
      if (prev.some((s) => s.symbol.toUpperCase() === symbol.toUpperCase()))
        return prev;
      return [...prev, seedStocks([symbol.toUpperCase()])[0]];
    });
  }

  function handleRemove(id: string) {
    setStocks((prev) => prev.filter((s) => s.id !== id));
  }

  useEffect(() => {
    if (isAuto) {
      intervalRef.current = window.setInterval(() => {
        setStocks((prev) => prev.map(nextTick));
      }, 1000);
    }
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isAuto]);

  return (
    <div style={styles.page}>
      <Header
        totals={totals}
        isAuto={isAuto}
        onToggleAuto={handleToggleAuto}
        onRefreshOnce={handleRefreshOnce}
      />

      <div style={styles.grid}>
        <Controls
          onAdd={handleAdd}
          onRefreshOnce={handleRefreshOnce}
          isAuto={isAuto}
          onToggleAuto={handleToggleAuto}
        />
        <StockList stocks={stocks} onRemove={handleRemove} />
      </div>

      <footer style={styles.footer}>
        <small>
          React Fundamentals · Components · State · Props · Events · (No
          external APIs)
        </small>
      </footer>
    </div>
  );
}
