const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const fileInput = document.getElementById("file-input");

// ⬇ API Key را اینجا قرار دهید!
const API_KEY  =  sk-svcacct-n3rnUdEW14bx0Gu2meHbEaRwx5O6A9Bm_OeZxg8chIbT96FMuAgDccMDZSfoh0sTxGT3BBJFK GH8kyz2Qssg2FFIQFq3P4xrQAGH8kyz2Qssg2FFIQFq3P4xrQA
const API_Uرول  =  "https://api.openai.com/v1/chat/completions";  // مثال برای OpenAI

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    // نمایش پیام کاربر در چت
    appendMessage("👤 شما: " + message, "user");

    // ارسال درخواست به API
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo", // بسته به API شما تغییر دهید
            messages: [{ role: "user", content: message }]
        })
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = data.choices[0].message.content;
        appendMessage("🤖 ربات: " + botMessage, "bot");
    })
    .catch(error => {
        console.error("خطا:", error);
        appendMessage("❌ خطا در دریافت پاسخ از سرور", "error");
    });

    userInput.value = "";
}

// تابع نمایش پیام‌ها در چت
function appendMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
