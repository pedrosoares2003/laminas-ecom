function showGallery(category, button) {
  const allGalleries = document.querySelectorAll(".showcase__gallery");
  const allButtons = document.querySelectorAll(".category-button");

  // Oculta todas as galerias
  allGalleries.forEach((gallery) => {
    gallery.style.display = "none";
  });

  // Exibe a galeria correspondente
  const activeGallery = document.querySelector(`.showcase__gallery--${category}`);
  if (activeGallery) {
    activeGallery.style.display = "flex";
  }

  // Remove a classe "active" de todos os botões
  allButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  // Adiciona a classe "active" ao botão clicado
  button.classList.add("active");
}
