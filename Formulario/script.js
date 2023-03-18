const
$signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in'), 
    $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn');
    

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});



let usuarios = [
    {
        contra :'blackblue',
        usuario : 'cesar'
    },
];


function login(){


const form = document.getElementById("formulario");

let user = document.getElementById("usuario").value;
let pass = document.getElementById("contra").value;




if(user === "" || pass === ""){
  alert("Error" +" Ingrese los campos obligatorios");
return false;
}




const usuarioEncontrado = usuarios.find(u => u.usuario === user && u.contra === pass);
  if(usuarioEncontrado){
    window.location = 'paginaPrincipal.html';
  } else {
    alert("Error" + " Usuario o contraseña incorrectos");
    
  }

   
}


function validarregistro(){
    let usuario, contra;

    const form = document.getElementById("formularioR");
    
    usuario = document.getElementById("usuarioR").value;
    contra = document.getElementById("contraR").value;

    if(usuario === "" || contra === ""){
      alert("Error" + " No se aceptan campos vacíos");
       
        return false;
    }else if(usuario.length<5 || usuario.length>18){
      alert("Error" + " El Usuario debe tener entre 5 a 18 caracteres ");
       
        return false;
    }else if(contra.length<7 || contra.length>18){
      alert("Error" + " Las contraseñas debe tener entre 7 a 18 caracteres ");
       
    return false;
    }else{
      alert("Creado" + " Usuario creado");
        usuarios.push({usuario: usuario, contra: contra});
        console.log(usuarios);
    }


    form.reset();
    return false;
}

