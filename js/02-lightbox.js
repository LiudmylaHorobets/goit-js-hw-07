import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGallery(galleryItems);

// створюємо сітку
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              loading="lazy"
            />
          </a>
        </li>
      `;
    })
    .join("");
}

const simpLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
