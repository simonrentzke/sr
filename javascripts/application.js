$(document).ready(function(){
  $('ul li.home a').click(function() {$.scrollTo("#about", 500, {easing:'easeOutQuad', offset:-50});return false;});
  $('ul li.facilities a').click(function() {$.scrollTo("#facilities", 500, {easing:'easeOutQuad', offset:-50});return false;});
  $('ul li.attractions a').click(function() {$.scrollTo("#nearby-attractions", 500, {easing:'easeOutQuad', offset:-50});return false;});
  $('ul li.rates a').click(function() {$.scrollTo("#rates", 500, {easing:'easeOutQuad', offset:-50});return false;});
  $('ul li.directions a').click(function() {$.scrollTo("#directions", 500, {easing:'easeOutQuad', offset:-50});return false;});
  $('ul li.contact_us a').click(function() {$.scrollTo("#contact-us", 500, {easing:'easeOutQuad', offset:-50});return false;});
});
