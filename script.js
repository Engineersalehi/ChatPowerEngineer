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
    let message = messageInput.value.trim();
    
    if (message !== "") {
        let chatBox = document.getElementById("chat-box");
        let userMessage = document.createElement("div");
        userMessage.textContent = "🧑‍💻 شما: " + message;
        chatBox.appendChild(userMessage);

        // ارسال پیام به ChatGPT API
        fetch(`https://api.chatanywhere.tech/v1/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_API_KEY"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: message }]
            })
        })
        .then(response => response.json())
        .then(data => {
            let botMessage = document.createElement("div");
            botMessage.textContent = "🤖 هوش مصنوعی: " + data.choices[0].message.content;
            chatBox.appendChild(botMessage);
        })
        .catch(error => {
            let errorMessage = document.createElement("div");
            errorMessage.textContent = "❌ خطا در ارتباط با هوش مصنوعی!";
            chatBox.appendChild(errorMessage);
        });

        messageInput.value = "";
    }
}
