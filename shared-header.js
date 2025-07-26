function createHeader() {
  return `
   <header>
      <a href="club benares.html">
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
});