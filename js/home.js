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