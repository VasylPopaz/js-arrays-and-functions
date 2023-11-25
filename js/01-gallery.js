import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (item) =>
      `<li class=gallery__item><a class=gallery__link href=${item.original}><img class='gallery__image' src=${item.preview} alt=${item.preview} data-source=${item.original}></a></li>`
  )
  .join("");
list.insertAdjacentHTML("afterbegin", markup);
document.addEventListener("click", selectImage);
function selectImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const currentImg = event.target.dataset.source;
  const originalImg = galleryItems.find(
    (item) => item.original === currentImg
  ).original;
  const instance = basicLightbox.create(`
      <img src=${originalImg} >
  `);
  instance.show();
  document.addEventListener("keydown", ({ key }) => {
    if (key === "Escape") {
      instance.close();
    }
  });
}
