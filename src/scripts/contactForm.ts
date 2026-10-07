let formListeners: AbortController | undefined;

function cleanupContactForm(): void {
  formListeners?.abort();
  formListeners = undefined;
}

function initContactForm(): void {
  cleanupContactForm();
  const form = document.querySelector<HTMLFormElement>('#contact form');
  if (!form) return;

  formListeners = new AbortController();
  form.addEventListener(
    'submit',
    () => {
      const submitBtn = form.querySelector<HTMLButtonElement>('.submit-btn');
      if (submitBtn) {
        submitBtn.innerHTML = '<span class="text-uppercase">Sending...</span>';
        submitBtn.disabled = true;
      }
    },
    { signal: formListeners.signal }
  );
}

document.addEventListener('astro:before-swap', cleanupContactForm);
document.addEventListener('astro:page-load', initContactForm);
