// Mobile menu toggle (for future expansion)
document.addEventListener('DOMContentLoaded', function() {
    // Chatbot functionality
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWidget = document.getElementById('chatbotWidget');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const userInput = document.getElementById('userInput');
    const sendMessage = document.getElementById('sendMessage');
    
    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', function() {
        chatbotWidget.classList.toggle('active');
    });
    
    closeChatbot.addEventListener('click', function() {
        chatbotWidget.classList.remove('active');
    });
    
    // Initial bot message
    addBotMessage("Bonjour ! Je suis l'assistant virtuel de ProtecDépannage. Comment puis-je vous aider aujourd'hui ? Voici quelques questions fréquentes :\n\n1. Quels sont vos horaires d'intervention ?\n2. Combien coûte une intervention standard ?\n3. Comment prendre rendez-vous ?");
    
    // Send message on button click or Enter key
    sendMessage.addEventListener('click', sendUserMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
    
    function sendUserMessage() {
        const message = userInput.value.trim();
        if (message) {
            addUserMessage(message);
            userInput.value = '';
            
            // Simple chatbot responses
            setTimeout(() => {
                if (message.toLowerCase().includes('horaire') || message.toLowerCase().includes('disponible')) {
                    addBotMessage("Nous intervenons 7j/7 de 8h à 20h pour les urgences. Pour les rendez-vous programmés, nous nous adaptons à votre disponibilité.");
                } else if (message.toLowerCase().includes('prix') || message.toLowerCase().includes('coût') || message.toLowerCase().includes('tarif')) {
                    addBotMessage("Nos tarifs varient selon la nature de l'intervention. Un diagnostic gratuit peut être effectué pour vous fournir un devis précis. Contactez-nous au +243 976 660 385 pour plus d'informations.");
                } else if (message.toLowerCase().includes('prendre rendez-vous') || message.toLowerCase().includes('contact')) {
                    addBotMessage("Vous pouvez nous contacter par téléphone au +243 976 660 385 ou par email à Protecdepannage695@gmail.com. Notre équipe est disponible pour répondre à vos questions et planifier une intervention.");
                } else if (message.toLowerCase().includes('service') || message.toLowerCase().includes('propose')) {
                    addBotMessage("Nous proposons une large gamme de services : électricité, serrurerie, menuiserie, petits travaux domestiques, services véhicules et services complémentaires. Consultez notre site pour la liste complète.");
                } else if (message.toLowerCase().includes('urgence') || message.toLowerCase().includes('urgent')) {
                    addBotMessage("Pour une intervention urgente, appelez-nous immédiatement au +243 976 660 385. Nous nous efforçons d'intervenir dans les plus brefs délais.");
                } else {
                    addBotMessage("Je ne suis pas sûr de comprendre votre demande. Pour une réponse plus précise, veuillez nous contacter directement par téléphone au +243 976 660 385 ou par email à Protecdepannage695@gmail.com.");
                }
            }, 500);
        }
    }
    
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user-message');
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();
    }
    
    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'bot-message');
        
        // Handle line breaks in the message
        const lines = message.split('\n');
        lines.forEach((line, index) => {
            if (index > 0) messageElement.appendChild(document.createElement('br'));
            messageElement.appendChild(document.createTextNode(line));
        });
        
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();
    }
    
    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Form submission
    const interventionForm = document.getElementById('interventionForm');
    if (interventionForm) {
        interventionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // In a real implementation, you would send this data to your server
            // For now, we'll simulate a successful submission
            alert(`Merci ${name}, votre demande d'intervention pour ${service} a été envoyée. Nous vous contacterons rapidement au ${phone} ou par email à ${email}.`);
            
            // Reset form
            interventionForm.reset();
            
            // Redirect to contact info (as requested)
            window.location.href = "mailto:Protecdepannage695@gmail.com";
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});