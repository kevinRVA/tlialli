document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita que la página se recargue

            const emailUsuario = document.getElementById("email").value;
            const passwordUsuario = document.getElementById("password").value;

            // Validación simple (simulada)
            if (emailUsuario && passwordUsuario) {
                
                // GUARDAR EL CORREO: Esto nos servirá para mostrarlo en el perfil después
                localStorage.setItem("usuarioCorreo", emailUsuario);
                
                // Simular un pequeño tiempo de carga y redirigir
                const boton = document.querySelector("button[type='submit']");
                boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Ingresando...';
                
                setTimeout(() => {
                    // REDIRECCIÓN: Vamos a la carpeta 'user' y luego a 'perfil.html'
                    window.location.href = "user/perfil.html"; 
                }, 1500); // Espera 1.5 segundos

            } else {
                alert("Por favor completa todos los campos");
            }
        });
    }
});