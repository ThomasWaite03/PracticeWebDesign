// This event handler will add the class "scrolled" to the navbar when the user has started scrolling.
$(document).ready(function() {
    var scrollPosition = $(window).scrollTop();
  
    $(window).scroll(function() {
      var currentScroll = $(this).scrollTop();
      if (currentScroll > scrollPosition) {
        // Scrolling down
        $('.navbar').addClass('scrolled');

        // When scrolling down, set the navbar theme to light
        $('.navbar').addClass('navbar-light');
        $('.navbar').removeClass('navbar-dark');
      } else {
        // Scrolling up
        $('.navbar').removeClass('scrolled');

        // When scrolled to the top, set the navbar theme to dark so the text is white against image
        $('.navbar').addClass('navbar-dark');
        $('.navbar').removeClass('navbar-light');
      }
      scrollPosition = currentScroll;
    });
  });

 	
var heroSectionLocations = ['Utah', 'Salt Lake City', 'Provo', 'Ogden', 'Logan', 'Cedar City', 'St. George']
$( "#hero-text-h1" ).on( "mouseleave", function() {
  $('#hero-text-h1').fadeOut('fast', function() {
    let currentIdx = heroSectionLocations.indexOf($(this).text());
    if (currentIdx + 1 == heroSectionLocations.length) {
      currentIdx = 0;
    }
    else {
      currentIdx++;
    }

    let newHeroSectionLocation = heroSectionLocations[currentIdx];
    $(this).text(newHeroSectionLocation).fadeIn('fast');
  });
});


// // Change the location every 2 seconds
// setInterval(
//   function() {
//     let currentIdx = heroSectionLocations.indexOf($('#hero-text-h1').text());
//     if (currentIdx + 1 == heroSectionLocations.length) {
//       currentIdx = 0;
//     }
//     else {
//       currentIdx++;
//     }

//     let newHeroSectionLocation = heroSectionLocations[currentIdx];
//     $('#hero-text-h1').text(newHeroSectionLocation).fadeIn('fast');
//   },
//   2000
// )