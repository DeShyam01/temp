// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('✅ Service Worker registered'))
    .catch(err => console.error('Service Worker failed:', err));
}

// Load saved note
const noteArea = document.getElementById('note');
const saveBtn = document.getElementById('saveBtn');
const status = document.getElementById('status');

noteArea.value = localStorage.getItem('note') || '';

saveBtn.addEventListener('click', () => {
  localStorage.setItem('note', noteArea.value);
  status.textContent = '💾 Note saved!';
  setTimeout(() => status.textContent = '', 2000);
});

