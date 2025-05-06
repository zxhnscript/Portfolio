document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
});

function sendEmail() {
    const templateParams = {
        to_name: "Gustavo",
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const messageDiv = document.getElementById("response-message");
    const responseText = document.getElementById("response-text");

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id: 'service_14n7zrc',
            template_id: 'template_zoyu8an',
            user_id: 'nVe61kbMK0Ug7lk2Y',
            template_params: templateParams
        })
    })
        .then(response => response.text())
        .then(data => {
            console.log("Resposta do servidor:", data);

            if (data === 'OK') {
                document.getElementById("contact-form").reset();
                messageDiv.classList.remove('alert-danger');
                messageDiv.classList.add('alert-success');
                responseText.innerHTML = "Mensagem enviada com sucesso!";
                messageDiv.style.display = "block";
            } else {
                messageDiv.classList.remove('alert-success');
                messageDiv.classList.add('alert-danger');
                responseText.innerHTML = "Erro ao enviar a mensagem. Tente novamente.";
                messageDiv.style.display = "block";
            }
        })
        .catch((error) => {
            console.error("Erro ao enviar e-mail:", error);
            messageDiv.classList.remove('alert-success');
            messageDiv.classList.add('alert-danger');
            responseText.innerHTML = "Erro ao enviar a mensagem. Tente novamente.";
            messageDiv.style.display = "block";
        });
}

function closeMessage() {
    const messageDiv = document.getElementById("response-message");
    messageDiv.style.display = "none";
}


const scrollToTopButton = document.getElementById('scrollToTop');

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

scrollToTopButton.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
