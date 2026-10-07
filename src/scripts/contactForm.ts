let formListeners: AbortController | undefined;

function cleanupContactForm(): void {
  formListeners?.abort();
  formListeners = undefined;
}

function initContactForm(): void {
  cleanupContactForm();
  const form = document.querySelector<HTMLFormElement>('#contact-form');
  if (!form) return;

  const submitBtn = form.querySelector<HTMLButtonElement>('.submit-btn');
  const label = submitBtn?.querySelector<HTMLElement>('[data-submit-label]');
  if (!submitBtn || !label) return;

  let isSubmitting = false;
  const setSubmitting = (submitting: boolean) => {
    isSubmitting = submitting;
    submitBtn.disabled = submitting;
    label.textContent = submitting ? 'Sending…' : 'Submit';
    form.setAttribute('aria-busy', String(submitting));
  };

  // Restore controls without clearing the message when Astro loads this page.
  setSubmitting(false);
  formListeners = new AbortController();
  form.addEventListener(
    'submit',
    event => {
      if (event.defaultPrevented) return;
      if (isSubmitting) {
        event.preventDefault();
        return;
      }
      setSubmitting(true);
    },
    { signal: formListeners.signal }
  );
}

document.addEventListener('astro:before-swap', cleanupContactForm);
document.addEventListener('astro:page-load', initContactForm);
