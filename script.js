let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove('hidden');
});

// Handle Add to Home Screen button click
installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('PWA installed');
    } else {
      console.log('PWA installation declined');
    }
    deferredPrompt = null;
    installBtn.classList.add('hidden');
  }
});
