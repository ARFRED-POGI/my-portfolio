// ── DARK MODE TOGGLE ──
const toggle = document.getElementById("darkToggle");
const profileImg = document.querySelector(".profile img");

toggle.onclick = () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.textContent = "☀️";
    if (profileImg) profileImg.src = "sleep.png";
  } else {
    toggle.textContent = "🌙";
    if (profileImg) profileImg.src = "profile.jpg";
  }
};

// ── CHAT COLLAPSE / EXPAND ──
const chatToggle = document.getElementById("chatToggle");
const chatBody   = document.getElementById("chatBody");
const chatInput  = document.querySelector(".chat-input");

chatToggle.onclick = () => {
  const collapsed = chatBody.classList.toggle("collapsed");
  chatInput.classList.toggle("collapsed", collapsed);
  chatToggle.textContent = collapsed ? "▴" : "▾";
};

// ── CHAT SEND ──
const chatSend  = document.getElementById("chatSend");
const chatField = document.getElementById("chatInput");

function sendMessage() {
  const text = chatField.value.trim();
  if (!text) return;

  // User bubble
  const msg = document.createElement("div");
  msg.classList.add("chat-msg", "sent");
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatField.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;

  // Auto reply
  setTimeout(() => {
    const reply = document.createElement("div");
    reply.classList.add("chat-msg");

    const lowerText = text.toLowerCase();

    if (lowerText.includes("you are not good") || lowerText.includes("you are bad")) {
      reply.textContent = "I'm still learning, I'm sorry 😊";
    } 
    else if (lowerText.includes("hello") || lowerText.includes("hi")) {
      reply.textContent = "Hello! How can I assist you today? 😊";
    } 
    else if (lowerText.includes("project")) {
      reply.textContent = "Feel free to explore my projects section for more details! 🚀";
    } 
    else {
      reply.textContent = "Thanks for your message! I'll get back to you soon. 😊";
    }

    chatBody.appendChild(reply);
    chatBody.scrollTop = chatBody.scrollHeight;

  }, 800);
}

// ✅ OUTSIDE the function (this was your error)
chatSend.onclick = sendMessage;

chatField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});