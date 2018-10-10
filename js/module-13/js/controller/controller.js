export default class Controller {
  constructor(model, view) {
    this._model = model;
    this._view = view;
  }
}

Controller.prototype.addBookmark = function() {
    this._model.addBookmark();
    this._view.showBookmarks(this._model._bookmarks);
}

Controller.prototype.delBookmark = function(url) {
    this._model.delBookmark(url);
    this._view.showBookmarks(this._model._bookmarks);
}
