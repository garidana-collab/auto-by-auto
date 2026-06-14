import React, { useState, useMemo } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

// ── Sample data ──────────────────────────────────────────────
// 성격이 뚜렷이 다른 기종들을 연식별로 구성.
// 실제 서비스에서는 이 부분이 별도 데이터 파일/DB로 분리됩니다.
const BIKES = [
  {
    id: "grom-2022",
    maker: "Honda",
    model: "GROM",
    year: 2022,
    category: "미니/입문",
    displacement: 124,
    power: 9.7,
    torque: 10.8,
    weight: 102,
    seatHeight: 761,
    fuelEconomy: 62,
    tankCapacity: 6.0,
    topSpeed: 90,
    priceUsedKRW: 3200000,
  },
  {
    id: "grom-2017",
    maker: "Honda",
    model: "GROM",
    year: 2017,
    category: "미니/입문",
    displacement: 125,
    power: 9.6,
    torque: 11.0,
    weight: 104,
    seatHeight: 760,
    fuelEconomy: 60,
    tankCapacity: 5.5,
    topSpeed: 88,
    priceUsedKRW: 2500000,
  },
  {
    id: "mt03-2023",
    maker: "Yamaha",
    model: "MT-03",
    year: 2023,
    category: "네이키드",
    displacement: 321,
    power: 42,
    torque: 29.6,
    weight: 168,
    seatHeight: 780,
    fuelEconomy: 30,
    tankCapacity: 14.0,
    topSpeed: 180,
    priceUsedKRW: 5200000,
  },
  {
    id: "z900-2021",
    maker: "Kawasaki",
    model: "Z900",
    year: 2021,
    category: "네이키드",
    displacement: 948,
    power: 125,
    torque: 98.6,
    weight: 212,
    seatHeight: 820,
    fuelEconomy: 18,
    tankCapacity: 17.0,
    topSpeed: 240,
    priceUsedKRW: 9800000,
  },
  {
    id: "r1250gs-2022",
    maker: "BMW",
    model: "R1250GS",
    year: 2022,
    category: "어드벤처",
    displacement: 1254,
    power: 136,
    torque: 143,
    weight: 249,
    seatHeight: 850,
    fuelEconomy: 20,
    tankCapacity: 20.0,
    topSpeed: 220,
    priceUsedKRW: 19500000,
  },
  {
    id: "goldwing-2021",
    maker: "Honda",
    model: "Gold Wing",
    year: 2021,
    category: "투어러",
    displacement: 1833,
    power: 126,
    torque: 170,
    weight: 365,
    seatHeight: 745,
    fuelEconomy: 16,
    tankCapacity: 21.1,
    topSpeed: 200,
    priceUsedKRW: 28000000,
  },
  {
    id: "pcx125-2023",
    maker: "Honda",
    model: "PCX 125",
    year: 2023,
    category: "스쿠터",
    displacement: 125,
    power: 12.3,
    torque: 11.8,
    weight: 132,
    seatHeight: 764,
    fuelEconomy: 48,
    tankCapacity: 8.1,
    topSpeed: 105,
    priceUsedKRW: 2900000,
  },
  {
    id: "harley-iron883-2020",
    maker: "Harley-Davidson",
    model: "Iron 883",
    year: 2020,
    category: "크루저",
    displacement: 883,
    power: 50,
    torque: 70,
    weight: 256,
    seatHeight: 760,
    fuelEconomy: 22,
    tankCapacity: 12.5,
    topSpeed: 170,
    priceUsedKRW: 9500000,
  },
];

// 비교 항목 정의: 단위와 "높을수록 좋은지" 여부
const SPECS = [
  { key: "displacement", label: "배기량", unit: "cc", higherBetter: null },
  { key: "power", label: "최고출력", unit: "hp", higherBetter: true },
  { key: "torque", label: "토크", unit: "Nm", higherBetter: true },
  { key: "weight", label: "공차중량", unit: "kg", higherBetter: false },
  { key: "seatHeight", label: "시트고", unit: "mm", higherBetter: null },
  { key: "fuelEconomy", label: "연비", unit: "km/L", higherBetter: true },
  { key: "tankCapacity", label: "연료탱크", unit: "L", higherBetter: true },
  { key: "topSpeed", label: "최고속도", unit: "km/h", higherBetter: true },
  { key: "priceUsedKRW", label: "중고시세", unit: "만원", higherBetter: false },
];

// 레이더 차트에 쓸 항목 (0~100 정규화)
const RADAR_SPECS = ["power", "torque", "fuelEconomy", "topSpeed", "weight"];

const SERIES_COLORS = ["#FF5C00", "#1FB6A6", "#7C5CFF"];

function fmt(spec, value) {
  if (spec.key === "priceUsedKRW") return Math.round(value / 10000).toLocaleString();
  return value.toLocaleString();
}

