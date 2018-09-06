
function createPostCard(config) {
  const post = document.createElement("div");
  post.className = "post";

  const image = document.createElement("img");
  image.src = config.img;
  image.alt = "post image";
  image.className = "post__image";

  const h2 = document.createElement("h2");
  h2.textContent = config.title;
  h2.className = "post__title";
  
  const p = document.createElement("p");
  p.textContent = config.text;
  p.className = "post__text";

  const a = document.createElement("a");
  a.href = config.link;
  a.textContent = "Read more";
  a.className = "button";

  br = document.createElement("br");
  
  post.appendChild(image);
  post.appendChild(h2);
  post.appendChild(p);
  post.appendChild(a);

  document.body.appendChild(br);
  document.body.appendChild(post);
}

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

function createPostCards(items) {
  items.forEach(item => createPostCard(item));
}

createPostCards(posts);
