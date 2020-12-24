import { inicioApp, validarFormulario,enviarEmail,resetFormulario } from './../Funciones/funciones.js';
import { email,asunto,mensaje,formularioEnviar,resetBtn } from './../Selectores/selectores.js';

	class simuladorEmail {
		constructor() {
			document.addEventListener('DOMContentLoaded', inicioApp);

		    // Campos del formulario
		    email.addEventListener('blur', validarFormulario);
		    asunto.addEventListener('blur', validarFormulario);
		    mensaje.addEventListener('blur', validarFormulario);

		    // Boton de enviar en el submit
		    formularioEnviar.addEventListener('submit', enviarEmail);

		    // Boton de reset
		    resetBtn.addEventListener('click', resetFormulario);
		}
	}

	export default simuladorEmail;