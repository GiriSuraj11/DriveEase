const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Read input values
  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  // Create message object
  const contactData = {
    name,
    email,
    message,
    date: new Date().toLocaleString()
  };

  // Get existing messages or empty array
  const existingMessages =
    JSON.parse(localStorage.getItem("contactMessages")) || [];

  // Add new message
  existingMessages.push(contactData);

  // Save back to localStorage
  localStorage.setItem(
    "contactMessages",
    JSON.stringify(existingMessages)
  );

  // UI feedback
  successMsg.style.display = "block";
  form.reset();
});
