document.addEventListener("DOMContentLoaded", () => {
  let selectedProduct = {};

  // 1. Навешиваем обработчик на каждую кнопку “В корзину”
  document.querySelectorAll("[data-bs-target='#addToCartModal']").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      const title = card.querySelector(".card-title").innerText.trim();
      const description = card.querySelector(".card-text").innerText.trim();
      const price = parseInt(card.querySelector(".fw-semibold").innerText.replace("₽", "").trim());
      const img = card.querySelector("img").getAttribute("src");

      selectedProduct = { title, description, price, img };
      
      // Заполнить модалку
      document.getElementById("addToCartModalLabel").textContent = title;
      document.querySelector("#addToCartModal img").src = img;
    });
  });

  // 2. Обработка клика “Перейти в корзину”
  const goToCartBtn = document.getElementById("goToCartBtn");
  if (goToCartBtn) {
    goToCartBtn.addEventListener("click", () => {
      const size = document.querySelector("input[name='size']:checked")?.value || "S";

      const item = {
        ...selectedProduct,
        size,
        quantity: 1
      };

      // Получаем текущую корзину
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Проверка: товар с тем же названием и размером — увеличиваем
      const existingIndex = cart.findIndex(p => p.title === item.title && p.size === item.size);
      if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push(item);
      }

      // Сохраняем
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.href = "cart.html";
    });
  }
});