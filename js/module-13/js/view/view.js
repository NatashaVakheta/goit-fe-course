const handlebars = require('handlebars');

export default  class View {
  constructor() {
    this._list = document.getElementById('list');
    this._urls = document.getElementById('urls');
    this._tmpl = handlebars.compile(this._urls.innerHTML.trim());
  }
}

View.prototype.showBookmarks = function(bookmarks) {
    console.log(bookmarks);
    this._list.innerHTML = this._tmpl({'urls': bookmarks});
}
