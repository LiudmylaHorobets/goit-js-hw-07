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

// підключаємо модалку
galleryContainer.addEventListener("click", onItemClick);

const instance = basicLightbox.create(
  `
<img src="" width="900" height="auto" >`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscKeyPress);
    },
  }
);

function onItemClick(e) {
  e.preventDefault();
  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector("img").src = datasetSource;
  instance.show();
}

function onEscKeyPress(e) {
  if (e.code !== "Escape") return;
  instance.close();
}