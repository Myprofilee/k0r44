document.addEventListener('DOMContentLoaded', function() {
    // Create the navbar HTML
    var navbarHTML = 
    '<div class="mobile-menu">' +
        '<button class="cart-btn" title="Cartlist">' +
            '<i class="ri-notification-2-fill icon"></i>' +
            '<span>Notification</span>' +
            ' <sup>9+</sup>' +
        ' <sup>9+</sup>' +
    '</div>'
    ;
  
    // Insert the navbar HTML into the navbar placeholder
    var navbarPlaceholder = document.getElementById('navbar-placeholder');
    navbarPlaceholder.innerHTML = navbarHTML;
  
    // Find the current page link and add the 'active' class
    var currentPage = window.location.pathname.split('/').pop();
    var currentLink = navbarPlaceholder.querySelector('a[href="' + currentPage + '"]');
    if (currentLink) {
      currentLink.classList.add('active');
    }
  });
  