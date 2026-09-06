function cargarFooter() {
  const contenedorFooter = document.getElementById("contenedor-footer");
  if (!contenedorFooter) return;

  contenedorFooter.innerHTML = `
    <footer class="bg-dark text-white py-5 mt-5">
      <div class="container">
        <div class="row">
          
          <div class="col-md-3 mb-4">
            <img src="img/logo-blanco.svg" alt="Ferretería Los Maestros" style="height:40px; margin-bottom:12px;">
            <p class="small text-light">Negocio familiar con 22 años de trayectoria en La Serena, Región de Coquimbo, atendiendo a particulares y contratistas.</p>
          </div>
          
          <div class="col-md-3 mb-4">
            <h4 class="h5 mb-3">Navegación</h4>
            <ul class="list-unstyled">
              <li><a href="catalogo.html" class="text-light text-decoration-none">Catálogo</a></li>
              <li><a href="nosotros.html" class="text-light text-decoration-none">Nosotros</a></li>
              <li><a href="novedades.html" class="text-light text-decoration-none">Novedades</a></li>
              <li><a href="contacto.html" class="text-light text-decoration-none">Contacto</a></li>
            </ul>
          </div>
          
          <div class="col-md-3 mb-4">
            <h4 class="h5 mb-3">Mi cuenta</h4>
            <ul class="list-unstyled">
              <li><a href="login.html" class="text-light text-decoration-none">Iniciar sesión</a></li>
              <li><a href="registro.html" class="text-light text-decoration-none">Crear cuenta</a></li>
              <li><a href="seleccion.html" class="text-light text-decoration-none">Mi lista de pedido</a></li>
            </ul>
          </div>
          
          <div class="col-md-3 mb-4">
            <h4 class="h5 mb-3">Contacto</h4>
            <ul class="list-unstyled text-light small">
              <li>Av. Francisco de Aguirre 450, La Serena</li>
              <li>(51) 222 3344</li>
              <li>contacto@losmaestros.cl</li>
            </ul>
          </div>
          
        </div>
        <div class="border-top border-secondary pt-3 mt-3 text-center small text-light">
          © 2026 Ferretería Los Maestros
        </div>
      </div>
    </footer>
  `;
}



document.addEventListener("DOMContentLoaded", cargarFooter);



function cargarHeader() {
  const contenedorHeader = document.getElementById("contenedor-header");
  if (!contenedorHeader) return;

  contenedorHeader.innerHTML = `
    <div class="bg-dark text-white py-2" style="font-size: 0.85rem;">
      <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <span>Av. Francisco de Aguirre 450, La Serena · (51) 222 3344</span>
        <span class="mt-1 mt-md-0">Lun a sáb · 09:00–19:30 hrs</span>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg bg-white border-bottom border-warning border-3 shadow-sm py-3">
      <div class="container">
        <a class="navbar-brand fw-bold text-dark d-flex align-items-center" href="index.html">
          <img src="img/logo.svg" alt="Ferretería Los Maestros" height="40">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacion" aria-controls="menuNavegacion" aria-expanded="false" aria-label="Abrir menú">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menuNavegacion">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item"><a class="nav-link text-dark fw-semibold" href="index.html">Inicio</a></li>
            <li class="nav-item"><a class="nav-link text-dark fw-semibold" href="catalogo.html">Catálogo</a></li>
            <li class="nav-item"><a class="nav-link text-dark fw-semibold" href="nosotros.html">Nosotros</a></li>
            <li class="nav-item"><a class="nav-link text-dark fw-semibold" href="novedades.html">Novedades</a></li>
            <li class="nav-item"><a class="nav-link text-dark fw-semibold" href="contacto.html">Contacto</a></li>
          </ul>
          <div class="d-flex flex-column flex-lg-row align-items-lg-center gap-3 mt-3 mt-lg-0">
            <a href="registro.html" class="text-dark text-decoration-none fw-semibold small">Crear cuenta</a>
            <a href="login.html" class="text-dark text-decoration-none fw-semibold small">Iniciar sesión</a>
            <a href="seleccion.html" class="btn btn-warning fw-bold d-flex align-items-center">
              Mi lista 
              <span data-contador-seleccion class="badge bg-dark ms-2" style="display:none;">0</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;
}

document.addEventListener("DOMContentLoaded", cargarHeader);