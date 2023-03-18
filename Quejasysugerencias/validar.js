function validar(){
    let nombre, apellido, email, usuario, contrasena, 
                telefono, expresionEmail, expresionTel, expresionLetras;

    const form = document.getElementById("formulario");
    
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;

    expresionEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    expresionTel = /^\d{8,11}$/;
    expresionLetras = /^[A-Z]+$/i;

    if(nombre === "" || apellido === "" || email === "" || usuario === "" ||
        contrasena === "" || telefono === ""){
        Swal.fire({icon: 'error', title: "Error", text: "Ingrese los campos obligatorios",});
        return false;
    }
    else if(!expresionLetras.test(nombre) || nombre.length<2 || apellido.length>20){
        Swal.fire({icon: 'error', title: "Error", text: "El nombre debe tener entre 2-20 caracteres y no números",});
        return false;
    }
    else if(!expresionLetras.test(apellido) || apellido.length<2 || apellido.length>20){
        Swal.fire({icon: 'error', title: "Error", text: "El apellido debe tener entre 2-20 caracteres y no números"});
        return false;
    }
    else if(!expresionEmail.test(email)){
        Swal.fire({icon: 'error', title: "Error", text: "El correo no es valido"});
        return false;
    }
    else if(!expresionTel.test(telefono)){
        Swal.fire({icon: 'error', title: "Error", text: "El teléfono debe ser número entre 8-11 digitos"});
        return false;
    }
    
    Swal.fire({
        icon: 'success',
        title: "DATOS INGRESADOS",
        text: "Gracias por formar parte de esta familia",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
      })
      form.reset();
      return false;
      
}