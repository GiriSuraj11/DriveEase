const carInfoDiv = document.getElementById("bookingCarInfo");
const pickupInput = document.getElementById("pickupDate");
const dropInput = document.getElementById("dropDate");
const totalPriceEl = document.getElementById("totalPrice");
const form = document.getElementById("bookingForm");

// get car id from URL
const params = new URLSearchParams(window.location.search);
const carId = params.get("id");

// find car
const car = carsData.find(item => item.id === carId);

if (!car) {
  carInfoDiv.innerHTML = "<p>Car not found.</p>";
} else {
  carInfoDiv.innerHTML = `
    <h3>${car.name}</h3>
    <p>₹${car.price} / day</p>
  `;
}

// calculate price
function calculatePrice() {
  const pickup = new Date(pickupInput.value);
  const drop = new Date(dropInput.value);

  if (pickupInput.value && dropInput.value && drop > pickup) {
    const days =
      (drop - pickup) / (1000 * 60 * 60 * 24);
    totalPriceEl.textContent = days * car.price;
  } else {
    totalPriceEl.textContent = 0;
  }
}

pickupInput.addEventListener("change", calculatePrice);
dropInput.addEventListener("change", calculatePrice);

// submit booking
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (totalPriceEl.textContent === "0") {
    alert("Please select valid dates.");
    return;
  }

  const bookingData = {
    carId: car.id,
    carName: car.name,
    pricePerDay: car.price,
    pickupDate: pickupInput.value,
    dropDate: dropInput.value,
    city: document.getElementById("city").value,
    totalPrice: totalPriceEl.textContent
  };

  localStorage.setItem("booking", JSON.stringify(bookingData));
  window.location.href = "confirmation.html";
});
