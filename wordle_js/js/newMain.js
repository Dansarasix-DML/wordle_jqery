

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
        "yogur",  "zafar",  "zorro",  "termo",  "negro",  "rosas",  "cinco",  "siete",  "nueve",  "trece"
    ];

    const comprobar = function (string) {
        if (string.length !== 5) {
            console.log("Palabra no válida");
            return;
        }

        string = string.toUpperCase();

        const sol = ["none", "none", "none", "none", "none"];

        const objArray = Array.from(objetivo);

        const intento = Array.from(string);
        const objCopia = objetivo.slice().split(""); //kk creo que sobra
        intento.forEach((letra, i) => {
            if (letra === objArray[i]) {
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
        mostrar();
    }

    const mostrar = function () {
        console.log(`Tu objetivo es: ${objetivo}`);
    }

    const escogerPalabra = array => array[Math.floor(Math.random()*palabrasEspañol.length)];

    return {
        init : init,
        mostrar : mostrar,
        comprobar : comprobar

    };
    
})()

{
    const teclas = [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ",
        "ENVIAR", "Z", "X", "C", "V", "B", "N", "M", "←"
    ];

    const banTeclas = ["ENVIAR", "←", "ENTER", "BACKSPACE"];

    const ponerLetra = function (letra) {
        // document.querySelector("[data-flag] [data-letter]:empty");
        const cell = document.querySelector(".actual [data-letter]:empty");
        if (cell) {
            cell.focus();
            cell.setAttribute("data-letter", letra);
            cell.textContent = letra;
        }
    }

    const comprobarJugada = function (result, keys) {
        if (result.every(color => color === "green")) {
            keys.forEach(key => {
                if ((key.className === "key") || (key.className === "key wKey")) {
                    key.className = (key.textContent === "W") ? `key wKey none` : `key none`;
                }
            });
            // console.log("¡HAS GANADO");
            document.querySelector(".keyboard").removeEventListener("click", clickLetra);
            document.removeEventListener("keydown", letraPresionada);
        } else if (!document.querySelector(".actual").nextElementSibling){
            keys.forEach(key => {
                if ((key.className === "key") || (key.className === "key wKey")) {
                    key.className = (key.textContent === "W") ? `key wKey none` : `key none`;
                }
            });
            // console.log("¡HAS PERDIDO!");
            document.querySelector(".keyboard").removeEventListener("click", clickLetra);
            document.removeEventListener("keydown", letraPresionada);
        } else {
            document.querySelector(".actual").nextElementSibling.className = "letter-row actual";
            document.querySelector(".actual").className = "letter-row";
        }
    }

    const comprobarPalabra = function () {
        const cells = [...document.querySelectorAll(".actual [data-letter]")];
        const keys = [...document.querySelectorAll(".key")];
        const intento = [];

        if(cells.every(cell => !!cell.getAttribute("data-letter"))){
            cells.forEach(cell => intento.push(cell.textContent));

            const result = wordle.comprobar(intento.join(""));

            result.forEach((color, i) => {
                cells[i].className = `letter-box ${color}`;
                const key = keys.find(key => key.textContent === cells[i].textContent);
                if (key) {
                    if (color === "green") {
                        key.className = (key.textContent === "W") ? `key wKey green` : "key green";
                    } else if (!key.className.includes("green")) {
                        const val = (color === "none") ? "none" : "yellow";
                        key.className = (key.textContent === "W") ? `key wKey ${val}` : `key ${val}`;
                    }
                }
            });

            comprobarJugada(result, keys);
        }
    }

    const borrarLetra = function () {
        if (document.querySelector(".actual [data-letter]:empty") && document.querySelector(".actual [data-letter]:empty").previousElementSibling) {
            document.querySelector(".actual [data-letter]:empty").previousElementSibling.focus();
            document.querySelector(".actual [data-letter]:empty").previousElementSibling.setAttribute("data-letter", "");
            document.querySelector(".actual [data-letter]:empty").previousElementSibling.textContent = "";
        } else {
            document.querySelector(".actual").lastChild.focus();
            document.querySelector(".actual").lastChild.setAttribute("data-letter", "");
            document.querySelector(".actual").lastChild.textContent = "";
        }

        // const filas = [...document.querySelectorAll(".letter-row")];
        // const fila = filas.find(fila => fila.getAttribute("data-flag") === "0");
    
        // if (fila) {
        //     const cells = [...fila.querySelectorAll(".letter-box")];
        
        //     const lastFilledCellIndex = cells.reduceRight((lastIndex, cell, currentIndex) => {
        //         if (lastIndex === -1 && cell.getAttribute("data-letter")) {
        //             return currentIndex;
        //         }
        //         return lastIndex;
        //     }, -1);
            
        //     if (lastFilledCellIndex !== -1) {
        //         const lastFilledCell = cells[lastFilledCellIndex];
        //         lastFilledCell.setAttribute("data-letter", "");
        //         lastFilledCell.textContent = "";
        //     } 
        // }
    }

    const teclasAccion = function (tecla) {
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
        if (teclas.includes(event.target.textContent) && !banTeclas.includes(event.target.textContent)) {
            // console.log(event.target.textContent);
            ponerLetra(event.target.textContent);
        } else if (banTeclas.includes(event.target.textContent)) {
            teclasAccion(event.target.textContent);
        }
    }

    const letraPresionada = function (event) {
        if (teclas.includes(event.key.toUpperCase()) && !banTeclas.includes(event.target.textContent)) {
            // console.log(event.key.toUpperCase());
            ponerLetra(event.key.toUpperCase());
        } else if (banTeclas.includes(event.key.toUpperCase())) {
            teclasAccion(event.key.toUpperCase());
        }
    }

    const drawWordle = function() {
        const wordle = document.createElement("div");
        wordle.setAttribute("name", "Wordle");
        wordle.classList.add("wordBody");

        const numRows = 6;
        const numCols = 5;

        Array.from({ length: numRows }).forEach(() => {
            const row = document.createElement("div");
            row.className = "letter-row";
            // row.setAttribute("data-flag", "0");
            Array.from({ length: numCols }).forEach(() => {
                const cell = document.createElement("div");
                cell.setAttribute("data-letter", "");
                cell.className = "letter-box";

                row.appendChild(cell);
            });

            wordle.appendChild(row);
        });

        wordle.querySelector(".letter-row").className = "letter-row actual";

        return wordle;
    }

    const drawKeyboard = function() {
        const keyboard = document.createElement("div");
        keyboard.setAttribute("name", "Keyboard");
        keyboard.classList.add("keyboard");
        
        const rows = [0, 10, 20];
        rows.forEach((startIndex) => {
            const rowDiv = document.createElement("div");
            teclas.slice(startIndex, startIndex + 10).forEach((tecla) => {
                const keyDiv = document.createElement("div");
                keyDiv.classList.add("key");
                keyDiv.textContent = tecla;
                if (tecla === "W") keyDiv.classList.add("wKey");
                rowDiv.appendChild(keyDiv);
            });
            keyboard.appendChild(rowDiv);
        });

        keyboard.addEventListener("click", clickLetra);

        return keyboard;
    }

    const iniciar = () => {
        const body = document.body;

        //---Creación del header---
        const header = document.createElement("header");
        const title = document.createElement("h1");
        const title2 = document.createElement("h3");
        title.textContent = "Wordle";
        title2.textContent = "Acierta la palabra";
        header.appendChild(title);
        header.appendChild(title2);
        body.appendChild(header);

        //---Creación del main---
        const main = document.createElement("main");

        //---Creación de la parte 1: Wordle---
        const part1 = document.createElement("div");
        part1.appendChild(drawWordle());

        //---Creación de la parte2: Teclado---
        const part2 = document.createElement("div");
        part2.appendChild(drawKeyboard());


        main.appendChild(part1);
        main.appendChild(part2);
        body.appendChild(main);

        wordle.init();

        document.addEventListener("keydown", letraPresionada);
    }

    document.addEventListener("DOMContentLoaded", iniciar);

}