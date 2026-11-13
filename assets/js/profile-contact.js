(() => {
  const email = document.querySelector('[data-profile-email]');
  const copyButton = document.querySelector('[data-copy-email]');
  const status = document.querySelector('[data-copy-status]');

  if (!email || !copyButton || !status) return;

  copyButton.addEventListener('click', async () => {
    const address = email.textContent.trim();
    let copied = false;
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(address);
        copied = true;
      } catch {
        // A browser may expose the API but deny clipboard permission.
      }
    }

    if (!copied) {
      const selection = window.getSelection();
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(email);
        selection.removeAllRanges();
        selection.addRange(range);
        try {
          copied = document.execCommand('copy');
        } catch {
          // Keep the address selected for manual copying.
        }
        if (copied) selection.removeAllRanges();
      }
    }
    status.textContent = copied
      ? '邮箱已复制 · Email copied'
      : '请手动复制上方邮箱 · Please copy the email address above.';
  });
  copyButton.hidden = false;
})();
