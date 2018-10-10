export default class Model {
  constructor() {
    this._url = document.getElementById("url");
    this._bookmarks = localStorage.getItem('bookmarks');

    if (!this._bookmarks) {
        this._bookmarks = {};
    } else {
        this._bookmarks = JSON.parse(this._bookmarks);
    }
  }
}

Model.prototype.addBookmark = function() {
    const urlValue = this._url.value;
    if (this._bookmarks.hasOwnProperty(urlValue)) {
        alert('Данная ссылка уже существует в базе!');
    } else {
        this._bookmarks[urlValue] = {
            'url': urlValue,
            'id': Date.now()
        };
        localStorage.setItem('bookmarks', JSON.stringify(this._bookmarks));
    }
    this._url.value = '';
}

Model.prototype.delBookmark = function(url) {
    if (this._bookmarks.hasOwnProperty(url)) {
        delete this._bookmarks[url];
    }
}
