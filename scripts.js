// Quando o botão for clicado, mais informações sobre o tratamento são exibidas
document.getElementById('more-info-btn').addEventListener('click', function() {
    alert('O tratamento é gratuito pelo Sistema Único de Saúde (SUS) e deve ser seguido rigorosamente para evitar o desenvolvimento de formas resistentes da bactéria.');
});

// Formulário de contato
document.getElementById('contact-form').addEventListener('submit', function (e) { // Corrigido aqui
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validação simples
   
});

// Mostrar a caixa de dúvidas ao clicar no botão
document.getElementById("duvida-btn").addEventListener("click", function() {
    var duvidaBox = document.getElementById("duvida-box");
    duvidaBox.style.display = duvidaBox.style.display === "none" ? "block" : "none";
});

// Enviar a dúvida e mostrar mensagem de confirmação
document.getElementById("enviar-duvida").addEventListener("click", function() {
    var duvidaEnviada = document.getElementById("duvida-enviada");
    duvidaEnviada.style.display = "block";
});