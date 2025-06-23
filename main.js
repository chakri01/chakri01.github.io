// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.onclick = function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
});

// Easter egg: click on the "Chakradhar" name for a color flash
document.querySelector('.crazy').addEventListener('click', () => {
  document.body.style.transition = 'background 0.2s';
  document.body.style.background = '#FFD600';
  setTimeout(() => {
    document.body.style.background = 'transparent';
  }, 300);
});