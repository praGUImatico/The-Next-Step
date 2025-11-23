// Dados de Vagas
let vagas = [];
let proximoIdVaga = 1;
let vagaSelecionada = null;

// Inicializar dados
document.addEventListener('DOMContentLoaded', () => {
    inicializarVagas();
    atualizarFiltros();
    atualizarVagas();
});

function inicializarVagas() {
    vagas = [
        {
            id: proximoIdVaga++,
            titulo: "Desenvolvedor Full Stack",
            empresa: "TechCorp",
            categoria: "Tecnologia",
            localizacao: "Remoto",
            salario: "R$ 8.000 - R$ 12.000",
            descricao: "Buscamos um desenvolvedor full stack experiente para trabalhar em projetos inovadores.",
            requisitos: "React, Node.js, MongoDB, 3+ anos de experiência",
            areaEmergente: false,
            economiaVerde: false,
            inclusiva: false,
            indiceBemEstar: 7.5,
            gruposDiversidade: []
        },
        {
            id: proximoIdVaga++,
            titulo: "Especialista em IA Generativa",
            empresa: "AI Innovations",
            categoria: "Tecnologia",
            localizacao: "Remoto",
            salario: "R$ 15.000 - R$ 25.000",
            descricao: "Oportunidade única para trabalhar com IA generativa e modelos de linguagem. Prepare-se para o futuro do trabalho!",
            requisitos: "Python, Machine Learning, Deep Learning, GPT, 5+ anos",
            areaEmergente: true,
            economiaVerde: false,
            inclusiva: true,
            indiceBemEstar: 9.0,
            gruposDiversidade: ["Mulheres em Tech", "Pessoas com Deficiência"]
        },
        {
            id: proximoIdVaga++,
            titulo: "Arquiteto de Soluções em Metaverso",
            empresa: "MetaTech",
            categoria: "Tecnologia",
            localizacao: "São Paulo",
            salario: "R$ 12.000 - R$ 18.000",
            descricao: "Desenvolva ambientes imersivos e soluções para o metaverso. Área emergente com grande potencial!",
            requisitos: "Unity, Unreal Engine, VR/AR, 3D, 4+ anos",
            areaEmergente: true,
            economiaVerde: false,
            inclusiva: false,
            indiceBemEstar: 8.5,
            gruposDiversidade: []
        },
        {
            id: proximoIdVaga++,
            titulo: "Especialista em Sustentabilidade Corporativa",
            empresa: "GreenCorp",
            categoria: "Sustentabilidade",
            localizacao: "São Paulo",
            salario: "R$ 7.000 - R$ 10.000",
            descricao: "Implemente práticas ESG e desenvolva estratégias de sustentabilidade. Faça parte da economia verde!",
            requisitos: "ESG, Sustentabilidade, Gestão Ambiental, 3+ anos",
            areaEmergente: false,
            economiaVerde: true,
            inclusiva: false,
            indiceBemEstar: 9.5,
            gruposDiversidade: []
        },
        {
            id: proximoIdVaga++,
            titulo: "Engenheiro de Energias Renováveis",
            empresa: "SolarPower",
            categoria: "Engenharia",
            localizacao: "Brasília",
            salario: "R$ 9.000 - R$ 13.000",
            descricao: "Projete e implemente soluções de energia solar e eólica. Contribua para um futuro sustentável!",
            requisitos: "Engenharia, Energias Renováveis, Projetos, 4+ anos",
            areaEmergente: true,
            economiaVerde: true,
            inclusiva: false,
            indiceBemEstar: 8.0,
            gruposDiversidade: []
        },
        {
            id: proximoIdVaga++,
            titulo: "Desenvolvedor Júnior - Programa de Diversidade",
            empresa: "TechInclusive",
            categoria: "Tecnologia",
            localizacao: "Remoto",
            salario: "R$ 4.000 - R$ 6.000",
            descricao: "Programa especial para grupos subrepresentados. Oferecemos mentoria e desenvolvimento de carreira!",
            requisitos: "Lógica de programação, vontade de aprender, disponibilidade para treinamento",
            areaEmergente: false,
            economiaVerde: false,
            inclusiva: true,
            indiceBemEstar: 9.0,
            gruposDiversidade: ["Mulheres", "Pessoas Negras", "LGBTQIA+", "Pessoas com Deficiência"]
        },
        {
            id: proximoIdVaga++,
            titulo: "Product Manager",
            empresa: "WellnessTech",
            categoria: "Produto",
            localizacao: "Remoto",
            salario: "R$ 11.000 - R$ 16.000",
            descricao: "Empresa focada em bem-estar dos colaboradores. Flexibilidade total, foco em resultados!",
            requisitos: "Product Management, Agile, 5+ anos",
            areaEmergente: false,
            economiaVerde: false,
            inclusiva: false,
            indiceBemEstar: 9.8,
            gruposDiversidade: []
        }
    ];
}

