import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

const instance = basicLightbox.create(` <img src=''>`, {
  onShow: () => {
    document.addEventListener("keydown", onEscPress);
  },
  onClose: () => {
    document.removeEventListener("keydown", onEscPress);
  },
});

list.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
list.addEventListener("click", selectImage);

function createMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class=gallery__item><a class=gallery__link href=${original}><img class='gallery__image' src=${preview} alt=${description} data-source=${original}></a></li>`
    )
    .join("");
}

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
