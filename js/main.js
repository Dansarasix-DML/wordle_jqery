/**
 * @author Daniel Marín López
 * @version 0.01a
 */


const wordle = (function () {

    let objetivo = "";

    const palabrasEspañol = [
        "almas",  "alzar",  "andar",  "angel",  "ancho",  "antes",  "muela",  "cupon",  "canta",  "libro",
        "atras",  "bello",  "bicho",  "broma",  "cable",  "caida",  "calor",  "campo",  "canal",  "canto",
        "caoba",  "casco",  "cazar",  "cerca",  "cerdo",  "cerro",  "cesar",  "chico",  "chino",  "circo",
        "cirro",  "claro",  "clase",  "clima",  "coger",  "color",  "comer",  "comun",  "coser",  "cruel",
        "cuota",  "curar",  "danza",  "dardo",  "debil",  "barro",  "diosa",  "drama",  "ducha",  "melon",
        "dulce",  "durar",  "ecual",  "encia",  "envio",  "epoca",  "erizo",  "voces",  "exito",  "extra",
        "ficha",  "filar",  "final",  "finca",  "finge",  "firma",  "flaco",  "flora",  "fluir",  "fondo",
        "forma",  "forro",  "fresa",  "frito",  "fuego",  "furia",  "ganas",  "ganar",  "gente",  "grano",
        "grito",  "grupo",  "guapo",  "guion",  "haber",  "habla",  "habra",  "hacer",  "hacha",  "hallo",
        "haran",  "haras",  "herir",  "heroe",  "hidro",  "hojas",  "hongo",  "horno",  "humor",  "hurto",
        "ideal",  "idolo",  "igual",  "jabon",  "jalar",  "jarra",  "joven",  "jugar",  "junto",  "jurar",
        "labor",  "lamer",  "largo",  "lazar",  "linea",  "llama",  "llega",  "lleno",  "lloro",  "locos",
        "lucha",  "manco",  "manos",  "marca",  "masas",  "mateo",  "maton",  "mayor",  "medio",  "mejor",
        "menor",  "menta",  "merca",  "merlo",  "meson",  "miedo",  "miedo",  "minas",  "mitad",  "molde",
        "monos",  "monte",  "moral",  "morir",  "mover",  "mueca",  "muere",  "muero",  "mujer",  "mundo",
        "musgo",  "nariz",  "negro",  "nenes",  "norte",  "nuevo",  "ocaso",  "ocupa",  "oeste",  "oliva",
        "ondas",  "orden",  "oigan",  "otero",  "oxido",  "padre",  "pagar",  "pajar",  "papel",  "pared",
        "parir",  "parra",  "parte",  "pasar",  "patas",  "paces",  "pecho",  "pedal",  "pedos",  "pelar",
        "pelos",  "perra",  "perro",  "piano",  "pieza",  "pilas",  "pilar",  "pinar",  "pinto",  "piola",
        "pipas",  "pista",  "pobre",  "poder",  "podio",  "poeta",  "polen",  "pollo",  "poner",  "porro",
        "potro",  "prado",  "primo",  "prisa",  "prosa",  "pucho",  "pulir",  "punto",  "queja",  "quien",
        "quita",  "quiza",  "racha",  "rayos",  "ramal",  "rango",  "raros",  "rasco",  "rasgo",  "raudo",
        "rayar",  "recen",  "recia",  "regir",  "regla",  "regro",  "reina",  "rejas",  "reloj",  "remar",
        "renta",  "resto",  "retar",  "reves",  "rezar",  "ricos",  "rifle",  "riñon",  "samba",  "ronda",
        "ropas",  "rozar",  "ruido",  "ruina",  "sabor",  "sable",  "sacar",  "santo",  "sarta",  "savia",
        "segun",  "señal",  "serie",  "serio",  "silla",  "sismo",  "solar",  "sordo",  "sueco",  "vista",
        "suelo",  "suero",  "suizo",  "talar",  "talon",  "tamba",  "tango",  "tarde",  "tarta",  "tecno",
        "temor",  "tempo",  "tenaz",  "tener",  "tensa",  "terco",  "terno",  "texto",  "tiara",  "tiene",
        "tigre",  "tinta",  "tonto",  "topar",  "torta",  "toser",  "tumba",  "tumor",  "turba",  "turco",
        "tutor",  "usado",  "utero",  "valer",  "valor",  "vasco",  "velar",  "venga",  "venir",  "vente",
        "verbo",  "verde",  "vicio",  "vigor",  "villa",  "viola",  "volar",  "velas",  "vulva",  "yermo",
        "yogur",  "zafar",  "zorro",  "termo",  "negro",  "rosas",  "cinco",  "siete",  "nueve",  "trece",
        "mosca",  "niños",  "mimar",  "ligar",  "ligon",  "sueño",  "soñar",  "aguar",  "trazo",  "saber",
        "cajon",  "patos",  "luces",  "techo",  "agrio",  "ayuno",  "mocos",  "jqery",  "react",  "otros",
        "pinos",  "piñas"
    ];

    const palabraGanadora = () => {return objetivo;}

    const comprobar = function (string) {
        if (string.length !== 5) {
            console.log("Palabra no válida");
            return;
        }

        string = string.toUpperCase();

        const sol = ["none", "none", "none", "none", "none"];

        // const objArray = Array.from(objetivo); //kk creo que sobra

        const intento = Array.from(string);
        const objCopia = objetivo.slice().split(""); 
        intento.forEach((letra, i) => {
            if (letra === objCopia[i]) {
                sol[i] = "green";
                intento[i] = i;
                objCopia[i] = "";
            }
        });

        // Segunda pasada para las letras en amarillo o grises
        intento.forEach((letra, i) => {
            if (objCopia.includes(letra)) {
                sol[i] = "yellow";
                objCopia[objCopia.indexOf(letra)] = "";
            }
        });

        if (sol.every(value => value == "green")) {
            console.log("¡HAS GANADO!");
        } else console.log(`Tu comprobación es ${sol}`);

        return sol;

    }

    const init = function () {
        console.log(`
            #################################################
            ############# Bienvenido al Wordle ##############
            #################################################
        `);

        objetivo = escogerPalabra(palabrasEspañol).toUpperCase();
    }

    const mostrar = function () {
        console.log(`Tu objetivo es: ${objetivo}`);
    }

    const escogerPalabra = array => array[Math.floor(Math.random()*palabrasEspañol.length)];

    return {
        init : init,
        mostrar : mostrar,
        comprobar : comprobar,
        palabra: palabraGanadora
    };
    
})()


