/* funcion de  boton para mostrar ventana emergente 1*/
function ventana1() {
    Swal.fire({
        title: "Ratatouille!",
        text: " Es una especialidad del sur de Francia, además de uno de los platos típicos franceses más famosos. Una receta sano que mezcla tomates, "
            + "ajos, pimientos, calabacín, y berenjenas con diversas hierbas provenzales. Si quieres cocinarlo, puedes mezclar todos estos ingredientes, por lo que sólo "
            + "necesitarías poner los vegetales que se cocinan más tiempo en el orden correcto para disfrutar de la mejor manera.",
       
        imageUrl: 'img/francesa/Ratatouille.jpg',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })

}


/* funcion de  boton para mostrar ventana emergente 2*/
function ventana2() {

    Swal.fire({
        title: "Galette!",
        text: "En la región de Francia que linda con Cataluña, el Languedoc y Mediodía Pirineos, hay un plato típico muy nutritivo "
            + "Las Galette son crêpes saladas elaboradas con harina de trigo sarraceno  Los mejores vienen de la región de Borgoña y se cocinan con multitud de recetas. "
            + "Las más conocidas son con mantequilla, perejil y salsa mayonesa de ajos Es un plato que se come sobre todo durante las fiestas de Navidad.",
        imageUrl: 'img/francesa/Galette.jpg',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 3*/
function ventana3() {


    Swal.fire({
        title: "Soupe À L’oignons!",
        text: "un plato emblemático de la cocina tradicional francesa. Se inventó durante la Revolución Francesa cuando se disponía únicamente de "
            + "ingredientes sencillos para cocinar. Se hace con trocitos de pan, caldo de carne y cebolla caramelizada. Y atención: ¡el tiempo de cocción no puede superar "
            + "a las 2 horas! Uno de los mejores ejemplos de la comida típica de Francia, sin duda.",
     
        imageUrl: 'img/francesa/Soupe .jpg',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 4*/
function ventana4() {

    Swal.fire({
        title: "Tapenade!",
        text: "El más clásico y delicioso paté de olivas negras usado que se sirve como aperitivo en muchísimos restaurantes de Francia mientras "
            + "espera a que la cocina elabore los platos que has encargado. Se unta en un pan baguette y se disfruta uno de nuestros mejores platillos para toda la familia que te aseguro disfrutara.",
       
        imageUrl: 'img/francesa/Tapenade.jpg',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 5*/
function ventana5() {

    Swal.fire({
        title: "Quiche Lorraine!",
        text: " La quiche lorraine es un plato típico de la región francesa fronteriza con Alemania de Lorena que se remonta al siglo XVII. "
            + "Es una tarta salada elaborada con masa quebrada cuyo relleno consiste en nata fresca (crème fraîche), huevos y panceta sazonada con pimienta negra y nuez moscada. ",
     
        imageUrl: 'img/francesa/Quiche Lorraine.jpg',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}



/* funcion de  boton para mostrar ventana emergente 6*/
function ventana6() {
  


    Swal.fire({
        title: "Le Gratin Dauphinois!",
        text: "Originario de Francia (más precisamente en la región de Delfinado en los Alpes franceses), es un plato horneado de patatas gratinadas "
            + "cortadas en finas rodajas y mezcladas con nata fresca o leche. Además, se le suele añadir mucho queso y setas…¡qué harían los franceses sin queso!.",
       
        imageUrl: 'img/francesa/Le Gratin Dauphinois.jpg',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}




/* funcion de comprar comida Francesa 1*/
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


/* funcion de comprar comida Francesa 2*/
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



/* funcion de comprar comida Francesa 3*/
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


/* funcion de comprar comida Francesa 4*/
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


/* funcion de comprar comida Francesa  5*/
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


/* funcion de comprar comida Francesa 6*/
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