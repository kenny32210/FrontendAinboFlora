
  document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatBox = document.getElementById('chatBox');
    const closeChat = document.getElementById('closeChat');
    const sendMessage = document.getElementById('sendMessage');
    const userMessage = document.getElementById('userMessage');
    const chatMessages = document.getElementById('chatMessages');
    
    // Mostrar/ocultar chat
    chatButton.addEventListener('click', function() {
      chatBox.style.display = 'flex';
    });
    
    closeChat.addEventListener('click', function() {
      chatBox.style.display = 'none';
    });
    
    // Enviar mensaje
    sendMessage.addEventListener('click', function() {
      const message = userMessage.value.trim();
      if (message) {
        // Agregar mensaje del usuario
        addMessage('Tú', message, 'user');
        userMessage.value = '';
        
        // Respuesta automática (simulada)
        setTimeout(() => {
          addMessage('Soporte AinboFlora', 'Gracias por tu mensaje. ¿En qué podemos ayudarte?', 'support');
        }, 1000);
      }
    });
    
    // Enviar con Enter
    userMessage.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage.click();
      }
    });
    
    function addMessage(sender, text, type) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message', type);
      messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
