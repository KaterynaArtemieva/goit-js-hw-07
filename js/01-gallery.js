import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const marcup = galleryItems
  .map(({ preview, description, original }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");
galleryList.insertAdjacentHTML("beforeend", marcup);

galleryList.addEventListener("click", onGalleryElClick);

function onGalleryElClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.value !== "gallery__image") {
    return;
  }
  const selectImgOriginalUrl = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `
 <div><img src="${selectImgOriginalUrl}" alt="${evt.target.alt}" width="1000"></div>
 `,
    {
      onShow: () => {
        window.addEventListener("keydown", onInstanceKeydown);
      },
      onClose: () => {
        window.removeEventListener("keydown", onInstanceKeydown);
      },
    }
  );
  function onInstanceKeydown(evt) {
    if (evt.keyCode !== 27) {
      return;
    }
    instance.close();
  }
  instance.show();
}
