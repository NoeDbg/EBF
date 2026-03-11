'use client';

import { useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { fundSeries } from '@/lib/site-data';

const periods = ['Week', 'Month', 'Year'];

export function FundTrackerSection() {
  const [period, setPeriod] = useState('Week');

  return (
    <section id="fund-tracker" className="section container">
      <h2>Fund Tracker</h2>
      <p className="section-intro">Transparent overview of portfolio evolution and current positions.</p>
      <div className="segmented">
        {periods.map((entry) => (
          <button key={entry} className={period === entry ? 'active' : ''} onClick={() => setPeriod(entry)}>
            {entry}
          </button>
        ))}
      </div>
      <div className="chart-card">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={fundSeries}>
            <XAxis dataKey="date" />
            <YAxis domain={[99, 106]} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#c9a227" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="muted">You can later connect CSV/API imports to Sanity documents (fundEntry).</p>
    </section>
  );
}
