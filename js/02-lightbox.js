import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
list.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createMarkup(items) {
  return items
    .map(
      (item) => `<li class="gallery__item">
   <a class="gallery__link" href=${item.original}>
      <img class="gallery__image" src=${item.preview} alt=${item.description}/>
   </a>
</li>`
    )
    .join("");
}
