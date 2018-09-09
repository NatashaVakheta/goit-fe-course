
class Gallery {
  constructor(data) {
    this._parentNode = data.parentNode;

    data.items.forEach(item => this.addImage(data.parentNode, item));

    const fullview = data.parentNode.querySelector('.fullview');
    fullview.innerHTML = "";
    const img = document.createElement("img");
    const image = data.items[data.defaultActiveItem-1];
    img.src = image.fullview;
    img.alt = image.alt;
    fullview.appendChild(img);
  }

  addImage(parentNode, image) {
    const li = document.createElement("li");
    const inParentNode = parentNode;
    const img = document.createElement("img");
    img.src = image.preview;
    img.alt = image.alt;
    img.setAttribute("data-fullview", image.fullview);
    li.appendChild(img);
    inParentNode.querySelector('.preview').appendChild(li);
  }
}

function handleImageClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") return;
  const fullview = document.querySelector('.image-gallery').querySelector('.fullview');
  fullview.innerHTML = "";
  const img = document.createElement("img");
  img.src = target.getAttribute("data-fullview");
  img.alt = target.alt;
  fullview.appendChild(img);
}
document.querySelector('.image-gallery').querySelector(".preview").addEventListener("click", handleImageClick);

const galleryItems = [
  { preview: 'image/download.jpeg', fullview: 'image/downloadfiles.jpeg', alt: "alt text 1" },
  { preview: 'image/forestway.jpeg', fullview: 'image/forestwayfull.jpeg', alt: "alt text 2" },
  { preview: 'image/images.jpeg', fullview: 'image/naturefull.jpg', alt: "alt text 3" },
  { preview: 'image/most-beatf.jpeg', fullview: 'image/outum.jpeg', alt: "alt text 4" },
  { preview: 'image/river.jpeg', fullview: 'image/Beauty.jpg', alt: "alt text 5" },
  { preview: 'image/tree.jpeg', fullview: 'image/sunfull.jpg', alt: "alt text 6" },
];



new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.image-gallery'),
  defaultActiveItem: 1
});

