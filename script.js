// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');

function openLightbox(src, caption) {
  lbImg.src = src;
  lbCaption.textContent = caption || '';
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lbImg.src = '';
}

// Gallery render images
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-overlay span');
    if (img && img.src) openLightbox(img.src, caption ? caption.textContent : '');
  });
});

// Project card images
document.querySelectorAll('.project-img-wrapper').forEach(wrapper => {
  const img = wrapper.querySelector('.project-img');
  if (!img) return;
  wrapper.style.cursor = 'zoom-in';
  wrapper.addEventListener('click', () => {
    const card = wrapper.closest('.project-card');
    const title = card ? card.querySelector('h3') : null;
    const caption = title ? title.childNodes[0].textContent.trim() : '';
    if (img.src) openLightbox(img.src, caption);
  });
});

// Close lightbox
document.getElementById('lb-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// Graphic design filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('#graphic-grid .gallery-item').forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});