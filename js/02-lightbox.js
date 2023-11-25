import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (item) => `<li class="gallery__item">
   <a class="gallery__link" href=${item.original}>
      <img class="gallery__image" src=${item.preview} alt=${item.description}/>
   </a>
</li>`
  )
  .join("");
list.insertAdjacentHTML("afterbegin", markup);
const lightbox = new SimpleLightbox(".gallery a");
lightbox.defaultOptions.captionsData = "alt";
lightbox.defaultOptions.captionDelay = 250;
