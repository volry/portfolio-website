// main.js

document.addEventListener('DOMContentLoaded', function() {
  const yearSpan = document.getElementById('year');
  yearSpan.textContent = new Date().getFullYear();
});
