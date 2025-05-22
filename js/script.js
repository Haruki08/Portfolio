const albumItems = document.querySelectorAll('.album-item img');
albumItems.forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
      position: fixed; 
      top: 0; left: 0; 
      width: 100%; height: 100%; 
      background: rgba(0,0,0,0.9); 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      z-index: 1000;
      cursor: zoom-out;
    `;
    
    const fullSizeImg = document.createElement('img');
    fullSizeImg.src = img.src;
    fullSizeImg.style.maxHeight = '90vh';
    fullSizeImg.style.maxWidth = '90vw';
    
    lightbox.appendChild(fullSizeImg);
    document.body.appendChild(lightbox);
    
    lightbox.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});
