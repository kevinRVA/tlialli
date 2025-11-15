document.addEventListener("DOMContentLoaded", () => {
    const departamentoInfo = {
        "San Salvador": {
            actividades: [
                "Visitar el Centro Histórico (Palacio Nacional, Catedral, Teatro Nacional).",
                "Subir al Volcán de San Salvador (El Boquerón).",
                "Explorar el Museo de Antropología (MUNA).",
                "Disfrutar de la vida nocturna en la Zona Rosa."
            ],
            guias: [ 
                { nombre: "Carlos Henríquez", especialidad: "Tours Históricos y Centro de la Ciudad", telefono: "7811-2030" },
                { nombre: "Beatriz Ayala", especialidad: "Tour de Volcanes y Naturaleza (El Boquerón)", telefono: "7650-4050" }
            ]
        },
        "La Libertad": {
            actividades: [
                "Tomar clases de surf en El Tunco o El Sunzal.",
                "Disfrutar de mariscos frescos en el Malecón del Puerto de La Libertad.",
                "Visitar el parque de diversiones Sunset Park.",
                "Explorar las cuevas de Tamanique."
            ],
            guias: [
                { nombre: "Miguel Hernández", especialidad: "Surf y Deportes Acuáticos", telefono: "7456-7890" },
                { nombre: "José Campos", especialidad: "Tours de Playa", telefono: "7578-9012" }
            ]
        },
        "Santa Ana": {
            actividades: [
                "Hacer senderismo en el Volcán de Santa Ana (Ilamatepec) y ver la laguna.",
                "Recorrer el centro histórico y visitar el Teatro de Santa Ana.",
                "Nadar y relajarse en el Lago de Coatepeque.",
                "Visitar el sitio arqueológico Joya de Cerén (cercano)."
            ],
            guias: [
                { nombre: "Roberto Morán", especialidad: "Senderismo (Volcán Ilamatepec)", telefono: "7900-1212" },
                { nombre: "Elena Figueroa", especialidad: "Tours Culturales y Lago Coatepeque", telefono: "7745-6789" }
            ]
        },
        "Sonsonate": {
            actividades: [
                "Recorrer la Ruta de las Flores (en temporada).",
                "Visitar pueblos con encanto como Nahuizalco y Salcoatitán.",
                "Nadar en las playas de Los Cóbanos (Ecoturismo).",
                "Disfrutar de la gastronomía local en Juayúa."
            ],
            guias: [
                { nombre: "Patricia Ramos", especialidad: "Ecoturismo Costero", telefono: "7567-8901" }
            ]
        },
        "Ahuachapán": {
            actividades: [
                "Relajarse en los ausoles y aguas termales.",
                "Hacer la Ruta de las Flores (Ataco, Apaneca).",
                "Probar el café de altura en una finca local.",
                "Hacer el laberinto de Apaneca."
            ],
            guias: [
                { nombre: "Sofía Cienfuegos", especialidad: "Ruta de las Flores (Ataco y Apaneca)", telefono: "7622-3344" },
                { nombre: "David Pineda", especialidad: "Tour de Café y Termalismo", telefono: "7850-9988" }
            ]
        },
        "La Unión": {
            actividades: [
                "Tomar un tour en lancha por el Golfo de Fonseca.",
                "Visitar las islas (Meanguera, Conchagüita, Zacatillo).",
                "Subir al Volcán de Conchagua para vistas impresionantes.",
                "Disfrutar de playas vírgenes como Playas Negras."
            ],
            guias: [
                { nombre: "Manuel Chávez", especialidad: "Tours en Lancha (Islas del Golfo)", telefono: "7505-1020" }
            ]
        }
    };

    // --- 2. Selección de Elementos del DOM ---
    const tarjetasDestino = document.querySelectorAll(".destinos .card");
    const modal = document.getElementById("info-modal");
    const modalClose = document.getElementById("modal-close");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");

    // --- 3. Lógica para ABRIR el modal ---
    tarjetasDestino.forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {

            tarjetasDestino.forEach(t => {
                t.classList.remove("bg-destacado", "text-white");
            });
            tarjeta.classList.add("bg-destacado", "text-white");

            const nombreDepto = tarjeta.dataset.departamento;
            const info = departamentoInfo[nombreDepto];
            if (info) {
                modalTitle.textContent = nombreDepto;
                modalBody.innerHTML = ""; 

                if (info.actividades && info.actividades.length > 0) {
                    const subtituloActividades = document.createElement("h3");
                    subtituloActividades.textContent = "Qué hacer";
                    modalBody.appendChild(subtituloActividades);
                    const lista = document.createElement("ul");
                    info.actividades.forEach(actividad => {
                        const item = document.createElement("li");
                        item.textContent = actividad;
                        lista.appendChild(item);
                    });
                    modalBody.appendChild(lista);
                }

                if (info.guias && info.guias.length > 0) {
                    const subtituloGuias = document.createElement("h3");
                    subtituloGuias.textContent = "Guías Recomendados";
                    modalBody.appendChild(subtituloGuias);
                    info.guias.forEach(guia => {
                        const guiaDiv = document.createElement("div");
                        guiaDiv.classList.add("guia-info");
                        guiaDiv.innerHTML = `
                            <h4><i class="fa-solid fa-user icon-guia"></i> ${guia.nombre}</h4>
                            <p><strong>Especialidad:</strong> ${guia.especialidad}</p>
                            <p class="phone-number fw-bold"><i class="fa-solid fa-phone"></i> ${guia.telefono}</p>
                        `;
                        modalBody.appendChild(guiaDiv);
                    });
                }
                
            } else {
                modalTitle.textContent = nombreDepto;
                modalBody.innerHTML = "<p>¡Próximamente!</p>"; 
            }
            modal.classList.add("show");
        });
    });
    function cerrarModal() {
        modal.classList.remove("show");
    }

    modalClose.addEventListener("click", cerrarModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            cerrarModal();
        }
    });

});
