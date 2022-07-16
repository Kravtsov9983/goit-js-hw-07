import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryLab = galleryItems
function createDiv(array) {
    return array.reduce((acc, item) => acc + `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`, "")
}

const div = document.querySelector(".gallery")
div.insertAdjacentHTML("beforeend", createDiv(galleryLab) )

function divHendler(e) {
    e.preventDefault()
    const description = e.target.dataset.source;
    console.log(description)
}


div.addEventListener("click", divHendler)