function atualizarFiltros() {
    const categorias = [...new Set(vagas.map(v => v.categoria))];
    const localizacoes = [...new Set(vagas.map(v => v.localizacao))];
    
    const selectCategoria = document.getElementById('filtro-categoria');
    const selectLocalizacao = document.getElementById('filtro-localizacao');
    
    if (selectCategoria) {
        selectCategoria.innerHTML = '<option value="">Todas as categorias</option>';
        categorias.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            selectCategoria.appendChild(option);
        });
    }
    
    if (selectLocalizacao) {
        selectLocalizacao.innerHTML = '<option value="">Todas as localizações</option>';
        localizacoes.forEach(loc => {
            const option = document.createElement('option');
            option.value = loc;
            option.textContent = loc;
            selectLocalizacao.appendChild(option);
        });
    }
    
    const rangeBemEstar = document.getElementById('filtro-bemestar');
    const valueBemEstar = document.getElementById('bemestar-value');
    if (rangeBemEstar && valueBemEstar) {
        rangeBemEstar.addEventListener('input', (e) => {
            valueBemEstar.textContent = e.target.value;
        });
    }
}

function atualizarVagas() {
    const container = document.getElementById('vagas-lista');
    if (!container) return;
    
    container.innerHTML = '';
    
    vagas.forEach(vaga => {
        container.appendChild(criarCardVaga(vaga));
    });
}

function criarCardVaga(vaga) {
    const card = document.createElement('div');
    card.className = 'vaga-card';
    if (vaga.areaEmergente) card.classList.add('emergente');
    if (vaga.economiaVerde) card.classList.add('verde');
    if (vaga.inclusiva) card.classList.add('inclusiva');
    
    let badgesHTML = '';
    if (vaga.areaEmergente) badgesHTML += '<span class="badge badge-emergente">🚀 Área Emergente</span>';
    if (vaga.economiaVerde) badgesHTML += '<span class="badge badge-verde">🌱 Economia Verde</span>';
    if (vaga.inclusiva) badgesHTML += '<span class="badge badge-inclusiva">🤝 Inclusiva</span>';
    
    card.innerHTML = `
        <div class="vaga-header">
            <div>
                <h3 class="vaga-titulo">${vaga.titulo}</h3>
                <p class="vaga-empresa">${vaga.empresa}</p>
            </div>
        </div>
        <div class="vaga-badges">${badgesHTML}</div>
        <div class="vaga-info">
            <span><i class="fas fa-map-marker-alt"></i> ${vaga.localizacao}</span>
            <span><i class="fas fa-tag"></i> ${vaga.categoria}</span>
            ${vaga.salario ? `<span><i class="fas fa-dollar-sign"></i> ${vaga.salario}</span>` : ''}
        </div>
        <div class="bemestar-indicator">
            <span>💚 Bem-estar:</span>
            <div class="bemestar-bar">
                <div class="bemestar-fill" style="width: ${vaga.indiceBemEstar * 10}%"></div>
            </div>
            <span>${vaga.indiceBemEstar.toFixed(1)}/10</span>
        </div>
    `;
    
    card.addEventListener('click', () => mostrarDetalhesVaga(vaga));
    return card;
}

