import React, { useEffect, useState } from 'react';
import { appMeta, features, checklist, cta } from './config.js';
import { fetchHealth } from './services/apiClient.js';

function FeatureCard({ item }) {
  return (
    <li style={{ padding: '8px 0' }}>
      <strong>{item.title}</strong> — <em>{item.status}</em>
    </li>
  );
}

export default function App() {
  const [health, setHealth] = useState({ status: 'unknown' });

  useEffect(() => {
    fetchHealth().then(setHealth);
  }, []);

  return (
    <main style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: '24px', lineHeight: 1.5 }}>
      <header style={{ marginBottom: '24px' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.08em', color: '#555' }}>product skeleton</p>
        <h1 style={{ margin: '4px 0' }}>{appMeta.name}</h1>
        <p style={{ maxWidth: '720px', color: '#333' }}>{appMeta.tagline}</p>
      </header>

      <section style={{ marginBottom: '20px' }}>
        <h2>Launch checklist</h2>
        <ul>
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Feature slices</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {features.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Service health</h2>
        <p>Status: <strong>{health.status}</strong></p>
        {health.detail && <p style={{ color: '#555' }}>Details: {health.detail}</p>}
      </section>

      <footer style={{ marginTop: '32px', padding: '16px 0', borderTop: '1px solid #eee' }}>
        <strong>CTA:</strong> {cta}
      </footer>
    </main>
  );
}
