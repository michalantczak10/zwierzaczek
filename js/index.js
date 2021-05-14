function WeryfikacjaUstawieniaEkranu() {
    "use strict";
    if (window.matchMedia("(orientation:landscape)").matches) {
        $("#o_firmie").show("slow");
        $("#oferta").hide("slow");
        $("#cennik").hide("slow");
        $("#kontakt").hide("slow");
        $("#dojazd").hide("slow");
        $("#wspolpraca").hide("slow");
        $("nav").show("slow");
        $(".przycisk_menu").hide("slow");
    } else {
        $("#o_firmie").hide("slow");
        $("#oferta").hide("slow");
        $("#cennik").hide("slow");
        $("#kontakt").hide("slow");
        $("#dojazd").hide("slow");
        $("#wspolpraca").hide("slow");
        $("nav").show("slow");
        $(".przycisk_menu").show("slow");
    }
}

$(document).ready(function () {
    $("#przycisk_o_firmie").click(function () {
        if (window.matchMedia("(orientation:landscape)").matches) {
            $("#o_firmie").show("slow");
            $("#oferta").hide("slow");
            $("#cennik").hide("slow");
            $("#kontakt").hide("slow");
            $("#dojazd").hide("slow");
            $("#wspolpraca").hide("slow");
            $("nav").show("slow");
            $(".przycisk_menu").hide("slow");
        } else {
            $("#o_firmie").show("slow");
            $("#oferta").hide("slow");
            $("#cennik").hide("slow");
            $("#kontakt").hide("slow");
            $("#dojazd").hide("slow");
            $("#wspolpraca").hide("slow");
            $("nav").hide("slow");
            $(".przycisk_menu").show("slow");
        }

    });

    $("#przycisk_oferta").click(function () {
        if (window.matchMedia("(orientation:landscape)").matches) {
            $("#o_firmie").hide("slow");
            $("#oferta").show("slow");
            $("#cennik").hide("slow");
            $("#kontakt").hide("slow");
            $("#dojazd").hide("slow");
            $("#wspolpraca").hide("slow");
            $("nav").show("slow");
            $(".przycisk_menu").hide("slow");
        } else {
            $("#o_firmie").hide("slow");
            $("#oferta").show("slow");
            $("#cennik").hide("slow");
            $("#kontakt").hide("slow");
            $("#dojazd").hide("slow");
            $("#wspolpraca").hide("slow");
            $("nav").hide("slow");
            $(".przycisk_menu").show("slow");
        }
    });

    $("#przycisk_cennik").click(function () {
        if (window.matchMedia("(orientation:landscape)").matches) {
            $("#o_firmie").hide("slow");
            $("#oferta").hide("slow");
            $("#cennik").show("slow");
            $("#kontakt").hide("slow");
            $("#dojazd").hide("slow");
            $("#wspolpraca").hide("slow");
            $("nav").show("slow");
            $(".przycisk_menu").hide("slow");
        } else {
            $("#o_firmie").hide("slow");
            $("#oferta").hide("slow");
            $("#cennik").show("slow");
            $("#kontakt").hide("slow");
            $("#dojazd").hide("slow");
            $("#wspolpraca").hide("slow");
            $("nav").hide("slow");
            $(".przycisk_menu").show("slow");
        }
    });

    $("#przycisk_kontakt").click(function () {
        if (window.matchMedia("(orientation:landscape)").matches) {
            $("#o_firmie").hide("slow");
            $("#oferta").hide("slow");
            $("#cennik").hide("slow");
            $("#kontakt").show("slow");
            $("#dojazd").hide("slow");
            $("#wspolpraca").hide("slow");
            $("nav").show("slow");
            $(".przycisk_menu").hide("slow");
        } else {
            $("#o_firmie").hide("slow");
            $("#oferta").hide("slow");
            $("#cennik").hide("slow");
            $("#kontakt").show("slow");
            $("#dojazd").hide("slow");
            $("#wspolpraca").hide("slow");
            $("nav").hide("slow");
            $(".przycisk_menu").show("slow");
        }
    });

    $("#przycisk_dojazd").click(function () {
        if (window.matchMedia("(orientation:landscape)").matches) {
            $("#o_firmie").hide("slow");
            $("#oferta").hide("slow");
            $("#cennik").hide("slow");
            $("#kontakt").hide("slow");
            $("#dojazd").show("slow");
            $("#wspolpraca").hide("slow");
            $("nav").show("slow");
            $(".przycisk_menu").hide("slow");
        } else {
            $("#o_firmie").hide("slow");
            $("#oferta").hide("slow");
            $("#cennik").hide("slow");
            $("#kontakt").hide("slow");
            $("#dojazd").show("slow");
            $("#wspolpraca").hide("slow");
            $("nav").hide("slow");
            $(".przycisk_menu").show("slow");
        }
    });

    $("#przycisk_wspolpraca").click(function () {
        if (window.matchMedia("(orientation:landscape)").matches) {
            $("#o_firmie").hide("slow");
            $("#oferta").hide("slow");
            $("#cennik").hide("slow");
            $("#kontakt").hide("slow");
            $("#dojazd").hide("slow");
            $("#wspolpraca").show("slow");
            $("nav").show("slow");
            $(".przycisk_menu").hide("slow");
        } else {
            $("#o_firmie").hide("slow");
            $("#oferta").hide("slow");
            $("#cennik").hide("slow");
            $("#kontakt").hide("slow");
            $("#dojazd").hide("slow");
            $("#wspolpraca").show("slow");
            $("nav").hide("slow");
            $(".przycisk_menu").show("slow");
        }
    });

    $(".przycisk_menu").click(function () {
        if (window.matchMedia("(orientation:landscape)").matches) {
            $("#o_firmie").hide("slow");
            $("#oferta").hide("slow");
            $("#cennik").hide("slow");
            $("#kontakt").hide("slow");
            $("#dojazd").hide("slow");
            $("#wspolpraca").hide("slow");
            $("nav").show("slow");
            $(".przycisk_menu").hide("slow");
        } else {
            $("#o_firmie").hide("slow");
            $("#oferta").hide("slow");
            $("#cennik").hide("slow");
            $("#kontakt").hide("slow");
            $("#dojazd").hide("slow");
            $("#wspolpraca").hide("slow");
            $("nav").show("slow");
            $(".przycisk_menu").hide("slow");
        }
    });

});
