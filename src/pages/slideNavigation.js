// slideNavigation.js

import $ from 'jquery'; // Import jQuery

export function slideNavigationLinks() {
  var navLinks = $('#navLinks');
  var totalWidth = 0;
  navLinks.children().each(function() {
    totalWidth += $(this).outerWidth(true);
  });
  navLinks.animate({ left: -totalWidth }, 5000, 'linear');
}
