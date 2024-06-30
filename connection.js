class Chat{
    constructor(server){
        this.socket = new WebSocket(server);
    }

    newMessage(callback) {
        this.socket.addEventListener('message', (event) => {
            if (event.data instanceof Blob) {
                const reader = new FileReader();
                reader.onload = () => callback(reader.result);
                reader.readAsText(event.data);
            } else {
                callback(event.data);
            }
        });
    }

    sendMessage(message){
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        }
    }
}
