import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Legend,
} from 'recharts'

import { SPECS, COLORS, fmtVal, getSpecScore } from '../data/specs'
import { isKnownPrice, isKnownValue } from '../lib/bikeDisplay'

export default function CompareView({
  comparedBikes,
  radarData,
  extremes,
  onToggleCompare,
}) {
  return (
    <>
      <div className="chips-bar">
        {comparedBikes.length === 0 ? (
          <span className="chips-hint">탐색 탭에서 기종을 추가해 보세요</span>
        ) : (
          comparedBikes.map((b, i) => (
            <div key={b.id} className="chip" style={{ '--c': COLORS[i] }}>
              <span className="chip-dot" />
              <span className="chip-label">
                {b.model} <em>&apos;{String(b.year).slice(2)}</em>
              </span>
              <button className="chip-x" onClick={() => onToggleCompare(b.id)}>×</button>
            </div>
          ))
        )}
        {comparedBikes.length > 0 && comparedBikes.length < 3 && (
          <span className="chips-more">최대 {3 - comparedBikes.length}개 더 추가 가능</span>
        )}
      </div>

      {comparedBikes.length === 0 ? (
        <div className="main-empty">
          <div className="empty-icon">🏍</div>
          <div className="empty-text">비교할 기종을 추가해 주세요</div>
          <div className="empty-sub">탐색 탭에서 기종 카드의 + 비교 버튼을 누르세요</div>
        </div>
      ) : (
        <>
          <section className="panel">
            <div className="panel-label">성능 균형</div>
            <ResponsiveContainer width="100%" height={320}>
              <RadarChart data={radarData} outerRadius="70%">
                <PolarGrid stroke="#2a2a2e" />
                <PolarAngleAxis
                  dataKey="spec"
                  tick={{ fill: '#9a9aa0', fontSize: 12 }}
                />
                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                {comparedBikes.map((b, i) => (
                  <Radar
                    key={b.id}
                    name={`${b.model} '${String(b.year).slice(2)}`}
                    dataKey={`bike${i}`}
                    stroke={COLORS[i]}
                    fill={COLORS[i]}
                    fillOpacity={0.18}
                    strokeWidth={2}
                  />
                ))}
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </RadarChart>
            </ResponsiveContainer>
            <div className="radar-note">
              전체 데이터 기준 상대 점수(0–100) · 무게는 가벼울수록 높은 점수
            </div>
          </section>

          <section className="panel">
            <div className="panel-label">제원 비교</div>
            <div className="table-scroll">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th className="th-spec">항목</th>
                    {comparedBikes.map((b, i) => (
                      <th key={b.id} style={{ '--c': COLORS[i] }}>
                        <span className="th-model">{b.model}</span>
                        <span className="th-year">&apos;{String(b.year).slice(2)}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SPECS.map(spec => (
                    <tr key={spec.key}>
                      <td className="td-spec">
                        {spec.label}
                        <span className="td-unit">{spec.unit}</span>
                      </td>
                      {comparedBikes.map(b => {
                        const v = getSpecScore(spec, b)
                        const ext = extremes[spec.key]
                        let cls = ''
                        const known = spec.key === 'priceKRW' ? isKnownPrice(v) : isKnownValue(v)
                        if (known && spec.higherBetter !== null && ext.max !== null && ext.max !== ext.min) {
                          if (spec.higherBetter ? v === ext.max : v === ext.min) cls = 'best'
                          else if (spec.higherBetter ? v === ext.min : v === ext.max) cls = 'worst'
                        }
                        return (
                          <td key={b.id} className={`td-val ${cls}`}>
                            {fmtVal(spec, b[spec.key], b)}
                            {cls === 'best' && <span className="badge">▲</span>}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="legend-row">
              <span className="lg best">▲ 항목별 우위</span>
              <span className="lg">상대적 열위 (흐림)</span>
            </div>
          </section>
        </>
      )}
    </>
  )
}
