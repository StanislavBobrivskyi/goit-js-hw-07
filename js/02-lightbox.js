import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const createCard = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
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
}
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