function mostrarDetalhesVaga(vaga) {
    vagaSelecionada = vaga;
    const modal = document.getElementById('modal-detalhes');
    const content = document.getElementById('detalhes-vaga-content');
    
    if (!modal || !content) return;
    
    let badgesHTML = '';
    if (vaga.areaEmergente) badgesHTML += '<span class="badge badge-emergente">🚀 Área Emergente</span>';
    if (vaga.economiaVerde) badgesHTML += '<span class="badge badge-verde">🌱 Economia Verde</span>';
    if (vaga.inclusiva) badgesHTML += '<span class="badge badge-inclusiva">🤝 Inclusiva</span>';
    
    content.innerHTML = `
        <h2>${vaga.titulo}</h2>
        <p class="vaga-empresa" style="font-size: 1.2rem; margin-bottom: 1rem;">${vaga.empresa}</p>
        <div class="vaga-badges" style="margin-bottom: 1.5rem;">${badgesHTML}</div>
        <div class="vaga-info" style="margin-bottom: 1.5rem;">
            <span><i class="fas fa-map-marker-alt"></i> ${vaga.localizacao}</span>
            <span><i class="fas fa-tag"></i> ${vaga.categoria}</span>
            ${vaga.salario ? `<span><i class="fas fa-dollar-sign"></i> ${vaga.salario}</span>` : ''}
        </div>
        <div class="bemestar-indicator" style="margin-bottom: 1.5rem;">
            <span>💚 Índice de Bem-estar:</span>
            <div class="bemestar-bar">
                <div class="bemestar-fill" style="width: ${vaga.indiceBemEstar * 10}%"></div>
            </div>
            <span>${vaga.indiceBemEstar.toFixed(1)}/10</span>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h3>Descrição</h3>
            <p>${vaga.descricao}</p>
        </div>
        ${vaga.requisitos ? `
        <div style="margin-bottom: 1.5rem;">
            <h3>Requisitos</h3>
            <p>${vaga.requisitos}</p>
        </div>
        ` : ''}
        ${vaga.gruposDiversidade.length > 0 ? `
        <div>
            <h3>Grupos de Diversidade</h3>
            <div class="tags">
                ${vaga.gruposDiversidade.map(g => `<span class="tag">${g}</span>`).join('')}
            </div>
        </div>
        ` : ''}
    `;
    
    const btnCandidatar = document.getElementById('btn-candidatar');
    if (btnCandidatar) {
        btnCandidatar.style.display = 'block';
    }
    modal.classList.add('active');
}

function aplicarFiltros() {
    const termo = document.getElementById('busca-termo')?.value.toLowerCase() || '';
    const categoria = document.getElementById('filtro-categoria')?.value || '';
    const localizacao = document.getElementById('filtro-localizacao')?.value || '';
    const emergente = document.getElementById('filtro-emergente')?.checked || false;
    const verde = document.getElementById('filtro-verde')?.checked || false;
    const inclusiva = document.getElementById('filtro-inclusiva')?.checked || false;
    const bemEstar = parseFloat(document.getElementById('filtro-bemestar')?.value || '0');
    
    const container = document.getElementById('vagas-lista');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filtradas = vagas.filter(vaga => {
        const matchTermo = !termo || 
            vaga.titulo.toLowerCase().includes(termo) ||
            vaga.empresa.toLowerCase().includes(termo) ||
            vaga.descricao.toLowerCase().includes(termo);
        
        const matchCategoria = !categoria || vaga.categoria === categoria;
        const matchLocalizacao = !localizacao || vaga.localizacao === localizacao;
        const matchEmergente = !emergente || vaga.areaEmergente;
        const matchVerde = !verde || vaga.economiaVerde;
        const matchInclusiva = !inclusiva || vaga.inclusiva;
        const matchBemEstar = vaga.indiceBemEstar >= bemEstar;
        
        return matchTermo && matchCategoria && matchLocalizacao && 
               matchEmergente && matchVerde && matchInclusiva && matchBemEstar;
    });
    
    filtradas.forEach(vaga => {
        container.appendChild(criarCardVaga(vaga));
    });
    
    if (filtradas.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--gray);">Nenhuma vaga encontrada.</p>';
    }
}

