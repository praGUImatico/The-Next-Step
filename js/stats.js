// Atualizar Estatísticas na Página Inicial
document.addEventListener('DOMContentLoaded', () => {
    // Dados simulados (em produção viriam de uma API)
    const stats = {
        vagas: 7,
        cursos: 6,
        usuarios: 1
    };
    
    // Animar contadores
    animarContador('total-vagas', stats.vagas);
    animarContador('total-cursos', stats.cursos);
    animarContador('usuarios-ativos', stats.usuarios);
});

function animarContador(elementId, valorFinal) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let valorAtual = 0;
    const incremento = valorFinal / 30;
    const intervalo = setInterval(() => {
        valorAtual += incremento;
        if (valorAtual >= valorFinal) {
            element.textContent = valorFinal;
            clearInterval(intervalo);
        } else {
            element.textContent = Math.floor(valorAtual);
        }
    }, 50);
}

