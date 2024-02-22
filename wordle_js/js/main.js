/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

{
    const teclas = [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ",
        "ENVIAR", "Z", "X", "C", "V", "B", "N", "M", "←"
    ];

    const banTeclas = [];

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

    const escogerPalabra = array => array[Math.floor(Math.random()*palabrasEspañol.length)];

    let foundEmptyCell = true;
    let aciertos = 0
    let cont = 5;
    let intentos = 0;
    let position = -1;
    let fila = [];
    let objetivo = escogerPalabra(palabrasEspañol).toUpperCase();
    let sol = [];

    const comprobarPalabra = function (cells, sol) {
        if (cont !== 0) return;
        const objArr = objetivo.split("");
        let keys = document.querySelectorAll(".key");

        sol.forEach((letra, index) => {
            if (objArr.includes(letra)) {
                if (letra == objArr[index]) {
                    cells[index].className = "green";
                    aciertos++;
                    if (aciertos == 5) {
                        console.log("¡HAS GANADO!");
                        document.removeEventListener("keydown", letraPresionada);
                        keys.forEach(key => {
                            key.removeEventListener("click", clickLetra);
                            if (key.classList.contains("gold")) {key.classList.remove("gold")};
                            if (key.classList.contains("green")) {key.classList.remove("green")};
                            key.classList.add("grey");
                        });
                    } else {
                        keys.forEach(key => {
                            if (letra == key.textContent) {
                                if (key.classList.contains("gold")) {key.classList.remove("gold")};
                                if (key.classList.contains("grey")) {key.classList.remove("grey")};
                                key.classList.add("green");
                            }
                        });
                    }
                } else {
                    aciertos = 0;
                    cells[index].className = "gold";
                    keys.forEach(key => {
                        if (letra == key.textContent) {
                            if (key.classList.contains("grey")) key.classList.remove("grey");
                            if (key.classList.contains("green")) {
                                return;
                            } else key.classList.add("gold");
                        }});
                }
            } else {
                aciertos = 0;
                cells[index].className = "grey";
                if (!banTeclas.includes(letra)) banTeclas.push(letra);
                let keys = document.querySelectorAll(".key");
                keys.forEach(key => {
                    if (letra == key.textContent) {
                        key.removeEventListener("click", clickLetra);
                        key.classList.add("grey");                            
                    }
                });
            }
        });
        if (intentos >= 5) {
            console.log(`HAS PERDIDO, LA PALABRA ES: ${objetivo}`);
            document.removeEventListener("keydown", letraPresionada);
            keys.forEach(key => {
                key.removeEventListener("click", clickLetra);
                key.classList.add("grey");
            });
        } else intentos++;
        sol.splice(0, sol.length);
        cells.splice(0, cells.length);
        cont = 5;
    }

    const borrarLetra = function (cells, sol) {
        if (position < 0 || cont === 5) return;
        cells[position].textContent = "";
        sol.pop();
        fila.pop();
        position--;
        cont++;
    }

    const procesarLetra = function (letra) {
        const cells = document.querySelectorAll(".letter-box");
        switch (letra) {
            case "ENVIAR":
            case "ENTER":
                comprobarPalabra(fila, sol);
                break;
            
            case "←":
            case "BACKSPACE":
                borrarLetra(cells, sol);
                break;
        
            default:
                const emptyCellIndex = [...cells].findIndex(cell => !cell.textContent && foundEmptyCell && cont !== 0);
                if (emptyCellIndex !== -1) {
                    const cell = cells[emptyCellIndex];
                    position = emptyCellIndex;
                    cell.textContent = letra;
                    sol.push(letra);
                    fila.push(cell);
                    foundEmptyCell = false;
                    cont--;
                }
                foundEmptyCell = true;
                break;
        }
    }


    const clickLetra = function () {
        procesarLetra(this.textContent);
    }

    const letraPresionada = function (event) {
        if (teclas.includes(event.key.toUpperCase()) || event.key == "Enter" || event.key == "Backspace") {
            if (!banTeclas.includes(event.key.toUpperCase())) {
                procesarLetra(event.key.toUpperCase());                
            }
        };
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

            Array.from({ length: numCols }).forEach(() => {
                const cell = document.createElement("div");
                cell.className = "letter-box";

                row.appendChild(cell);
            });

            wordle.appendChild(row);
        });

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
                keyDiv.addEventListener("click", clickLetra);
                if (tecla === "W") keyDiv.classList.add("wKey");
                rowDiv.appendChild(keyDiv);
            });
            keyboard.appendChild(rowDiv);
        });

        return keyboard;
    }

    const init = () => {
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

        document.addEventListener("keydown", letraPresionada);

        console.log(`La palabra del día es: ${objetivo}`);

    }

    document.addEventListener("DOMContentLoaded", init);
}