   window.onload = function() {
      var images = document.getElementsByClassName('topic-image');
      for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', scrollToTop);
      }

      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }