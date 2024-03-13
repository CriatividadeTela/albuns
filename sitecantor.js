function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}


function submitForm() {
    alert("O formulário foi enviado com sucesso!");
}

document.querySelectorAll('.grow').forEach(item => {
    item.addEventListener('click', event => {

        const url = item.getAttribute('src');
        openInNewTab(url);
    });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    submitForm();
});