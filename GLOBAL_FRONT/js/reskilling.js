// Dados de Cursos e Trilhas
let cursos = [];
let trilhas = [];
let proximoIdCurso = 1;

// Inicializar dados
document.addEventListener('DOMContentLoaded', () => {
    inicializarCursos();
    inicializarTrilhas();
    atualizarCursos();
    atualizarTrilhas();
});

function inicializarCursos() {
    cursos = [
        {
            id: proximoIdCurso++,
            nome: "Introdução à Inteligência Artificial",
            descricao: "Aprenda os fundamentos da IA e suas aplicações no mercado",
            area: "IA",
            duracaoHoras: 40,
            nivel: "Iniciante",
            pontos: 50,
            habilidadesDesenvolvidas: ["IA", "Machine Learning", "Algoritmos"],
            gratuito: true,
            link: "https://curso-ia-basico.com"
        },
        {
            id: proximoIdCurso++,
            nome: "Machine Learning com Python",
            descricao: "Desenvolva modelos de ML usando Python e bibliotecas populares",
            area: "IA",
            duracaoHoras: 60,
            nivel: "Intermediário",
            pontos: 75,
            habilidadesDesenvolvidas: ["Python", "Machine Learning", "Data Science"],
            gratuito: false,
            link: "https://curso-ml-python.com"
        },
        {
            id: proximoIdCurso++,
            nome: "Fundamentos de Sustentabilidade Empresarial",
            descricao: "Entenda como implementar práticas sustentáveis nas empresas",
            area: "Sustentabilidade",
            duracaoHoras: 30,
            nivel: "Iniciante",
            pontos: 40,
            habilidadesDesenvolvidas: ["Sustentabilidade", "ESG", "Responsabilidade Social"],
            gratuito: true,
            link: "https://curso-sustentabilidade.com"
        },
        {
            id: proximoIdCurso++,
            nome: "Economia Circular e Negócios Verdes",
            descricao: "Aprenda sobre economia circular e oportunidades na economia verde",
            area: "Sustentabilidade",
            duracaoHoras: 45,
            nivel: "Intermediário",
            pontos: 60,
            habilidadesDesenvolvidas: ["Economia Circular", "Negócios Verdes", "Sustentabilidade"],
            gratuito: true,
            link: "https://curso-economia-circular.com"
        },
        {
            id: proximoIdCurso++,
            nome: "React Moderno: Do Zero ao Avançado",
            descricao: "Domine React e construa aplicações modernas",
            area: "Desenvolvimento",
            duracaoHoras: 80,
            nivel: "Intermediário",
            pontos: 100,
            habilidadesDesenvolvidas: ["React", "JavaScript", "Frontend"],
            gratuito: false,
            link: "https://curso-react.com"
        },
        {
            id: proximoIdCurso++,
            nome: "Liderança Inclusiva",
            descricao: "Desenvolva habilidades de liderança focadas em diversidade e inclusão",
            area: "Soft Skills",
            duracaoHoras: 25,
            nivel: "Iniciante",
            pontos: 35,
            habilidadesDesenvolvidas: ["Liderança", "Inclusão", "Diversidade"],
            gratuito: true,
            link: "https://curso-lideranca-inclusiva.com"
        }
    ];
}

function inicializarTrilhas() {
    trilhas = [
        {
            nome: "Trilha de Inteligência Artificial",
            descricao: "Desenvolva habilidades em IA e machine learning",
            area: "IA",
            cursos: ["Introdução à IA", "Machine Learning com Python"],
            pontosCompletos: 800,
            badgeFinal: "Mestre em IA"
        },
        {
            nome: "Trilha de Sustentabilidade",
            descricao: "Prepare-se para a economia verde",
            area: "Sustentabilidade",
            cursos: ["Fundamentos de Sustentabilidade", "Economia Circular"],
            pontosCompletos: 600,
            badgeFinal: "Guardião Verde"
        }
    ];
}

