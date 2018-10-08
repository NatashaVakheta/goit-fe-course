const handlebars = require('handlebars');
const list = document.getElementById('list');
const urls = document.getElementById('urls');
const url = document.getElementById("url");
let bookmarks = localStorage.getItem('bookmarks');
const tmpl = handlebars.compile(urls.innerHTML.trim());
if (!bookmarks) {
    bookmarks = {};
} else {
    bookmarks = JSON.parse(bookmarks);
}
const addBookmark = () => {
    const urlValue = url.value;
    if (bookmarks.hasOwnProperty(urlValue)) {
        alert('Данная ссылка уже существует в базе!');
    } else {
        bookmarks[urlValue] = {
            'url': urlValue,
            'id': Date.now()
        };
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        showBookmarks();
    }
    url.value = '';
};
const delBookmark = (url) => {
    if (bookmarks.hasOwnProperty(url)) {
        var elem = document.getElementById(bookmarks[url].id);
        elem.parentNode.removeChild(elem);
        delete bookmarks[url];
    }
};
window.delBookmark = delBookmark;
const showBookmarks = () => {
    list.innerHTML = tmpl({'urls': bookmarks});
};
window.onload = function(){
    document.getElementById("addBookmarkButton").onclick = addBookmark;
    showBookmarks();
};
