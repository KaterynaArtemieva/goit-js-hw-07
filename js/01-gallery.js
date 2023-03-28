import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
let selectImgObj = {};

const marcup = galleryItems
  .map(({ preview, description, original }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  })
  .join("");
galleryList.insertAdjacentHTML("beforeend", marcup);

galleryList.addEventListener("click", onGalleryElClick);

function onGalleryElClick(evt) {
  if (evt.target.classList.value !== "js-gallery-img") {
    return;
  }
  const selectImgDescr = evt.target.alt;
  selectImgObj = galleryItems.find(
    (item) => item.description === selectImgDescr
  );

 const instance = basicLightbox.create(`
 <div><img class="js-gallery-img" src="${selectImgObj.original}" alt="${selectImgObj.description}" width="1280"></div>
 `);


  instance.show();
}


