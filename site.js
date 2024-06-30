function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, val] = cookie.split('=');
        return key === name ? decodeURIComponent(val) : acc;
    }, '');
}

document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

const chat = new Chat('wss://chatting.api.mjdawson.net:1026');

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (message !== '') {
        input.value = '';
        chat.sendMessage(message);
    }
}

chat.newMessage((message) => {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
});


function toggleTheme() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    setCookie('theme', currentTheme, 365);
}

// Initialize theme based off cookie
const savedTheme = getCookie('theme') || 'dark';
document.body.classList.add(savedTheme);