function boton() {
    <button onclick="entrar()"Abrir Carta ></button>
}
function iniciar() {
    document.querySelector(".boton").style.display = "none";
    document.getElementById("sobre").style.display = "block";
    setTimeout(abrirCarta, 800);
}

function abrirCarta() {
    document.getElementById("tapa").style.transform = "rotateX(180deg)";

    setTimeout(() => {
        let carta = document.getElementById("carta");
        carta.style.transform = "translate(-50%, -50%) scale(1)";
        carta.style.opacity = "1";

        escribir();
        document.getElementById("musica").play().catch(()=>{});
        corazones();
    }, 700);
}

const mensaje =
'Como ha pasado el tiempo y Un Añito Juntos'
'Amo nuestra relación y pido a Dios que siempre nos fotalezca mas nuestro vinculo'

'Gracias por estar conmigo 🤎';

let i = 0;
function escribir() {
    if (i < mensaje.length) {
        document.getElementById("texto").innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribir, 35);
    } else {
        document.getElementById("firma").innerHTML = "Con amor,<br>Siempre yo 💌";

        document.getElementById("Siguiente").style.display="inline-block"
    }
}

function corazones() {
    setInterval(() => {
        let c = document.createElement("div");
        c.className = "corazon";
        c.innerHTML = "❤️";
        c.style.left = Math.random() * 100 + "vw";
        c.style.fontSize = (Math.random() * 15 + 10) + "px";
        document.body.appendChild(c);

        setTimeout(() => c.remove(), 5000);
    }, 400);
}
