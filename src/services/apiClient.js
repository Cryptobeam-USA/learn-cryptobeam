const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
const token = import.meta.env.VITE_API_TOKEN || '';

export async function fetchHealth() {
  if (!baseUrl) {
    return { status: 'unknown', detail: 'Set VITE_API_BASE_URL to enable live checks' };
  }
  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, '')}/health`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    return { status: 'error', detail: err.message };
  }
}
