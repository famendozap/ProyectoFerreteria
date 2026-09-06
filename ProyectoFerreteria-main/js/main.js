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


