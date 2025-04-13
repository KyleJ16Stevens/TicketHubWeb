document.getElementById("ticketForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.concertId = parseInt(data.concertId);
    data.quantity = parseInt(data.quantity);
  
    const responseMsg = document.getElementById("responseMsg");
    responseMsg.textContent = "Sending...";
  
    try {
      const res = await fetch("https://w0264937tickethub-api-bcadc6g0fvehbscz.canadacentral-01.azurewebsites.net/api/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const text = await res.text();
      responseMsg.textContent = res.ok ? "✅ " + text : "❌ " + text;
    } catch (err) {
      responseMsg.textContent = "❌ Network error. Try again later.";
    }
  });