function atualizarCursos() {
    const container = document.getElementById('cursos-lista');
    if (!container) return;
    
    container.innerHTML = '';
    
    cursos.forEach(curso => {
        container.appendChild(criarCardCurso(curso));
    });
}

function criarCardCurso(curso) {
    const card = document.createElement('div');
    card.className = 'curso-card';
    
    card.innerHTML = `
        <div class="curso-header">
            <h3 class="curso-titulo">${curso.nome}</h3>
            <span class="curso-area">${curso.area}</span>
        </div>
        <p style="color: var(--gray); margin-bottom: 1rem;">${curso.descricao}</p>
        <div class="curso-info">
            <span><i class="fas fa-clock"></i> ${curso.duracaoHoras}h</span>
            <span><i class="fas fa-signal"></i> ${curso.nivel}</span>
            <span><i class="fas fa-star"></i> ${curso.pontos} pts</span>
        </div>
        <div class="curso-habilidades">
            ${curso.habilidadesDesenvolvidas.map(h => `<span>${h}</span>`).join('')}
        </div>
        ${curso.gratuito ? '<span class="gratuito-badge">✅ Gratuito</span>' : ''}
        <a href="${curso.link}" target="_blank" class="btn-primary" style="margin-top: 1rem; display: inline-block; text-decoration: none;">
            <i class="fas fa-external-link-alt"></i> Acessar Curso
        </a>
    `;
    
    return card;
}

function filtrarCursos() {
    const area = document.getElementById('filtro-area-curso')?.value || '';
    const gratuito = document.getElementById('filtro-gratuito')?.checked || false;
    const container = document.getElementById('cursos-lista');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    const filtrados = cursos.filter(curso => {
        const matchArea = !area || curso.area === area;
        const matchGratuito = !gratuito || curso.gratuito;
        return matchArea && matchGratuito;
    });
    
    filtrados.forEach(curso => {
        container.appendChild(criarCardCurso(curso));
    });
}

function atualizarTrilhas() {
    const container = document.getElementById('trilhas-lista');
    if (!container) return;
    
    container.innerHTML = '';
    
    trilhas.forEach(trilha => {
        const card = document.createElement('div');
        card.className = 'trilha-card';
        
        const progresso = 50; // Simulado
        
        card.innerHTML = `
            <h3 class="trilha-titulo">${trilha.nome}</h3>
            <p class="trilha-descricao">${trilha.descricao}</p>
            <div>
                <strong>Área:</strong> ${trilha.area}
            </div>
            <div style="margin: 1rem 0;">
                <strong>Progresso:</strong>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progresso}%">${progresso}%</div>
                </div>
            </div>
            <div>
                <strong>Badge Final:</strong> ${trilha.badgeFinal}
            </div>
            <div style="margin-top: 1rem;">
                <strong>Cursos na trilha:</strong>
                <ul style="margin-top: 0.5rem;">
                    ${trilha.cursos.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function showTab(tabId, btnElement) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    btnElement.classList.add('active');
    document.getElementById(`tab-${tabId}`).classList.add('active');
    
    if (tabId === 'recomendacoes') {
        atualizarRecomendacoesCursos();
    }
}

function atualizarRecomendacoesCursos() {
    const container = document.getElementById('recomendacoes-lista');
    if (!container) return;
    
    container.innerHTML = '<h3 style="margin-bottom: 1rem;">💡 Cursos Recomendados pela IA</h3>';
    
    // Simulação de recomendações (em produção viria de um algoritmo de IA)
    const recomendacoes = cursos.filter(curso => 
        curso.area === 'IA' || curso.area === 'Sustentabilidade'
    ).slice(0, 5);
    
    if (recomendacoes.length === 0) {
        container.innerHTML += '<p>Complete seu perfil para receber recomendações!</p>';
        return;
    }
    
    recomendacoes.forEach(curso => {
        container.appendChild(criarCardCurso(curso));
    });
}

