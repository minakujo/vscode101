const heartButtons = document.querySelectorAll('.heart-button');

heartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const imageUrl = button.getAttribute('data-url');
    if (imageUrl) {
      window.location.href = imageUrl;
    }
  });
});

heartButton.addEventListener('click', () => {
  popupContent.innerHTML = ''; // Clear previous images

  imageUrls.forEach(url => {
    const link = document.createElement('a');
    link.href = url; // opens in the same tab by default

    const img = document.createElement('img');
    img.src = url;
    img.style.margin = '10px';
    img.style.borderRadius = '12px';
    img.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';

    link.appendChild(img);
    popupContent.appendChild(link);
  });

  popup.classList.remove('hidden'); // Show popup
});

popup.addEventListener('click', (e) => {
  if (e.target.id === 'image-popup') {
    popup.classList.add('hidden');
  }
});