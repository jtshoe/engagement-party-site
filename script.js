const form = document.getElementById("rsvp-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  message.textContent = "Submitting RSVP...";

  const payload = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    attending_count: Number(document.getElementById("attending_count").value),
    notes: document.getElementById("notes").value.trim(),
    send_confirmation: document.getElementById("send_confirmation").checked,
  };

  try {
    const response = await fetch("YOUR_DEPLOYED_FUNCTION_URL_HERE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    message.textContent = "Thanks! Your RSVP has been received.";
    form.reset();
  } catch (err) {
    message.textContent = `Error: ${err.message}`;
  }
});