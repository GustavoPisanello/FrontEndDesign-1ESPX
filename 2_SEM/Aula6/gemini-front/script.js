let inputMessage = document.getElementById('message');

let chatLog = document.getElementById('chat-log');

let messages = [];

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let messageText = inputMessage.value;

    let newMessageChatbot = {
        'role': 'user',
        'parts': [{text: messageText}]
    };

    messages.push(newMessageChatbot);

    inputMessage.value = '';

    console.log(messages);

    let messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add('message--sent');
    messageElement.innerHTML = `<div class='message__text'>${messageText}</div>`;

    chatLog.appendChild(messageElement);

    fetch('http://localhost:3000/sendMessage/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages
        })
    }).then(res => res.json());
});