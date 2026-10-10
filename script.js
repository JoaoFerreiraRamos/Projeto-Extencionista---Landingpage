
const STORE_LINKS = {
  whatsappNumber: "5582993328814",
  whatsappMessage: "Olá! Conheci o catálogo de vocês pelo Instagram e gostaria de saber mais sobre as roupas fitness e os modelos disponíveis.",
  instagram: "", // Ex.: https://www.instagram.com/perfiloficial
};


const encodeWhatsAppMessage = (message) =>
  encodeURIComponent(message).replace(/[!'()*]/g, (character) =>
    `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
  );

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const message = link.dataset.message || STORE_LINKS.whatsappMessage;
  link.href = `https://wa.me/${STORE_LINKS.whatsappNumber}?text=${encodeWhatsAppMessage(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

if (STORE_LINKS.instagram) {
  document.querySelectorAll("[data-instagram]").forEach((link) => {
    link.href = STORE_LINKS.instagram;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}


const year = document.querySelector("#current-year");
if (year) year.textContent = new Date().getFullYear();
