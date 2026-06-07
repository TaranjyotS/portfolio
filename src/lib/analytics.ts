export const trackPageView = () => {
  const enabled = import.meta.env.VITE_ENABLE_ANALYTICS === "true";
  if (!enabled || typeof window === "undefined") return;
  const payload = { path: window.location.pathname + window.location.hash, title: document.title, timestamp: new Date().toISOString() };
  window.dispatchEvent(new CustomEvent("portfolio-page-view", { detail: payload }));
};
