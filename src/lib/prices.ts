import type { Stock } from "../types";


export function seedStocks(symbols: string[]): Stock[] {
return symbols.map((sym) => {
const start = +(100 + Math.random() * 200).toFixed(2);
return {
id: `${sym}-${Math.random().toString(36).slice(2, 8)}`,
symbol: sym,
price: start,
history: Array.from({ length: 24 }, (_, i) => +(start + (i - 12) * 0.1).toFixed(2)),
};
});
}


export function nextTick(stock: Stock): Stock {
const drift = 0.02 * (Math.random() - 0.5);
const shock = (Math.random() - 0.5) * 0.6;
const next = Math.max(1, +(stock.price + drift + shock).toFixed(2));
const nextHist = [...stock.history.slice(-47), next];
return { ...stock, price: next, history: nextHist };
}