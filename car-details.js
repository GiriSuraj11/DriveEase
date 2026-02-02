const container = document.getElementById("carDetails");

// get id from URL
const params = new URLSearchParams(window.location.search);
const carId = params.get("id");

// find matching car
const car = carsData.find(item => item.id === carId);

// if car not found
if (!car) {
    container.innerHTML = "<p>Car not found.</p>";
} else {
    container.innerHTML = `
    <img src="${car.image}" alt="${car.name}" class="car-detail-img">

    <div class="car-info">
      <h2>${car.name}</h2>
      <p><strong>Type:</strong> ${car.type}</p>
      <p><strong>Price:</strong> ₹${car.price} / day</p>

      <p>
        Comfortable, well-maintained vehicle suitable for city and highway travel.
      </p>

      <button class="cta-btn" onclick="goToBooking('${car.id}')">
  Proceed to Booking
</button>

    </div>
  `;

  function goToBooking(id) {
  window.location.href = `booking.html?id=${id}`;
}

}



