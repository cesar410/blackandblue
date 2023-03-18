/* funcion de  boton para mostrar ventana emergente 1*/
function ventana1() {

    Swal.fire({
        title: "Castillo Ygay, de Marqués Murrieta.!",
        text: "Este fue el mejor vino del mundo con 96 puntos según Wine Spectator. Catalina Rugeles, sommelier de bebidas alcohólicas dice"
            + "que este vino ganó por ser representante del tono clásico. Castillo tiene 85% de uva",
        imageUrl: 'cartaDeVinos/img/vino.webp', 
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })

}

/* funcion de  boton para mostrar ventana emergente 2*/
function ventana2() {

    Swal.fire({
        title: "Aubert Pinot Noir Sonoma Coast.!",
        text: "Este licor estadounidense ocupa el segundo lugar del top 100. Es producido por la Bodega Aubert Wines ubicada en"
            + "la ciudad de Calistoga en California.Tiene perfumados aromas y textura voluptuosa.",
        
        imageUrl: 'cartaDeVinos/img/vino1.webp',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })


}

/* funcion de  boton para mostrar ventana emergente 3*/
function ventana3() {

    Swal.fire({
        title: "Brunello di Montalcino Lé Lucére.!",
        text: "DolaresEste vino, el cual ocupa el tercer lugar en el ranking es producido por la bodega La Toscana en San Filippo,"
            + "Italia.Tiene un color rojo rubí, su perfume es intenso y tiene notas de cereza concentradas. ",
        imageUrl: 'cartaDeVinos/img/vino2.webp',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })


}


/* funcion de  boton para mostrar ventana emergente 4*/
function ventana4() {
   

    Swal.fire({
        title: "Cabernet Sauvignon Mount Veeder.!",
        text: "Ocupando el cuarto lugar, este vino producido por la firma Mayacamas en California, Estados Unidos es fermentado"
            + "en tinas de cemento y tanques de acero inoxidable. Su sabor natural es ácido",
        imageUrl: 'cartaDeVinos/img/vino4.webp',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })

    

}


/* funcion de  boton para mostrar ventana emergente 5*/
function ventana5() {

    Swal.fire({
        title: "Châteauneuf-du-Pape Les Trois S.!",
        text: "Las uvas de este vino de origen francés proceden de un suave terruño de laderas. Está producido bajo un mosaico de arenas, "
            + "guijarros y arcillas rojas, para lograr un equilibrio de poder y delicadeza. ",
        imageUrl: 'cartaDeVinos/img/vino5.webp',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 6*/
function ventana6() {
   

    Swal.fire({
        title: "Chardonnay Russian River Valley Vine H V.!",
        text: " Este Chardonnay de la bodega Kistler ubicada en California (EE.UU.), se embotella desde 1986 a 1.800 pies de altura."
            + "Este vino tiene una fruta de hueso delicada y brillante y tonos florales",
        imageUrl: 'cartaDeVinos/img/vino6.webp',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 7*/
function ventana7() {
    
    Swal.fire({
        title: "Massolino Barolo-bodega italiana.!",
        text: " Se destaca por ser un vino de color rojo granate con intensidad variable. Sus uvas provienen de subzonas"
            + "de la localidad italiana Serralunga le dan a este vino un variable estado de perfumes.",
        imageUrl: 'cartaDeVinos/img/vino7.webp',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}



/* funcion de  boton para mostrar ventana emergente 8*/
function ventana8() {

    Swal.fire({
        title: "Piedra Negra Chacayes Los Chacayes!",
        text: "Proviene de los mejores cuarteles de la finca Chacayes ubicada en Argentina, con una densidad muy alta."
            + "Este vino producido por Piedra Negra combina la densidad de antiguas plantas de malbec.",
        imageUrl: 'cartaDeVinos/img/vino8.webp',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
}

/* funcion de  boton para mostrar ventana emergente 9*/
function ventana9() {

    Swal.fire({
        title: "Pinont Noir Ribbon Ridge the Beaux F V.!",
        text: "Este vino es elaborado por la bodega Beaux Fréres y posee elegantes capas con evocadoras notas de frambuesa, pétalos de rosa",
        imageUrl: 'cartaDeVinos/img/vino10.webp',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 10*/
function ventana10() {
    Swal.fire({
        title: "Bollinger Brut Champagne La G A.!",
        text: "La vinificación del producto se hace exclusivamente en pequeños barriles de roble envejecido, el cual ayuda a "
            + "desarrollar aromas de gran finura. Hoy en día cada botella es degollada a mano.",
      
        imageUrl: 'cartaDeVinos/img/vino9.webp',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}




/* funcion de comprar vino 1*/
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


/* funcion de comprar vino 2*/
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



/* funcion de comprar vino 3*/
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


/* funcion de comprar vino 4*/
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


/* funcion de comprar vino 5*/
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


/* funcion de comprar vino 6*/
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


/* funcion de comprar vino 7*/
function VentanaComprar7() {
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


/* funcion de comprar vino 8*/
function VentanaComprar8() {
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


/* funcion de comprar vino 9*/
function VentanaComprar9() {
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


/* funcion de comprar vino 10*/
function VentanaComprar10() {
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
