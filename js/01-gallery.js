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

galleryContainer.addEventListener("click", onItemClick);

function onItemClick(e) {
  e.preventDefault();
  if (e.target.tagName === "IMG") {
    const itemLink = e.target;
    const instance = basicLightbox.create(`
      <img src="${itemLink.dataset.source}" width="800" height="auto">
    `);

    instance.show();
  }
}
galleryContainer.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    basicLightbox.close();
  }
});