function buscarVagasIA() {
    const container = document.getElementById('vagas-lista');
    if (!container) return;
    
    container.innerHTML = '<h3 style="margin-bottom: 1rem;">🤖 Recomendações Personalizadas de IA</h3>';
    
    // Simulação de recomendações (em produção viria de um algoritmo de IA)
    const recomendacoes = vagas.filter(v => v.areaEmergente || v.economiaVerde || v.inclusiva).slice(0, 5);
    
    if (recomendacoes.length === 0) {
        container.innerHTML += '<p>Nenhuma recomendação encontrada.</p>';
        return;
    }
    
    recomendacoes.forEach(vaga => {
        container.appendChild(criarCardVaga(vaga));
    });
}

function explorarAreasEmergentes() {
    const container = document.getElementById('vagas-lista');
    if (!container) return;
    
    container.innerHTML = '<h3 style="margin-bottom: 1rem;">🚀 Áreas Emergentes</h3>';
    
    const emergentes = vagas.filter(v => v.areaEmergente);
    emergentes.forEach(vaga => {
        container.appendChild(criarCardVaga(vaga));
    });
}

function explorarEconomiaVerde() {
    const container = document.getElementById('vagas-lista');
    if (!container) return;
    
    container.innerHTML = '<h3 style="margin-bottom: 1rem;">🌱 Economia Verde</h3>';
    
    const verdes = vagas.filter(v => v.economiaVerde);
    verdes.forEach(vaga => {
        container.appendChild(criarCardVaga(vaga));
    });
}

function explorarVagasInclusivas() {
    const container = document.getElementById('vagas-lista');
    if (!container) return;
    
    container.innerHTML = '<h3 style="margin-bottom: 1rem;">🤝 Vagas Inclusivas</h3>';
    
    const inclusivas = vagas.filter(v => v.inclusiva);
    inclusivas.forEach(vaga => {
        container.appendChild(criarCardVaga(vaga));
    });
}

function showCadastrarVaga() {
    const modal = document.getElementById('modal-vaga');
    if (!modal) return;
    
    modal.classList.add('active');
    
    const inclusivaCheck = document.getElementById('vaga-inclusiva');
    const gruposDiv = document.getElementById('grupos-diversidade-group');
    
    if (inclusivaCheck && gruposDiv) {
        inclusivaCheck.addEventListener('change', (e) => {
            gruposDiv.style.display = e.target.checked ? 'block' : 'none';
        });
    }
}

function cadastrarVaga(event) {
    event.preventDefault();
    
    const novaVaga = {
        id: proximoIdVaga++,
        titulo: document.getElementById('vaga-titulo').value,
        empresa: document.getElementById('vaga-empresa').value,
        categoria: document.getElementById('vaga-categoria').value,
        localizacao: document.getElementById('vaga-localizacao').value,
        salario: document.getElementById('vaga-salario').value,
        descricao: document.getElementById('vaga-descricao').value,
        requisitos: document.getElementById('vaga-requisitos').value,
        areaEmergente: document.getElementById('vaga-emergente').checked,
        economiaVerde: document.getElementById('vaga-verde').checked,
        inclusiva: document.getElementById('vaga-inclusiva').checked,
        indiceBemEstar: parseFloat(document.getElementById('vaga-bemestar').value),
        gruposDiversidade: document.getElementById('vaga-grupos').value
            ? document.getElementById('vaga-grupos').value.split(',').map(g => g.trim())
            : []
    };
    
    vagas.push(novaVaga);
    document.getElementById('form-vaga').reset();
    closeModal('modal-vaga');
    atualizarVagas();
    atualizarFiltros();
    
    alert('Vaga cadastrada com sucesso!');
}

function candidatarVaga() {
    if (!vagaSelecionada) return;
    
    alert(`Candidatura enviada com sucesso!\n\nVaga: ${vagaSelecionada.titulo}\nEmpresa: ${vagaSelecionada.empresa}\n\nEm breve entraremos em contato!`);
    closeModal('modal-detalhes');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

