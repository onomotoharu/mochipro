(function() {

	//つくったボタン
	var cookedBtnEl    = null;
	var cookedBgEl     = null;

	function cacheDOMs () {
		//つくったボタン
		cookedBtnEl    = document.getElementById('cookedBtn');
		cookedBgEl     = document.getElementById('cooked');
		console.log(cookedBgEl);

	};

	function setEvents () {
		//つくったボタン
		cookedBtnEl.addEventListener("click", function(e) {
			cookedBgEl.className = "cookedBg_on";
		});
	}

	document.addEventListener("DOMContentLoaded", function (e) {
		cacheDOMs();
		setEvents();
	}, false);

})();