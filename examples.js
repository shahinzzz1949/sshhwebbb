/* Examples */
(function($) {

  /*
   * Example 3:

   * - listening to `circle-animation-progress` event and display the dynamic change of the value: from 0 to 0.8
   */
  $('.third.circle').circleProgress({
    value: .95,
    fill: {gradient: [['#fff', .5], ['#fff', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  });
  $('.third1.circle1').circleProgress({
    value: .75,
    fill: {gradient: [['#fff', .5], ['#fff', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  });


})(jQuery);
