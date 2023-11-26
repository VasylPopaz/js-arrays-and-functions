import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class=gallery__item><a class=gallery__link href=${original}><img class='gallery__image' src=${preview} alt=${description} data-source=${original}></a></li>`
  )
  .join("");
list.insertAdjacentHTML("afterbegin", markup);
list.addEventListener("click", selectImage);

const instance = basicLightbox.create(` <img src=''>`, {
  onShow: () => {
    document.addEventListener("keyup", onEscPress);
  },
  onClose: () => {
    document.removeEventListener("keyup", onEscPress);
  },
});

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
}

function onEscPress({ key }) {
  if (key === "Escape") {
    instance.close();
    return;
  }
}
