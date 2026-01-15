(function () {
  const WORDS_PER_MINUTE = 200;

  // Contenitore principale del report
  const container = document.querySelector('.container');
  const output = document.getElementById('reading-time');

  if (!container || !output) return;

  const text = container.innerText || '';
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / WORDS_PER_MINUTE);

  output.textContent = `${minutes} min read`;
})();
