const box = document.getElementById("confirmationBox");

// get booking data
const booking = JSON.parse(localStorage.getItem("booking"));

if (!booking) {
  box.innerHTML = "<p>No booking found.</p>";
} else {
  box.innerHTML = `
    <h2>Booking Confirmed 🎉</h2>

    <p><strong>Car:</strong> ${booking.carName}</p>
    <p><strong>City:</strong> ${booking.city}</p>
    <p><strong>Pickup Date:</strong> ${booking.pickupDate}</p>
    <p><strong>Drop Date:</strong> ${booking.dropDate}</p>
    <p><strong>Price per Day:</strong> ₹${booking.pricePerDay}</p>

    <hr>

    <p class="final-price">
      Total Amount: ₹${booking.totalPrice}
    </p>

    <button class="cta-btn" onclick="goHome()">
      Back to Home
    </button>
  `;
}

// clear booking if needed
function goHome() {
  localStorage.removeItem("booking");
  window.location.href = "index.html";
}


box.innerHTML = `
  <div class="success-icon">
    <svg viewBox="0 0 52 52">
      <circle cx="26" cy="26" r="25" fill="none"/>
      <path fill="none" d="M14 27 l7 7 l17 -17"/>
    </svg>
  </div>

  <h2>Booking Confirmed</h2>

  <p><strong>Car:</strong> ${booking.carName}</p>
  <p><strong>City:</strong> ${booking.city}</p>
  <p><strong>Pickup Date:</strong> ${booking.pickupDate}</p>
  <p><strong>Drop Date:</strong> ${booking.dropDate}</p>

  <hr>

  <p class="final-price">Total Amount: ₹${booking.totalPrice}</p>

  <button class="cta-btn" onclick="goHome()">Back to Home</button>
`;
