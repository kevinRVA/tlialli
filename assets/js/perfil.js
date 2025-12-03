document.addEventListener("DOMContentLoaded", () => {
    
    // --- PASO 1: RECUPERAR DATOS DEL LOGIN ---
    // Buscamos si hay un correo guardado en el navegador
    const emailGuardado = localStorage.getItem("usuarioCorreo");
    
    // Si hay email, creamos un nombre basado en el correo (lo que está antes del @)
    // Si no hay email, usamos "Invitado"
    const nombreUsuario = emailGuardado ? emailGuardado.split('@')[0] : "Invitado";

    // --- PASO 2: CONFIGURACIÓN DE DATOS DEL USUARIO ---
    const userData = {
        // Usamos los datos recuperados o valores por defecto
        nombre: nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1), // Capitalizar primera letra
        email: emailGuardado || "invitado@tlialli.sv",
        
        // Generamos el avatar dinámico usando el nombre recuperado
        avatar: `https://ui-avatars.com/api/?name=${nombreUsuario}&background=0D8ABC&color=fff`,
        
        // Array de lugares visitados (Datos simulados)
        historialViajes: [
            {
                destino: "Playa El Tunco",
                departamento: "La Libertad",
                fecha: "20 Nov, 2025",
                imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/El_Tunco_Beach.jpg/640px-El_Tunco_Beach.jpg",
                rating: 5
            },
            {
                destino: "Volcán Ilamatepec",
                departamento: "Santa Ana",
                fecha: "15 Oct, 2025",
                imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Volc%C3%A1n_de_Izalco_y_Volc%C3%A1n_de_Santa_Ana.jpg/640px-Volc%C3%A1n_de_Izalco_y_Volc%C3%A1n_de_Santa_Ana.jpg",
                rating: 4
            },
            {
                destino: "Ruta de las Flores",
                departamento: "Ahuachapán",
                fecha: "02 Sep, 2025",
                imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Iglesia_de_Apaneca.jpg/640px-Iglesia_de_Apaneca.jpg",
                rating: 5
            }
        ],

        // Array de contactos (Datos simulados)
        contactosRecientes: [
            {
                nombre: "Miguel Hernández",
                servicio: "Clases de Surf",
                telefono: "7456-7890",
                estado: "Pendiente"
            },
            {
                nombre: "Beatriz Ayala",
                servicio: "Tour El Boquerón",
                telefono: "7650-4050",
                estado: "Finalizado"
            },
            {
                nombre: "Manuel Chávez",
                servicio: "Lancha Golfo de Fonseca",
                telefono: "7505-1020",
                estado: "Confirmado"
            }
        ]
    };

    // --- PASO 3: FUNCIONES DE RENDERIZADO (Igual que antes) ---

    function loadHeader() {
        // Actualizamos el Navbar
        const navUserElement = document.getElementById("nav-username");
        if(navUserElement) navUserElement.textContent = userData.nombre;

        // Actualizamos la Tarjeta de Perfil
        const profileName = document.getElementById("profile-name");
        const profileEmail = document.getElementById("profile-email");
        const profileAvatar = document.getElementById("profile-avatar");

        if(profileName) profileName.textContent = userData.nombre;
        if(profileEmail) profileEmail.textContent = userData.email;
        if(profileAvatar) profileAvatar.src = userData.avatar;
    }

    function loadHistory() {
        const container = document.getElementById("places-container");
        if (!container) return; // Validación por seguridad
        
        if(userData.historialViajes.length === 0) {
            container.innerHTML = '<p class="text-muted">Aún no has visitado ningún lugar.</p>';
            return;
        }

        userData.historialViajes.forEach(viaje => {
            let estrellas = '';
            for(let i=0; i<5; i++) {
                estrellas += i < viaje.rating ? '<i class="fa-solid fa-star text-warning"></i>' : '<i class="fa-regular fa-star text-warning"></i>';
            }

            const cardHTML = `
                <div class="col-12">
                    <div class="card shadow-sm h-100">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${viaje.imagen}" class="img-fluid rounded-start h-100 object-fit-cover" alt="${viaje.destino}" style="min-height: 150px;">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <h5 class="card-title">${viaje.destino}</h5>
                                        <small class="text-muted">${viaje.fecha}</small>
                                    </div>
                                    <p class="card-text mb-1"><i class="fa-solid fa-location-dot text-danger"></i> ${viaje.departamento}</p>
                                    <div class="mb-2">${estrellas}</div>
                                    <button class="btn btn-sm btn-outline-primary">Ver detalles</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += cardHTML;
        });
    }

    function loadContacts() {
        const container = document.getElementById("contacts-container");
        if (!container) return; // Validación

        userData.contactosRecientes.forEach(contacto => {
            let badgeClass = "bg-secondary";
            if(contacto.estado === "Confirmado") badgeClass = "bg-success";
            if(contacto.estado === "Pendiente") badgeClass = "bg-warning text-dark";

            const itemHTML = `
                <div class="list-group-item p-3">
                    <div class="d-flex w-100 justify-content-between">
                        <h6 class="mb-1 fw-bold">${contacto.nombre}</h6>
                        <small class="badge ${badgeClass} rounded-pill">${contacto.estado}</small>
                    </div>
                    <p class="mb-1 text-muted small">${contacto.servicio}</p>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <small><i class="fa-solid fa-phone"></i> ${contacto.telefono}</small>
                        <a href="tel:${contacto.telefono}" class="btn btn-sm btn-light text-success border"><i class="fa-brands fa-whatsapp"></i> Contactar</a>
                    </div>
                </div>
            `;
            container.innerHTML += itemHTML;
        });
    }

    // Ejecutar funciones
    loadHeader();
    loadHistory();
    loadContacts();
});