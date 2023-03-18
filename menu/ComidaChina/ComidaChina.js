/* funcion de  boton para mostrar ventana emergente 1*/
function ventana1() {
    
    Swal.fire({
        title: "SOPA DE WONTON!",
        text: " En China, el wonton suele servirse en una sopa de fideos muy finos con gambas y cebolleta. "
            + "Una curiosidad: durante la celebración del Año Nuevo Chino se suelen poner monedas de plata dentro de los wontons para desear buena suerte, "
            + "Se trata de una masa de harina de trigo rellena con carne picada de cerdo, gambas, cebolla, jengibre, aceite de sésamo y soja. "
            + "Forman unas empanadillas redondas con una textura arrugada similar a las nubes. De hecho, el nombre de esta receta significa literalmente 'tragarse las nubes'.",
        
        imageUrl: 'img/china/SOPA DE WONTON.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })

}


/* funcion de  boton para mostrar ventana emergente 2*/
function ventana2() {
     
    Swal.fire({
        title: "ZONGZI!",
        text: "El arroz no podía faltar en la gastronomía china. Eso sí, olvídate de la versión tres delicias, hay muchas otras recetas "
            + "que incluyen el arroz de una manera más sabrosa y auténtica. Un ejemplo es el zongzi, un popular triángulo de arroz glutinoso relleno de carne "
            + "o judías dulces y enrollado con hojas de bambú. Se cocina al vapor o hervido. Es un plato tradicional que los chinos preparan siempre en el "
            + "Festival del Barco Dragón y su origen está relacionado con la leyenda del poeta chino Qu Yuan. ",
       
        imageUrl: 'img/china/ZONGZI.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })

}


/* funcion de  boton para mostrar ventana emergente 3*/
function ventana3() {
   
    Swal.fire({
        title: "POLLO GONG BAO O KUNG PAO!",
        text: "Un auténtico clásico de la cocina china es el pollo gong bao. Eso sí, prepárate para que se te salten las lágrimas, porque este "
            + "plato procedente de la región de Sichuan es uno de los más picantes de la gastronomía china. La razón: la gran cantidad de pimienta y chiles que lleva."
            + "La receta tradicional consiste en pollo marinado mezclado con un sofrito de guindillas y pimienta de Sichuan preparada en el wok. Después, la carne "
            + "se saltea con verduras y cacahuetes (o anacardos).",

        imageUrl: 'img/china/POLLO GONG BAO O KUNG PAO.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 4*/
function ventana4() {
   
    Swal.fire({
        title: "CHOP SUEY!",
        text: "Uno de los platos más tradicionales de la gastronomía china. A pesar de no ser una receta milenaria "
            + "su origen se relaciona con un chino que vivía en Estados Unidos en el siglo XIX, este plato no falta en ninguna buena mesa china. "
            + "Su nombre significa literalmente trozos mezclados y consiste en cocinar diferentes tipos de carne con verduras (tipo apio y pimiento) en un wok."
            + " Un ingrediente que no puede faltar en el chop suey es el brote de judía mung verde (o china) que nada tiene que ver con los brotes de soja.",
        imageUrl: 'img/china/CHOP SUEY.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}


/* funcion de  boton para mostrar ventana emergente 5*/
function ventana5() {

    Swal.fire({
        title: "JIAOZI!",
        text: "Otro plato que no puede faltar en una mesa china durante las celebraciones del Año Nuevo Chino son los jiaozi, una especie "
            + "de empanadillas de masa fina rellenas de carne picada o verduras que se sellan con los dedos. Se pueden cocinar de varias maneras: fritas o hervidas. "
            + "Y para acompañar: salsa de soja y vinagre o salsa picante. Para los chinos, este plato con forma de cuerno simboliza la buena fortuna del nuevo año. "
            + "Es habitual encontrarlos con rellenos dulces y en la cocina cantonesa no faltan en los dim sum.",
     
        imageUrl: 'img/china/JIAOZI.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}



/* funcion de  boton para mostrar ventana emergente 6*/
function ventana6() {
   

    Swal.fire({
        title: "WANTON MEE!",
        text: " El wanton mee son unos fideos cantoneses de huevo muy populares en China, sobre todo en Hong Kong. "
            + "Estos noodles se sirven en una especie de sopa, con abundante salsa de ostras o de soja."

            + "Hay diferentes versiones según la región en la que se prepare, pero lo habitual es que vaya servido con char siew "
            + "(rodajas de carne de cerdo asado) y varios tipos de verduras de hojas verdes, como el kailan chino. El wanton se sirve en un bol separado. "
            + "En Hong Kong suelen añadir gambas, lo sirven sin cerdo y lo decoran con cebolleta china",
        imageUrl: 'img/china/WANTON MEE.webp',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}




/* funcion de comprar comida*/
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

/* funcion de comprar comida*/
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

/* funcion de comprar comida*/
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

/* funcion de comprar comida*/
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

/* funcion de comprar comida*/
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

/* funcion de comprar comida*/
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