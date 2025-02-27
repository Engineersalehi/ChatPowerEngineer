document.getElementById("fileInput").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let chatBox = document.getElementById("chat-box");
        let fileMessage = document.createElement("div");
        fileMessage.textContent = "📎 فایل آپلود شد: " + file.name;
        chatBox.appendChild(fileMessage);
    }
});

function sendMessage() {
    let messageInput = document.getElementById("messageInput");
    let message = messageInput.value;
    if (message.trim() !== "") {
        let chatBox = document.getElementById("chat-box");
        let newMessage = document.createElement("div");
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        messageInput.value = "";
    }
}
