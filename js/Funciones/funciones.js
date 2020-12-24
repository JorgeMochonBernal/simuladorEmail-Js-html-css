import { email,asunto,mensaje,formularioEnviar,btnEnviar,resetBtn } from './../Selectores/selectores.js';

	// funciones
export function inicioApp() {
	    // deshabilitar el envio
	    btnEnviar.disabled = true;
	    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
	}

// Valida que el campo tengo algo escrito

export function validarFormulario(e) {
    
	    if(e.target.value.length > 0 ) {
	          campo.style.borderBottomColor = 'green';
	          campo.classList.remove('error');
	    } else {
	          e.target.classList.add('border', 'border-red-500');
	    }

     // Validar unicamente el email
    	if(this.type === 'email') {
        	validarEmail(this);
    	}

    	if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
	        btnEnviar.disabled = false;
	        btnEnviar.classList.remove('opacity-50');
	        btnEnviar.classList.remove('cursor-not-allowed');
     	}
	}

	// Resetear el formulario 
export function resetFormulario(e) {
	    formularioEnviar.reset();
	    e.preventDefault();
	}

// Cuando se envia el correo
export function enviarEmail(e) {

	    e.preventDefault();

	    // Spinner al presionar Enviar
	    const spinner = document.querySelector('#spinner');
	    spinner.style.display = 'flex';

	    // Gif que envia email
	    const enviado = document.createElement('p');
	    enviado.textContent = 'Mensaje Enviado Correctamente';
	    enviado.classList.add('bg')

	    // Ocultar Spinner y mostrar gif de enviado
	    setTimeout( () => {
	        spinner.style.display = 'none';

	        document.querySelector('#loaders').appendChild( enviado );

	        setTimeout(() =>  {
	               enviado.remove();
	               formularioEnviar.reset();
	          }, 5000);
	     }, 3000);    
	}

export function validarEmail(campo) {
	    const mensaje = campo.value;

	    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	     
	    if( re.test(mensaje.toLowerCase()) ) {
	          campo.style.borderBottomColor = 'green';
	          campo.classList.remove('error');
	    } else {
	          campo.style.borderBottomColor = 'red';
	          campo.classList.add('error');
	    }
	}