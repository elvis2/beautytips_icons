/**
 * Adds beautytip icons to a specific element on the page.
 */
(function ($) {
  Drupal.behaviors.beautytips_icons = {
    attach: function(context, settings) {

      var beautytips = Drupal.settings.beautytips;

      // Add the icon to the page
      for (var key in beautytips) {

        var tip = beautytips[key];
        var icon = tip['icon'];

        // Only do something if icon exist.
        if(icon) {

          // Decide which is the main selector.
          var selector = tip['cssSelect_original'];
          var new_selector =  tip['cssSelect'];
          var selector_clean = tip['cssSelect_clean'];

          // var parent = $(selector).parent(); // We might need this later. elvis2
          var last = $(selector + ":last");
          var lastTag = $(last).attr('tagName');
          var bti_class = "bti " + selector_clean + " " + icon['icon_size'];

          // Save for reference.
          // $(tip['cssSelect']).after(code);
          // $(tip['cssSelect']).append(code);

          // Have we altered the cssSelect value? We would only do this when
          // dealing with a special element type like a select or maybe an input.

          if(lastTag == 'SELECT') {
            // Now append the icon to the cssSelect.
            var code = "<div class='select " + bti_class + "'></div>";
            $(selector).after(code);
            $(new_selector).css("background-image", "url('/"+icon['icon']+"')");
          }
          else {
            $(selector).addClass(bti_class);
            $(selector).css("background-image", "url('/"+icon['icon']+"')");
          }

          // We'll deal with special case input elements at another time. elvis2'
        }
      }
    }
  }

})(jQuery);
