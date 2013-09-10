var type = ["食材","時間","味","金額"]

$(document).ready(function() {
  $.get('http://winvelab.net/api/recommend', function(jsontext) {
  json = $.parseJSON(jsontext);
    $.each(json.suggest, function(i) {

      position = '.position' + (i+1);

      $span = $('<span/>').append(type[this.suggesttype]);
      $(position).append($span);

      $anchor = $('<a/>').addClass('border').css("background-image","url("+this.recipe_image+")");
      $(position).append($anchor);

    });
  });
});