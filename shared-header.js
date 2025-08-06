function createHeader() {
  return `
   <header>
      <a href="index.html">
        <img src="./media/A00_Logo_&_title_-_light.png" alt="Club Benares" style="height: 30px;">
      </a>
    </header>
    
    <nav aria-label="Menu principal">
      <ul>
        <li><a href="eventos.html">Eventos</a></li>
        <li><a href="biblioteca.html">Biblioteca</a></li>
        <li><a href="cinemateca.html">Cinemateca</a></li>
        <li><a href="laboratorio.html">Laboratório</a></li>
        <li><a href="mercado.html">Mercado</a></li>
        <li><a href="comunidad.html">Comunidad</a></li>
        <li><a href="contactos.html">Contactos</a></li>
      </ul>
    </nav>
  `;
}

// =================================
// RANDOM COLORED BOX SHADOWS
// =================================

function generateRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 40) + 60; // 60-100% (vibrant colors)
  const lightness = Math.floor(Math.random() * 30) + 60;  // 60-90% (brighter, not too dark)
  const alpha = (Math.random() * 0.4) + 0.3; // 0.3-0.7 (more visible, not too transparent)
  
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
}

function applyRandomBoxShadows() {
  const allElements = document.querySelectorAll('*');
  
  allElements.forEach(element => {
    const randomColor = generateRandomColor();
    const shadowSize = Math.floor(Math.random() * 3) + 1; // 1-4px
    const shadowBlur = Math.floor(Math.random() * 8) + 2; // 2-10px
    
    // Create random shadow offset
    const offsetX = (Math.random() - 0.5) * 4; // -2 to 2px
    const offsetY = (Math.random() - 0.5) * 4; // -2 to 2px
    
    element.style.boxShadow = `${offsetX}px ${offsetY}px ${shadowBlur}px ${randomColor}`;
  });
}

// Insert header into page
document.addEventListener('DOMContentLoaded', function() {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = createHeader();
    
    // Highlight current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentLink = document.querySelector(`nav a[href="${currentPage}"]`);
    if (currentLink) {
      currentLink.classList.add('active');
    }
  }

  // Apply random box shadows after everything loads
  setTimeout(applyRandomBoxShadows, 200);
});

// Optional: Refresh colors every few seconds (uncomment to enable)
// setInterval(applyRandomBoxShadows, 5000);