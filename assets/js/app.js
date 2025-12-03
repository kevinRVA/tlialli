document.addEventListener("DOMContentLoaded", () => {
    const departamentoInfo = {
        "San Salvador": {
            actividades: [
                "Visitar el Centro Histórico (Palacio Nacional, Catedral, BINAES).",
                "Subir al Volcán de San Salvador (El Boquerón).",
                "Explorar el Lago de Ilopango (Vía Vela).",
                "Disfrutar de la vista en la Puerta del Diablo."
            ],
            guias: [
                { nombre: "Carlos Henríquez", especialidad: "Centro Histórico", telefono: "7811-2030" },
                { nombre: "Beatriz Ayala", especialidad: "Volcanes y Naturaleza", telefono: "7650-4050" }
            ]
        },
        "La Libertad": {
            actividades: [
                "Surf y vida nocturna en El Tunco o El Zonte.",
                "Visitar Sunset Park y el Muelle de La Libertad.",
                "Caminata a las Cascadas de Tamanique.",
                "Aventura en el Parque Walter Thilo Deininger."
            ],
            guias: [
                { nombre: "Miguel Hernández", especialidad: "Surf City Tours", telefono: "7456-7890" },
                { nombre: "José Campos", especialidad: "Rutas de Playa", telefono: "7578-9012" }
            ]
        },
        "Santa Ana": {
            actividades: [
                "Senderismo al cráter del Volcán Ilamatepec.",
                "Almuerzo con vista al Lago de Coatepeque.",
                "Recorrido por la Catedral y Teatro de Santa Ana.",
                "Sitio Arqueológico Tazumal."
            ],
            guias: [
                { nombre: "Roberto Morán", especialidad: "Volcán Ilamatepec", telefono: "7900-1212" },
                { nombre: "Elena Figueroa", especialidad: "Cultura Maya", telefono: "7745-6789" }
            ]
        },
        "Sonsonate": {
            actividades: [
                "Senderismo en el Complejo de los Volcanes (Cerro Verde).",
                "Snorkel en el arrecife de Playa Los Cóbanos.",
                "Mercado nocturno de Nahuizalco.",
                "Ruta gastronómica en Salcoatitán."
            ],
            guias: [
                { nombre: "Patricia Ramos", especialidad: "Ecoturismo Costero", telefono: "7567-8901" },
                { nombre: "Luis García", especialidad: "Ruta de las Flores", telefono: "7123-4567" }
            ]
        },
        "Ahuachapán": {
            actividades: [
                "Recorrer los murales de Ataco.",
                "Laguna Verde y Laberinto de Albania en Apaneca.",
                "Relax en Termales de Santa Teresa.",
                "Senderismo en Parque Nacional El Imposible."
            ],
            guias: [
                { nombre: "Sofía Cienfuegos", especialidad: "Pueblos Vivos", telefono: "7622-3344" },
                { nombre: "David Pineda", especialidad: "Café y Montaña", telefono: "7850-9988" }
            ]
        },
        "Chalatenango": {
            actividades: [
                "Camping en la cima del Cerro El Pital.",
                "Visita a talleres artesanales en La Palma.",
                "Bañarse en las aguas frías del Río Sumpul.",
                "Ecoturismo en la zona alta."
            ],
            guias: [
                { nombre: "Mario Escobar", especialidad: "Camping y Montaña", telefono: "7001-2233" },
                { nombre: "Carla Monge", especialidad: "Artesanías y Cultura", telefono: "7445-6677" }
            ]
        },
        "Cuscatlán": {
            actividades: [
                "Caminar por las calles empedradas de Suchitoto.",
                "Tour en lancha en el Lago Suchitlán.",
                "Visita a la Cascada Los Tercios.",
                "Mirador del Cerro de las Pavas."
            ],
            guias: [
                { nombre: "Alejandra Ruiz", especialidad: "Historia de Suchitoto", telefono: "7888-9900" },
                { nombre: "Juan Tobar", especialidad: "Tours del Lago", telefono: "7222-3344" }
            ]
        },
        "La Paz": {
            actividades: [
                "Día de playa en la Costa del Sol.",
                "Paseo en lancha por el Estero de Jaltepeque.",
                "Comer pupusas de arroz en Olocuilta.",
                "Visita a la Catedral de Zacatecoluca."
            ],
            guias: [
                { nombre: "Esteban López", especialidad: "Estero y Manglares", telefono: "7666-5544" }
            ]
        },
        "Cabañas": {
            actividades: [
                "Comprar artesanías de barro en Ilobasco.",
                "Senderismo histórico en Bosque de Cinquera.",
                "Visita a la Iglesia colonial de Ilobasco.",
                "Conocer la historia local."
            ],
            guias: [
                { nombre: "Rosa Meléndez", especialidad: "Historia y Conflicto", telefono: "7111-2233" }
            ]
        },
        "San Vicente": {
            actividades: [
                "Ascenso al Volcán Chichontepec.",
                "Visita a los telares de San Sebastián.",
                "Relax en la Laguna de Apastepeque.",
                "Turicentro Amapulapa."
            ],
            guias: [
                { nombre: "Julio Renderos", especialidad: "Textiles y Cultura", telefono: "7999-0011" },
                { nombre: "Grupo de Guías", especialidad: "Volcán Chichontepec", telefono: "7333-4455" }
            ]
        },
        "Usulután": {
            actividades: [
                "Tour de tortugas en Bahía de Jiquilisco.",
                "Visita a la Laguna de Alegría (La Esmeralda).",
                "Caminar por el pueblo de Alegría.",
                "Playa El Espino."
            ],
            guias: [
                { nombre: "Cooperativa Bahía", especialidad: "Eco-tours Bahía", telefono: "7777-8888" },
                { nombre: "Alma Cruz", especialidad: "Pueblo de Alegría", telefono: "7555-6666" }
            ]
        },
        "San Miguel": {
            actividades: [
                "Surf y relax en Playa El Cuco o Las Flores.",
                "Senderismo al Volcán Chaparrastique.",
                "Paseo en la Laguna de Olomega.",
                "Visita a la Catedral de San Miguel."
            ],
            guias: [
                { nombre: "Jorge Zelaya", especialidad: "Volcán Chaparrastique", telefono: "7000-5050" },
                { nombre: "Turismo Oriente", especialidad: "Playas y Surf", telefono: "7222-1111" }
            ]
        },
        "Morazán": {
            actividades: [
                "Recorrido histórico Museo de la Revolución (Perquín).",
                "Bañarse en las aguas turquesas del Río Sapo.",
                "Visita al monumento de El Mozote.",
                "Camping en zonas altas."
            ],
            guias: [
                { nombre: "Guías de Paz", especialidad: "Historia Militar", telefono: "7888-7777" },
                { nombre: "Ecoturismo Morazán", especialidad: "Río Sapo y Naturaleza", telefono: "7444-5555" }
            ]
        },
        "La Unión": {
            actividades: [
                "Tour en lancha por las islas del Golfo de Fonseca.",
                "Mirador Espíritu de la Montaña (Volcán Conchagua).",
                "Playas Negras y Las Tunas.",
                "Visita al muelle de La Unión."
            ],
            guias: [
                { nombre: "Manuel Chávez", especialidad: "Islas del Golfo", telefono: "7505-1020" },
                { nombre: "Camping Conchagua", especialidad: "Miradores y Volcán", telefono: "7999-8888" }
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
