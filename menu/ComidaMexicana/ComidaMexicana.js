/* funcion de  boton para mostrar ventana emergente 1*/
function ventana1() {
     
    Swal.fire({
        title: "Tlayuda!",
        text: "La gastronomía de Oaxaca es una de las más valoradas por los mexicanos, así que no es raro que muchos hagan escapadas a este estado solo para comer. "
            + "Uno de los platos de comida mexicana más característicos es uno de sus exponentes, la tlayuda. Se trata de una tortilla de maíz de tamaño considerable"
            + "(hasta más de 40 centímetros de diámetro) con una consistencia diferente a las comunes, algo más rígida, pero sin llegar a ser dura, solo un tanto crujiente."
            + "Se rellena de varios ingredientes, normalmente de carne, pero lo más valioso de este platillo es el queso de Oaxaca o quesillo, uno de los más populares del país. ¡Un auténtico manjar!.",
        
        imageUrl: 'img/mexicana/Tlayuda.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })

}


/* funcion de  boton para mostrar ventana emergente 2*/
function ventana2() {
  

    Swal.fire({
        title: "Totopos!",
        text: "Los totopos son unos imprescindibles en cualquier comida mexicana que se precie y los encontrarás en decenas de platillos o, simplemente, "
            + "como aperitivos o botana. Aunque en un principio te parecerán a los populares “nachos”, verás que los totopos no tienen un sabor tan intenso. "
            + "Se trata de trozos de tortillas de maíz fritos hasta que adquieren una textura crujiente. Se suelen comer en platos en los que hay frijoles refritos, "
            + "en los populares nachos (con queso, jocoque y chiles jalapeños) o para acompañar el guacamole, otra de las insignias de la comida de México que no puedes dejar de probar.",
      
        imageUrl: 'img/mexicana/Totopos.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 3*/
function ventana3() {

    Swal.fire({
        title: "Escamoles y chapulines!",
        text: "Si eres de los que prueban todo lo que les ponen por delante, no dudes en probar algunos de los ingredientes más exóticos de la comida mexicana. "
            + "Por ejemplo, los escamoles son larvas de hormiga güijera y están lejos de ser un manjar barato. Debido a la dificultad para criarlas y a que son bastante agresivas, "
            + "a los escamoles se les conoce como el caviar mexicano y suele usarse en todo tipo de platillos como guisos o tacos. Además, tienen 4 veces más cantidad de proteínas que la carne."
            + "Por otro lado, los chapulines son una especie de saltamontes pequeños que se suelen comer fritos , ya sea como un snack o dentro de otras comidas",
        imageUrl: 'img/mexicana/Escamoles y chapulines.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 4*/
function ventana4() {


    Swal.fire({
        title: "Pozole!",
        text: " Si te gustan los caldos contundentes y eres capaz de soportar bien el picante, no dejes de comer en México el pozole. "
            + "Este es un caldo a base de granos de maíz o elote de variedad cacahuazintle que, al hervirlos, se abren y producen una espuma que le da más cuerpo. "
            + "También se le suele añadir algo de carne y cebolla, tiras de lechuga y rábano. Las dos variedades básicas de pozole que encontrarás en la comida "
            + "mexicana son el blanco y el rojo. A este segundo se le suele añadir chile triturado o en aceite.",
        imageUrl: 'img/mexicana/Pozole.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 5*/
function ventana5() {
   

    Swal.fire({
        title: "Quesadillas!",
        text: " La quesadilla, aunque en los restaurantes mexicanos de España se suele encontrar bien reproducida, es otra de las delicias que debes comer en México. "
            + "Aunque su preparación no tiene mucho misterio, pues no deja de ser una tortilla de maíz o trigo plegada rellena de queso y otros ingredientes, "
            + "la manera de cocinarla puede hacer que te sepa bien diferente a lo que ya has comido con anterioridad. "
            + "El quesillo mexicano tiene un sabor particular y se suelen hacer en una plancha o parrilla que le dan un toque diferente. ",
      
        imageUrl: 'img/mexicana/Quesadillas.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}



/* funcion de  boton para mostrar ventana emergente 6*/
function ventana6() {
    
    Swal.fire({
        title: "Tacos!",
        text: "El maíz es el ingrediente principal de la mayoría de los platos que comerás en México y los tacos son, probablemente, el exponente más claro. "
            + "Se llama taco a la tortilla de maíz (o de harina de trigo) enrollada rellena de cualquier tipo de alimentos que se te ocurran. Los más populares suelen"
            + "ser los rellenos de carne, cebolla, cilantro y algo de salsa picante. Pero, si eres vegetariano, "
            + "también encontrarás múltiples opciones, entre las que destacamos los tacos de nopal, un tipo de cactus comestible que hará tus delicias.",
        imageUrl: 'img/mexicana/Tacos.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}




/* funcion de comprar comida  Mexicana 1*/
function VentanaComprar1() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta Seguro?',
        text: "se Añadira al carito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, confirmar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Realizado!',
            'Revise el carito de compras!.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se añadio al carito:)',
            'error'
          )
        }
      })
}


/* funcion de comprar comida  Mexicana  2*/
function VentanaComprar2() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta Seguro?',
        text: "se Añadira al carito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, confirmar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Realizado!',
            'Revise el carito de compras!.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se añadio al carito:)',
            'error'
          )
        }
      })
}



/* funcion de comprar comida  Mexicana  3*/
function VentanaComprar3() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta Seguro?',
        text: "se Añadira al carito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, confirmar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Realizado!',
            'Revise el carito de compras!.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se añadio al carito:)',
            'error'
          )
        }
      })
}


/* funcion de comprar comida  Mexicana  4*/
function VentanaComprar4() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta Seguro?',
        text: "se Añadira al carito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, confirmar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Realizado!',
            'Revise el carito de compras!.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se añadio al carito:)',
            'error'
          )
        }
      })
}


/* funcion de comprar comida  Mexicana  5*/
function VentanaComprar5() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta Seguro?',
        text: "se Añadira al carito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, confirmar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Realizado!',
            'Revise el carito de compras!.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se añadio al carito:)',
            'error'
          )
        }
      })
}


/* funcion de comprar comida Mexicana  6*/
function VentanaComprar6() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta Seguro?',
        text: "se Añadira al carito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, confirmar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Realizado!',
            'Revise el carito de compras!.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se añadio al carito:)',
            'error'
          )
        }
      })
}


/*carrito de compra*/
function mensajecarrito() {
    swal({
        title: "Carrito",
        text: "SOPA DE WONTON 5.00 dolares \n ZONGZI 5.00 dolares \n____________________________________\n Total: 10.00 dolares\n\n No. Ticket: 25112",
        icon: "info",
        buttons: ["Cancelar", "Pagar"],
        dangerMode: false,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Pago realizado con exito!",
                    {
                        icon: "success",

                    });
            } else {
                swal("Pedido cancelado",
                    {
                        icon: "error",
                    });
            }
        });
}

/*enlace*/
$("#confirm").click(function (e) {
    e.preventDefault(); // Prevent the href from redirecting directly
    var linkURL = $(this).attr("carrito.html");
    enlaces(linkURL);
});

function enlaces(linkURL) {
    swal({
        title: "Leave this site?",
        text: "If you click 'OK', you will be redirected to " + linkURL,
        showCancelButton: true,
        type: "warning"
    }, function (confirm) {
        if (confirm) {
            console.log('confirmado');
            window.location.href = linkURL;
        }
    })
}