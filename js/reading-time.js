document.addEventListener('DOMContentLoaded', () => {
  const WORDS_PER_MINUTE = 200;

  const container = document.querySelector('.container');
  const output = document.getElementById('reading-time');

  if (!container || !output) return;

  const paragraphs = container.querySelectorAll('p');
  let wordCount = 0;

  paragraphs.forEach(p => {
    const text = p.innerText.trim();
    if (text.length > 0) {
      wordCount += text.split(/\s+/).length;
    }
  });

  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  output.textContent = `${minutes} min read`;
});
