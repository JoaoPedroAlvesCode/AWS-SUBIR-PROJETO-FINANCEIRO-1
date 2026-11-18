function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-cyanDark' : 'bg-navy';

  toast.className = `${bgColor} text-white text-sm font-medium px-4 py-3 rounded-xl shadow-lg border border-white/10 transition-all duration-300 transform translate-x-0`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}