(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimMobile, {
        "loadScrollBars": function() {
            jQuery(".s-7d47452b-35cc-422b-9b0b-37dd9080ab25 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-7d47452b-35cc-422b-9b0b-37dd9080ab25 #s-Cell-content .layout").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-fe05be39-d309-4c93-b68c-c74e322690a0 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-4d462518-7183-4043-9acd-03ab79be12f9 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);