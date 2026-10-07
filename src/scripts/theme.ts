type Theme = 'light' | 'dark';

const storageKey = 'portfolio-theme';
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let preference: Theme | null = null;
let buttonListeners: AbortController | undefined;

try {
  const saved = localStorage.getItem(storageKey);
  if (saved === 'light' || saved === 'dark') preference = saved;
} catch {
  // The toggle still works when browser storage is unavailable.
}

function getTheme(): Theme {
  return preference || (systemTheme.matches ? 'dark' : 'light');
}

function applyTheme(): void {
  const theme = getTheme();
  document.documentElement.dataset.theme = theme;
  const button = document.getElementById('theme-toggle');
  if (button) {
    const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }
}

function initThemeToggle(): void {
  buttonListeners?.abort();
  applyTheme();
  const button = document.getElementById('theme-toggle');
  if (!button) return;

  buttonListeners = new AbortController();
  button.hidden = false;
  button.addEventListener(
    'click',
    () => {
      preference = getTheme() === 'dark' ? 'light' : 'dark';
      applyTheme();
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // Keep the selected theme for this visit even without persistence.
      }
    },
    { signal: buttonListeners.signal }
  );
}

// These listeners belong to the document lifetime, across router navigations.
systemTheme.addEventListener('change', applyTheme);
window.addEventListener('storage', event => {
  if (event.key !== storageKey && event.key !== null) return;
  preference =
    event.newValue === 'light' || event.newValue === 'dark'
      ? event.newValue
      : null;
  applyTheme();
});

document.addEventListener('astro:before-swap', event => {
  buttonListeners?.abort();
  // Astro replaces root attributes; carry the current theme into that swap.
  event.newDocument.documentElement.dataset.theme = getTheme();
});
document.addEventListener('astro:page-load', initThemeToggle);
