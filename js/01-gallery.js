import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryEl = document.querySelector(".gallery");

console.log(galleryItems);

const createCard = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
    </a>
    </li>`
);

galleryEl.insertAdjacentHTML("beforeend", createCard.join(""));

galleryEl.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="600" height="400">
`);
  //   window.close(escape);
  instance.show();
}
