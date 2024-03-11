// Função para abrir links em uma nova aba
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

// Função para lidar com o envio do formulário de contato
function submitForm() {
    // Aqui você pode adicionar o código para lidar com o envio do formulário
    // Por exemplo, você pode usar AJAX para enviar os dados para o servidor
    // e exibir uma mensagem de confirmação para o usuário.
    alert("O formulário foi enviado com sucesso!");
}

// Evento de clique para links de imagens
document.querySelectorAll('.grow').forEach(item => {
    item.addEventListener('click', event => {
        // Obtém o URL do atributo href do elemento pai 'a'
        const url = item.parentElement.getAttribute('href');
        // Chama a função para abrir o link em uma nova aba
        openInNewTab(url);
    });
});

// Evento de envio do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Evita o comportamento padrão de envio do formulário
    event.preventDefault();
    // Chama a função para lidar com o envio do formulário
    submitForm();
});