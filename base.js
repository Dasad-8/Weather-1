const thmSw = document.getElementById('thmSw');
const thmSts = document.getElementById('thmSts');

thmSw.addEventListener('change', () => {
  if (thmSw.checked) {
    document.body.classList.add('dark-theme');
    thmSts.textContent = 'Dark Mode';
  } else {
    document.body.classList.remove('dark-theme');
    thmSts.textContent = 'Light Mode';
  }
});