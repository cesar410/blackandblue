/* funcion de  boton para mostrar ventana emergente 1*/
function ventana1() {
   
    Swal.fire({
        title: "Espagueti!",
        text: "no hay otra pasta que pueda encabezar este listado. Es, seguramente, la preparación italiana más conocida del planeta. "
            + "Se trata de una pasta de forma cilíndrica, además de ser delgada y con un gran sabor",
      
        imageUrl: 'img/italiana/espagueti.jfif',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })

}


/* funcion de  boton para mostrar ventana emergente 2*/
function ventana2() {


    Swal.fire({
        title: "Bavette o linguine!",
        text: " aunque el primer término es de Génova y el segundo de Liguria, son dos tipos de pastas muy similares,"
            + "por eso las pusimos en un miso grupo. Su característica principal es la forma, que es plana y delgada",
      
        imageUrl: 'img/italiana/espagueti1.jfif',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 3*/
function ventana3() {
  
    
    Swal.fire({
        title: "Farfalle!",
        text: "También se les conocen como mariposas, y son un tipo de pasta italiana que tiene forma de lacito y unos bordes dentados."
            + "Es bastante común que estos se hagan de colores, añadiendo así verduras a la masa con la que se realizan.",
      
        imageUrl: 'img/italiana/espagueti2.jfif',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 4*/
function ventana4() {

    
    Swal.fire({
        title: "Penne!",
        text: "También puedes conocerlos como plumas, ya que es lo que significa en italiano. Esta pasta es bastante parecida "
            + "al macarrón, pero tiene un corte inclinado y normalmente tiene estrías. Se recomienda mucho para comerlo con salsas.",
      
        imageUrl: 'img/italiana/espagueti3.jfif',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 5*/
function ventana5() {
    
    Swal.fire({
        title: "Raviolis!",
        text: " Pasta de origen italiano, formada por dos cuadrados de pasta de sémola de trigo duro o de harina que encierran un relleno magro o graso, "
            + "cocidos en agua hirviendo y servidos con una salsa de jitomate y queso rallado, o con mantequilla fundida y salvia. ",

        imageUrl: 'img/italiana/espagueti4.jfif',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}



/* funcion de  boton para mostrar ventana emergente 6*/
function ventana6() {
   
    
    Swal.fire({
        title: "Tortellini!",
        text: "Dentro de los diferentes tipos de pastas italianas, los tortellini están entre las más famosas. "
            + "Son una especia de anillos redondos, en los que se colocan diferentes rellenos, ya que se impregna bastante bien por su forma y textura",

        imageUrl: 'img/italiana/espagueti5.jfif',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}






/* funcion de comprar comida  Italiana 1*/
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


/* funcion de comprar comida  Italiana 2*/
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



/* funcion de comprar comida  Italiana 3*/
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


/* funcion de comprar comida  Italiana 4*/
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


/* funcion de comprar comida  Italiana  5*/
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


/* funcion de comprar comida Italiana 6*/
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