// ZenAura Script - Breathing Animation Logic (No Hold Phase)

document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('text');
  const circle = document.getElementById('circle');

  if (text && circle) {
    function breathingCycle() {
      text.textContent = 'Breathe In';
      circle.style.backgroundColor = '#81c784';

      setTimeout(() => {
        text.textContent = 'Breathe Out';
        circle.style.backgroundColor = '#a5d6a7';
      }, 4000);
    }

    breathingCycle(); // Initial call
    setInterval(breathingCycle, 8000); // Total: 4s Inhale + 4s Exhale
  }
});
