var slide = setInterval(newImage, 2000);

function newImage() {
  var activeImage = $('.image img.active');
  var activeCircle = $('.icon i.active');

  activeImage.removeClass('active');
  activeCircle.removeClass('active');

  var newImage = activeImage.next('img');

  if (newImage.length != 0) {
    newImage.addClass('active');
    activeCircle.next('i').addClass('active');
  } else {
    $('.image img').first().addClass('active');
    $('.icon i').first().addClass('active');
  }
}