/**
 * Parte de jQuery
 */
{
    const teclas = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
        ["ENVIAR", "Z", "X", "C", "V", "B", "N", "M", "←"]
    ];

    const banTeclas = ["ENVIAR", "←", "ENTER", "BACKSPACE"];

    const behaviourVictory = () => {
        $(".iniciar").on("click", function () {location.reload()});
        $(".cerrar").on("click", function () {$(".theEnd").css("display", "none")});
    }

    const ponerLetra = function (letra) {
        $cell = $(".actual [data-letter]:empty").first();
        if ($cell.length) {
            $cell.attr("data-letter", letra);
            $cell.text(letra);
        }
    }

    const comprobarJugada = function (result, $keys) {
        $victory = $(".theEnd");

        if (result.every(color => color === "green")) {
            $keys.each(function () {
                if ($(this).hasClass("key")) $(this).removeClass().addClass("key none");
            });

            $victory.html(`
            ¡EUREKA!
            <br/>
            <img src="./img/s-m-i-l-e-everyday-v0-otlf24t7ez0c1.gif" alt="gif1">
            La palabra era<br/>${wordle.palabra()}
            <div>
                <button class="iniciar">Volver a jugar</button>
                <button class="cerrar">Salir</button>
            </div>
            `);
            $victory.css("display", "flex");

            behaviourVictory();
            $(".keyboard").off("click", clickLetra);
            $(document).off("keydown", letraPresionada);
            playAudio(".audio2");

        } else if (!$(".actual").next().length) {
            $keys.each(function() {
                if ($(this).hasClass("key")) $(this).removeClass().addClass("key none");
            });
            
            $victory.html(`
            ¡MUY MAL!
            <br/>
            <img class="gif2" src="./img/MissDelightJumpscare.gif" alt="gif2">
            La palabra era<br/>${wordle.palabra()}
            <div>
                <button class="iniciar">Volver a jugar</button>
                <button class="cerrar">Salir</button>
            </div>
            `);
            $victory.css("display", "flex");

            behaviourVictory();
            $(".keyboard").off("click", clickLetra);
            $(document).off("keydown", letraPresionada);
            playAudio(".audio3");
        } else {
            $(".actual").next().addClass("actual").siblings(".row").removeClass("actual");
        }
    }

    const comprobarPalabra = function () {
        $cells = $(".actual [data-letter]");
        $keys = $(".key");
        const intento = [];

        if ($cells.toArray().every(cell => !!$(cell).attr("data-letter"))) {
            $cells.each(function() {
                intento.push($(this).text());
            });

            const result = wordle.comprobar(intento.join(""));

            // console.log(result);

            $cells.each(function (i) {
                $(this).fadeOut(function () {
                    $(this).removeClass()
                        .addClass(`letter-box ${result[i]}`) // Cambia de color antes de desvanecerse
                        .fadeIn(); // Aparece la casilla con el nuevo color
                });
                const key = $keys.filter(function() {
                    return $(this).text() === $($cells[i]).text();
                }).first();
                if (key.length) {
                    if (result[i] === "green") {
                        key.removeClass().addClass("key keyGreen");
                    } else if (!key.hasClass("keyGreen")) {
                        if (result[i] === "yellow") {
                            key.removeClass().addClass("key keyYellow");
                        } else if (!key.hasClass("keyYellow")) {
                            key.removeClass().addClass("key keyNone");
                        }
                    }
                }
            });

            comprobarJugada(result, $keys);
        }


    }

    const borrarLetra = function() {
        $emptyCell = $(".actual [data-letter]:empty");
        if ($emptyCell.length && $emptyCell.prev().length) {
            $emptyCell.prev().attr("data-letter", "");
            $emptyCell.prev().text("");
        } else {
            $(".actual").children().last().attr("data-letter", "");
            $(".actual").children().last().text("");
        }
    };

    const teclasAction = function (tecla){
        switch (tecla) {
            case "ENVIAR":
            case "ENTER":
                comprobarPalabra();
                break;
            
            case "←":
            case "BACKSPACE":
                borrarLetra();
                break;
        
            default:
                break;
        }
    }

    const clickLetra = function (event) {
        $.each(teclas, function (i) { 
            if (teclas[i].includes(event.target.textContent) && 
            !banTeclas.includes(event.target.textContent)) ponerLetra(event.target.textContent)
        });
        if (banTeclas.includes(event.target.textContent)) teclasAction(event.target.textContent);
    }

    const letraPresionada = function (event) {
        $.each(teclas, function (i) { 
            if (teclas[i].includes(event.key.toUpperCase()) && 
            !banTeclas.includes(event.target.textContent)) ponerLetra(event.key.toUpperCase());
        });
        
        if (banTeclas.includes(event.key.toUpperCase())) teclasAction(event.key.toUpperCase());
    }

    const header = function () {
        $noscript = $("<noscript>USA JAVASCRIPT</noscript>");
        $header = $("<header></header>");
        $audios = $(`
        <div>
            <audio class="audio1" src="./sound/playtime.mp3" preload="auto"></audio>
            <audio class="audio2" src="./sound/intro.mp3" preload="auto"></audio>
            <audio class="audio3" src="./sound/SW_Teacher_Jumpscare.wav" preload="auto"></audio>
            <audio class="audio4" src="./sound/Kickin_Hello.wav" preload="auto"></audio>
            <audio class="audio5" src="./sound/HoppyHoppersCutout1.mp3" preload="auto"></audio>
            <audio class="audio6" src="./sound/dogday.mp3" preload="auto"></audio>
        </div>
        `);
        $img1 = $("<img/>", {
            "class":"head1",
            src:"./img/SmilingCrittersLogoCharacters.png",
            alt:"smilingTitle"
        });
        $img1.on("click", () => $(".audio1")[0].play());
        $img2 = $("<img/>", {
            src:"./img/wordleTitle.png",
            alt:"wordleTitle"
        });
        $header.append($img1).append($img2).append($audios);
        $( "body" ).append($noscript).append($header);
    }

    const divsTablero = (main) => {
        $main = main;

        $.each(Array(6), function (i) {
            $row = $("<div/>", {
                "class": "row"
            });

            if (i === 0) $row.addClass("actual");

            $.each(Array(5), function () {
                $cell = $("<div/>", {
                    "class": "cell",
                    "data-letter": ""
                });
                $row.append($cell);                
            })
            $main.append($row);
        });
    }

    const divsTeclado = (aside) => {
        
        $aside = aside;

        $.each(teclas, function (i) {
            $keyRow = $("<div/>", {"class": "keyRow"});
            $.each(Array(teclas[i].length), function (j) {
                $key = $("<div/>", {"class": "key"});
                $key.text(teclas[i][j]);
                $keyRow.append($key);
            });
            $aside.append($keyRow);
        });

        $aside.on("click", clickLetra);
    }

    const cuerpo = () => {
        $content = $("<div class=\"content\"></div>");
        $img1 = $("<img/>", {
            "class":"img1",
            src:"./img/Hoppy_Hopscotch's_second_cutout_artwork_pose.png",
            alt:"hoppy1"
        });
        $img1.on("click", () => playAudio(".audio5"));
        $img2 = $("<img/>", {
            "class":"img2",
            src:"./img/KickinChicken's_second_cutout_artwork_pose.png",
            alt:"kickin1"
        });
        $img2.on("click", () => playAudio(".audio4"));
        $img3 = $("<img/>", {
            "class":"img3",
            src:"./img/dogday.png",
            alt:"dogday1"
        });
        $img3.on("click", () => playAudio(".audio6"));
        $victory = $("<div class=\"theEnd\"></div>")
        $main = $("<main></main>");
        divsTablero($main);
        $aside = $("<aside></aside>");
        divsTeclado($aside);
        $content.append($victory).append($img1).append($img2).append($img3).append($main).append($aside);
        $("body").append($content);
    }

    const playAudio = audio => $(audio)[0].play();

    const iniciar = function() {
        header();
        cuerpo();
        wordle.init();
    }

    $(() => {
        iniciar();
        $(document).on("keydown", letraPresionada);
    })
}