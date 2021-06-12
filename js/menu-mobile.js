$(document).ready(main)

var contador = 1

function main(){
    $('.hamburguer').click(function(){
        //$('nav').toggle();

        if (contador == 1){
            $('.menu').animate({
                top: '50'
            })
            contador = 0
        } else{
            contador = 1
            $('.menu').animate({
                top: '-500%'
            })
        }
    })
}
