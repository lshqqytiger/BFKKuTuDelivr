$(document).ready(function() { //호환성 조정
	if (jQuery.browser.name == "msie"){
		alert("지원하지 않는 브라우저입니다.\n다른 브라우저를 사용해 주세요.");
		location.href = '/unsupported'
	}
});