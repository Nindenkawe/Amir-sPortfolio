(function () {
    var door = $(".door"),
        handle = $(".handle"),
        rack = $(".rack");

    rack.sortable();

    handle.on("click", function (e) {
        e.stopPropagation();

        door.toggleClass("open");
    });
        var window=window 
        var document=document
        var undefined=undefined
})(window, document);