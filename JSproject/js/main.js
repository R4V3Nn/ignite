(function () {
  var toggle = document.getElementById('header-nav-toggle')
  var nav = document.getElementById('header-nav');

  toggle.className = 'is-visible';
  nav.className = 'is-hidden';
  
  toggle.addEventListener('click', function() {
    if (nav.className === 'is-hidden') {
      nav.className = '';
    } else {
      nav.className = 'is-hidden';
    }
  })
})();