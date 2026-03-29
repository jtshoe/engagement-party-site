console.log("script loaded");

const form = document.getElementById("rsvp-form");
const message = document.getElementById("message");

console.log("form found?", !!form);
console.log("message found?", !!message);
// const form = document.getElementById("rsvp-form");
// const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  message.textContent = "Submitting...";

  const payload = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    attending_count: Number(document.getElementById("attending_count").value),
    notes: document.getElementById("notes").value.trim(),
    send_confirmation: document.getElementById("send_confirmation").checked,
  };

  console.log("Submitting payload:", payload);

  try {
    const response = await fetch("https://yvnglehhsgspknhgqiki.supabase.co/functions/v1/confirmation-emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  const form = document.getElementById("rsvp-form");
  const message = document.getElementById("message");

  console.log("form found?", !!form);
  console.log("message found?", !!message);

  if (!form || !message) {
    console.error("Missing form or message element");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("submit handler running");

    message.textContent = "Submitting...";

    const payload = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      attending_count: Number(document.getElementById("attending_count").value),
      notes: document.getElementById("notes").value.trim(),
      send_confirmation: document.getElementById("send_confirmation").checked,
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await fetch("https://yvnglehhsgspknhgqiki.supabase.co/functions/v1/confirmation-emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("raw status:", response.status);

      const data = await response.json();
      console.log("Response:", data);

      if (!response.ok) {
        throw new Error(data.error || "Submission failed.");
      }

      message.textContent = "Thanks! RSVP submitted.";
      form.reset();
    } catch (err) {
      console.error(err);
      message.textContent = `Error: ${err.message}`;
    }
  });
});
    const data = await response.json();
    console.log("Response:", data);

    if (!response.ok) {
      throw new Error(data.error || "Submission failed.");
    }

    message.textContent = "Thanks! RSVP submitted.";
    form.reset();
  } catch (err) {
    console.error(err);
    message.textContent = `Error: ${err.message}`;
  }
});