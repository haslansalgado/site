const form = document.getElementById('formContato');

form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios!');
    } else {
        alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
        form.reset();
    }
});

