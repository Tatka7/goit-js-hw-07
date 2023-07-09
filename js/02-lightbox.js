import { galleryItems } from "./gallery-items.js";

const galleryBoxEl = document.querySelector(".gallery");

function createListItemsMarkup(obj) {
  return obj
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");
}

galleryBoxEl.innerHTML = createListItemsMarkup(galleryItems);

let gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  scrollZoom: false,
  captionType: "attr",
  captionSelector: "img",
  captionsData: "alt",
  docClose: false,
});