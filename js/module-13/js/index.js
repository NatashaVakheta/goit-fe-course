import Model from './model/model.js';
import View from './view/view.js';
import Controller from './controller/controller.js';

window.onload = function(){
    const model = new Model();
    const view = new View();
    const ctrl = new Controller(model, view);
    function delBookmark(url) {
        ctrl.delBookmark(url);
    }
    function addBookmark() {
        ctrl.addBookmark();
    }
    window.delBookmark = delBookmark;
    document.getElementById("addBookmarkButton").onclick = addBookmark;
    view.showBookmarks(model._bookmarks);
};