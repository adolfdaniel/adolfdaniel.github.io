function isSummarizerApiAvailable() {
  return window.ai && window.ai.summarizer;
}

if (isSummarizerApiAvailable()) {
  const apiDetectorElement = document.getElementById('api-detector');
  if (apiDetectorElement) {
    apiDetectorElement.innerHTML = '<b>ai.summarizer</b> API detected';
    const app = document.getElementById('app');
    app.style.display = 'block';
  }
}
