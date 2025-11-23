// Validação do Formulário de Contato
function validarFormulario(event) {
    event.preventDefault();
    
    // Limpar mensagens de erro anteriores
    limparErros();
    
    // Obter valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    let temErro = false;
    
    // Validar Nome
    if (nome === '') {
        mostrarErro('nome', 'O nome é obrigatório');
        temErro = true;
    } else if (nome.length < 3) {
        mostrarErro('nome', 'O nome deve ter pelo menos 3 caracteres');
        temErro = true;
    }
    
    // Validar Email
    if (email === '') {
        mostrarErro('email', 'O e-mail é obrigatório');
        temErro = true;
    } else if (!validarEmail(email)) {
        mostrarErro('email', 'E-mail inválido');
        temErro = true;
    }
    
    // Validar Mensagem
    if (mensagem === '') {
        mostrarErro('mensagem', 'A mensagem é obrigatória');
        temErro = true;
    } else if (mensagem.length < 10) {
        mostrarErro('mensagem', 'A mensagem deve ter pelo menos 10 caracteres');
        temErro = true;
    }
    
    // Se não houver erros, enviar formulário
    if (!temErro) {
        // Simular envio
        const form = document.getElementById('contatoForm');
        form.reset();
        
        const successMessage = document.getElementById('form-success');
        successMessage.style.display = 'block';
        
        // Ocultar mensagem após 5 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
        
        // Scroll para a mensagem de sucesso
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function mostrarErro(campoId, mensagem) {
    const campo = document.getElementById(campoId);
    const errorSpan = document.getElementById(campoId + '-error');
    
    if (campo && errorSpan) {
        campo.style.borderColor = '#ef4444';
        errorSpan.textContent = mensagem;
        errorSpan.style.display = 'block';
    }
}

function limparErros() {
    const campos = ['nome', 'email', 'assunto', 'mensagem'];
    
    campos.forEach(campoId => {
        const campo = document.getElementById(campoId);
        const errorSpan = document.getElementById(campoId + '-error');
        
        if (campo) {
            campo.style.borderColor = '';
        }
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.style.display = 'none';
        }
    });
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Limpar erros ao digitar
document.addEventListener('DOMContentLoaded', () => {
    const campos = ['nome', 'email', 'mensagem'];
    
    campos.forEach(campoId => {
        const campo = document.getElementById(campoId);
        if (campo) {
            campo.addEventListener('input', () => {
                const errorSpan = document.getElementById(campoId + '-error');
                if (errorSpan) {
                    errorSpan.textContent = '';
                    errorSpan.style.display = 'none';
                }
                campo.style.borderColor = '';
            });
        }
    });
});

