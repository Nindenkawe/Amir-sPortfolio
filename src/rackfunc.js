;(function (window, document, undefined) {
    var door = $('.door'),
        handle = $('.handle'),
        rack = $('.rack');
    
    rack.sortable();
    
    handle.on('click', function (e) {
      e.stopPropagation();
      
      door.toggleClass('open');
    });
    
  }(window, document));