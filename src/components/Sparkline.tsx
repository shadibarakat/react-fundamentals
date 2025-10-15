import React, { useMemo } from "react";

type SparklineProps = {
  points?: number[];
  width?: number;
  height?: number;
};

export default function Sparkline({
  points = [],
  width = 300,
  height = 48,
}: SparklineProps) {
  const { path, min, max } = useMemo(
    () => buildPath(points, width, height),
    [points, width, height]
  );
  const up =
    points.length > 1 ? points[points.length - 1] - points[0] >= 0 : true;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height}>
      <path
        d={path}
        fill="none"
        stroke={up ? "#16a34a" : "#dc2626"}
        strokeWidth={2}
      />
      {points.length > 0 && (
        <>
          <circle
            cx={2}
            cy={scale(points[0], min, max, height)}
            r={2}
            fill="#6b7280"
          />
          <circle
            cx={width - 2}
            cy={scale(points[points.length - 1], min, max, height)}
            r={2}
            fill="#6b7280"
          />
        </>
      )}
    </svg>
  );
}

function buildPath(points: number[], width: number, height: number) {
  if (!points || points.length === 0) return { path: "", min: 0, max: 1 };
  const min = Math.min(...points);
  const max = Math.max(...points);
  const stepX = points.length > 1 ? width / (points.length - 1) : width;
  let d = "";
  points.forEach((p, i) => {
    const x = i * stepX;
    const y = scale(p, min, max, height);
    d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
  });
  return { path: d, min, max };
}

function scale(value: number, min: number, max: number, height: number) {
  if (max === min) return height / 2;
  return height - ((value - min) / (max - min)) * height;
}
