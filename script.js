document.addEventListener("DOMContentLoaded", () => {
  //upd
  function updateTotalPrice() {
    const totalPriceElement = document.querySelector(".total");
    const unitPrices = document.querySelectorAll(".unit-price");
    const quantities = document.querySelectorAll(".quantity");
    let total = 0;

    unitPrices.forEach((priceElement, index) => {
      const unitPrice = parseFloat(priceElement.textContent.replace("$", ""));
      const quantity = parseInt(quantities[index].textContent);
      total += unitPrice * quantity;
    });

    totalPriceElement.textContent = `${total} $`;
  }

  // + a -
  document
    .querySelectorAll(".fa-plus-circle, .fa-minus-circle")
    .forEach((button) => {
      button.addEventListener("click", (e) => {
        const quantityElement =
          e.target.parentElement.querySelector(".quantity");
        let quantity = parseInt(quantityElement.textContent);

        if (e.target.classList.contains("fa-plus-circle")) {
          quantity += 1;
        } else if (
          e.target.classList.contains("fa-minus-circle") &&
          quantity > 0
        ) {
          quantity -= 1;
        }

        quantityElement.textContent = quantity;
        updateTotalPrice();
      });
    });

  // delete
  document.querySelectorAll(".fa-trash-alt").forEach((trashIcon) => {
    trashIcon.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      card.remove();
      updateTotalPrice();
    });
  });

  // like
  document.querySelectorAll(".fa-heart").forEach((heartIcon) => {
    heartIcon.addEventListener("click", (e) => {
      e.target.classList.toggle("liked");
      e.target.style.color = e.target.classList.contains("liked")
        ? "red"
        : "black";
    });
  });

  updateTotalPrice();
});
