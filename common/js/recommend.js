var type = ["食材","時間","味","金額"]

$(document).ready(function() {
  $.get('http://winvelab.net/api/recommend', function(jsontext) {
  json = $.parseJSON(jsontext);
    $.each(json.suggest, function(i) {

      position = '#p' + (i+1);

      $span = $('<span/>').append(this.recipe_name);
      $(position).append($span);


      $div = $('<div/>').attr('id','p_img0'+(i+1));
      $div.css("background-image","url("+ this.recipe_image +")")


      $(position).append($div);


       $span = $('<span/>').append(this.info);
       $(position).append($span);



    });
  });
});




// <div id = "p1">
//         <span>豚肉ともやしの炒めもの</span>
//         <div id="p_img01"></div>
//         <span>約100円</span>
//       </div>