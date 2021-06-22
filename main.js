$('a[href*="#"]:not([href="#"])').click(function() {
    var offset = -200; // <-- mude esse valor para posicionar acima ou abaixo do destino
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top + offset
            }, 1000); // <-- o 1000 é a velocidade da animação
            return false;
        }
    }
});
