// This is a JavaScript file

(function(){
  // 要素キャッシュ
  var page = $('.page');
  var content = $('.content');
  var globalNavToggle = $('#globalNavToggle');
  var windowHeight = window.innerHeight; // ウィンドウの高さ
  var headerHeight = $("#head").innerHeight(); // ヘッダーの高さ
  var footerHeight = $(".pageFooter").innerHeight(); // フッターの高さ
  var contentHeight;

  function adjustContentHeight( ) {
    // ページの高さ変更
    $("#bodyInner, #all").css("height", windowHeight + "px");

    // コンテンツ部分の高さ変更
    contentHeight = windowHeight - headerHeight - footerHeight;
    content.css({"height": contentHeight});
  }
  
  adjustContentHeight();

  // リサイズ時も高さそろえを実行
  $(window).resize(function(){
    windowHeight = window.innerHeight;
    adjustContentHeight();
  });

  // メニューのトグル
  var menuFlg = 0;
  globalNavToggle.bind( "click", function(){
    if ( menuFlg === 0 ) {
      menuFlg = 1;
      page.css({"left": "80%"});
    } else {
      menuFlg = 0;
      page.css({"left": "0"});
    }
  });

  $(".pageFooter").bind( "touchmove", function(e){
    e.preventDefault(); // デフォルトの動きをキャンセル
  });

  hoverboard($("a"));

  function hoverboard( ele ) {
    // イベントのラッパー
    var supportTouch = 'ontouchstart' in window;
    var touchStart = supportTouch ? 'touchstart' : 'mousedown';
    var touchMove  = supportTouch ? 'touchmove'  : 'mousemove';
    var touchEnd   = supportTouch ? 'touchend'   : 'mouseup';

    // タップのフラグ
    // 0 = 触ってないか、タップして移動せずに指を離した
    // 1 = タップした時
    // 2 = 移動（スクロールとか）
    // 3 = 移動した上で指を離した
    var touchFlg = 0;

    // タッチした場合
    ele.bind(touchStart, function() {
      // .hover を付与
      $(this).addClass('touch');
      touchFlg = 1;
    })
    // スクロール（というか移動）した場合
    .bind(touchMove, function() {
      // .hover を削除
      $(this).removeClass('touch');
      touchFlg = 2;
    })
    // 指を離した場合
    .bind(touchEnd, function(e) {
      // .hover を削除
      $(this).removeClass('touch');

      if ( touchFlg === 2 ) {
        touchFlg = 3; // スクロールしてたら3に
      } else {
        touchFlg = 0; // スクロールしてなかったら0に
      }
    });
  }


})();