export default function App() {
  const [selected, setSelected] = useState(["mt03-2023", "z900-2021"]);
  const [pickerOpen, setPickerOpen] = useState(false);

  const selectedBikes = useMemo(
    () => selected.map((id) => BIKES.find((b) => b.id === id)).filter(Boolean),
    [selected]
  );

  function toggleBike(id) {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev; // 최대 3대 비교
      return [...prev, id];
    });
  }

  // 각 항목별 최고/최저 (하이라이트용)
  const extremes = useMemo(() => {
    const out = {};
    for (const spec of SPECS) {
      const vals = selectedBikes.map((b) => b[spec.key]);
      out[spec.key] = { max: Math.max(...vals), min: Math.min(...vals) };
    }
    return out;
  }, [selectedBikes]);

  // 레이더 데이터: 전체 데이터 기준으로 0~100 정규화
  const radarData = useMemo(() => {
    return RADAR_SPECS.map((key) => {
      const spec = SPECS.find((s) => s.key === key);
      const all = BIKES.map((b) => b[key]);
      const min = Math.min(...all);
      const max = Math.max(...all);
      const norm = (v) => {
        const t = max === min ? 0.5 : (v - min) / (max - min);
        // 낮을수록 좋은 항목(무게)은 뒤집어서 표시
        return Math.round((spec.higherBetter === false ? 1 - t : t) * 100);
      };
      const row = { spec: spec.label };
      selectedBikes.forEach((b, i) => {
        row[`bike${i}`] = norm(b[key]);
      });
      return row;
    });
  }, [selectedBikes]);

  return (
    <div className="moto-root">
      <style>{css}</style>

      <header className="moto-header">
        <div className="eyebrow">제원 비교 · PROTOTYPE</div>
        <h1>
          어떤 <span className="hl">바이크</span>가
          <br />당신에게 맞을까
        </h1>
        <p className="sub">
          최대 3대까지 나란히 놓고, 숫자와 균형을 한눈에 비교합니다.
        </p>
      </header>

      {/* 선택된 바이크 칩 */}
      <div className="chips">
        {selectedBikes.map((b, i) => (
          <div className="chip" key={b.id} style={{ "--c": SERIES_COLORS[i] }}>
            <span className="chip-dot" />
            <span className="chip-name">
              {b.maker} {b.model}
              <em>'{String(b.year).slice(2)}</em>
            </span>
            <button className="chip-x" onClick={() => toggleBike(b.id)} aria-label="제거">
              ×
            </button>
          </div>
        ))}
        {selectedBikes.length < 3 && (
          <button className="chip chip-add" onClick={() => setPickerOpen((o) => !o)}>
            + 기종 추가
          </button>
        )}
      </div>

      {/* 기종 선택 패널 */}
      {pickerOpen && (
        <div className="picker">
          {BIKES.map((b) => {
            const isOn = selected.includes(b.id);
            const disabled = !isOn && selected.length >= 3;
            return (
              <button
                key={b.id}
                className={`picker-item ${isOn ? "on" : ""} ${disabled ? "off" : ""}`}
                onClick={() => !disabled && toggleBike(b.id)}
              >
                <span className="pi-cat">{b.category}</span>
                <span className="pi-name">
                  {b.maker} {b.model}
                </span>
                <span className="pi-year">{b.year} · {b.displacement}cc</span>
              </button>
            );
          })}
        </div>
      )}

      {selectedBikes.length === 0 ? (
        <div className="empty">비교할 기종을 추가해 주세요.</div>
      ) : (
        <>
          {/* 레이더 차트 */}
          <section className="panel">
            <div className="panel-label">성능 균형</div>
            <div className="radar-wrap">
              <ResponsiveContainer width="100%" height={340}>
                <RadarChart data={radarData} outerRadius="72%">
                  <PolarGrid stroke="#2a2a2e" />
                  <PolarAngleAxis
                    dataKey="spec"
                    tick={{ fill: "#9a9aa0", fontSize: 12 }}
                  />
                  <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                  {selectedBikes.map((b, i) => (
                    <Radar
                      key={b.id}
                      name={`${b.model} '${String(b.year).slice(2)}`}
                      dataKey={`bike${i}`}
                      stroke={SERIES_COLORS[i]}
                      fill={SERIES_COLORS[i]}
                      fillOpacity={0.18}
                      strokeWidth={2}
                    />
                  ))}
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="radar-note">
              전체 데이터 기준 상대 점수(0~100). 무게는 가벼울수록 높은 점수.
            </div>
          </section>

          {/* 제원 표 */}
          <section className="panel">
            <div className="panel-label">제원 비교</div>
            <div className="table-scroll">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th className="th-spec">항목</th>
                    {selectedBikes.map((b, i) => (
                      <th key={b.id} style={{ "--c": SERIES_COLORS[i] }}>
                        <span className="th-model">{b.model}</span>
                        <span className="th-year">'{String(b.year).slice(2)}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SPECS.map((spec) => (
                    <tr key={spec.key}>
                      <td className="td-spec">
                        {spec.label}
                        <span className="td-unit">{spec.unit}</span>
                      </td>
                      {selectedBikes.map((b) => {
                        const v = b[spec.key];
                        const ext = extremes[spec.key];
                        let cls = "";
                        if (spec.higherBetter !== null && ext.max !== ext.min) {
                          const isBest =
                            spec.higherBetter ? v === ext.max : v === ext.min;
                          const isWorst =
                            spec.higherBetter ? v === ext.min : v === ext.max;
                          if (isBest) cls = "best";
                          else if (isWorst) cls = "worst";
                        }
                        return (
                          <td key={b.id} className={`td-val ${cls}`}>
                            {fmt(spec, v)}
                            {cls === "best" && <span className="badge">▲</span>}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="legend-row">
              <span className="lg best">▲ 항목별 우위</span>
              <span className="lg worst">상대적 열위</span>
            </div>
          </section>
        </>
      )}

      <footer className="moto-foot">
        프로토타입 · 데이터는 예시이며 실제 제원과 다를 수 있습니다
      </footer>
    </div>
  );
}

const css = `
.moto-root {
  --bg: #121214;
  --panel: #1a1a1e;
  --line: #2a2a2e;
  --text: #ececf0;
  --muted: #9a9aa0;
  --orange: #FF5C00;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: 28px 20px 60px;
  -webkit-font-smoothing: antialiased;
}
.moto-header { margin-bottom: 22px; }
.eyebrow {
  font-size: 11px; letter-spacing: 0.22em; font-weight: 700;
  color: var(--orange); text-transform: uppercase; margin-bottom: 14px;
}
.moto-header h1 {
  font-size: clamp(30px, 7vw, 46px); line-height: 1.04; font-weight: 800;
  letter-spacing: -0.02em; margin: 0 0 12px;
}
.moto-header h1 .hl { color: var(--orange); }
.sub { color: var(--muted); font-size: 15px; margin: 0; }

.chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
.chip {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 999px; padding: 7px 8px 7px 13px;
  font-size: 13px; font-weight: 600;
}
.chip-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--c); }
.chip-name em { font-style: normal; color: var(--muted); margin-left: 3px; font-weight: 500; }
.chip-x {
  border: none; background: transparent; color: var(--muted);
  font-size: 18px; line-height: 1; cursor: pointer; padding: 0 4px;
}
.chip-x:hover { color: var(--text); }
.chip-add {
  cursor: pointer; color: var(--orange); border-style: dashed;
  border-color: var(--orange); padding: 7px 14px;
}
.chip-add:hover { background: rgba(255,92,0,0.08); }

.picker {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 8px; margin-bottom: 18px;
}
.picker-item {
  text-align: left; background: var(--panel); border: 1px solid var(--line);
  border-radius: 12px; padding: 12px; cursor: pointer; display: flex;
  flex-direction: column; gap: 3px; transition: border-color .15s, background .15s;
}
.picker-item:hover { border-color: #444; }
.picker-item.on { border-color: var(--orange); background: rgba(255,92,0,0.07); }
.picker-item.off { opacity: 0.35; cursor: not-allowed; }
.pi-cat { font-size: 10px; letter-spacing: 0.1em; color: var(--orange); font-weight: 700; text-transform: uppercase; }
.pi-name { font-size: 14px; font-weight: 700; }
.pi-year { font-size: 12px; color: var(--muted); }

.empty {
  text-align: center; color: var(--muted); padding: 60px 0;
  border: 1px dashed var(--line); border-radius: 16px;
}

.panel {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 18px; padding: 18px 18px 20px; margin-bottom: 16px;
}
.panel-label {
  font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--muted); font-weight: 700; margin-bottom: 8px;
}
.radar-wrap { margin: 0 -8px; }
.radar-note { font-size: 11px; color: var(--muted); margin-top: 6px; text-align: center; }

.table-scroll { overflow-x: auto; margin: 0 -4px; }
.spec-table { width: 100%; border-collapse: collapse; font-size: 14px; }
.spec-table th, .spec-table td {
  padding: 11px 10px; text-align: right; border-bottom: 1px solid var(--line);
  white-space: nowrap;
}
.th-spec, .td-spec { text-align: left; }
.spec-table thead th { vertical-align: bottom; }
.th-model { display: block; font-weight: 800; font-size: 15px; color: var(--c); }
.th-year { display: block; font-size: 11px; color: var(--muted); font-weight: 500; }
.td-spec { color: var(--muted); font-weight: 600; }
.td-unit { display: block; font-size: 11px; color: #66666c; font-weight: 400; }
.td-val { font-variant-numeric: tabular-nums; font-weight: 600; }
.td-val.best { color: var(--orange); font-weight: 800; }
.td-val.worst { color: #66666c; }
.badge { font-size: 9px; margin-left: 4px; vertical-align: middle; }

.legend-row { display: flex; gap: 16px; margin-top: 12px; font-size: 11px; }
.lg { color: var(--muted); }
.lg.best { color: var(--orange); }

.moto-foot {
  text-align: center; color: #55555a; font-size: 11px; margin-top: 24px;
}
`;
