const abrirFormulario = document.querySelector(".abrir_formulario");
const cerrarFormulario = document.querySelector("#cerrar_formulario");
const registroUsuario = document.querySelector("#registro_usuario");

abrirFormulario.addEventListener("click", (e) => {
    e.preventDefault();
    registroUsuario.showModal();
})

cerrarFormulario.addEventListener("click", () => {
    registroUsuario.close();
    document.getElementById("formulario").reset();
})
