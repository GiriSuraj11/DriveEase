const carsGrid = document.getElementById("carsGrid");
const filter = document.getElementById("typeFilter");

function renderCars(list) {
  carsGrid.innerHTML = "";

  list.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card"; 

    card.innerHTML = `
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>${car.type}</p>
      <p>₹${car.price} / day</p>
      <button onclick="viewDetails('${car.id}')">View Details</button>
    `;

    carsGrid.appendChild(card);
  });
}

renderCars(carsData);

filter.addEventListener("change", () => {
  const value = filter.value;
  if (value === "all") {
    renderCars(carsData);
  } else {
    renderCars(carsData.filter(car => car.type === value));
  }
});

function viewDetails(id) {
  window.location.href = `car-details.html?id=${id}`;
}
