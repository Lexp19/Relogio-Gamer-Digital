const horas = document.getElementById('hour');
const minutos = document.getElementById('minute');
const segundos = document.getElementById('second');

const atualizarTempo = () => {
    const agora = new Date();
    const hr = agora.getHours().toString().padStart(2, '0');
    const min = agora.getMinutes().toString().padStart(2, '0');
    const seg = agora.getSeconds().toString().padStart(2, '0');

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
};

atualizarTempo();

const relogio = setInterval(atualizarTempo, 1000);
