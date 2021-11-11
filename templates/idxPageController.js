
function whenPageLoaded(){
	// 모바일 (태블릿)
	if (matchMedia("screen and (max-width: 768px)").matches) {
		document.getElementById('idxpage_menu_mobile').style.display="block"; // 모바일 뷰 활성화
		document.getElementById('outer_topMenu').style.display="none"; // PC(소) 뷰 중지
	}

	// PC 중간
	if (matchMedia("screen and (min-width: 768.1px)").matches) {
		if (matchMedia("screen and (max-width: 1500px)").matches) {
			document.getElementById('idxpage_menu_mobile').style.display="none"; // 모바일 뷰 중지
			document.getElementById('outer_topMenu').style.display="block"; // PC(소) 뷰 활성화
			document.getElementById('back').style.display="none"; // PC 뷰 중지
		}
	}
	// PC 최대
	if (matchMedia("screen and (min-width: 1500.1px)").matches) {
		document.getElementById('outer_topMenu').style.display="block"; // PC(소) 뷰 활성화
		document.getElementById('back').style.display="block"; // PC 뷰 활성화
	}
}
// 페이지 로드이후 템플릿 함수 1회 실행
whenPageLoaded();

// ===================================================================================================

// 페이지 사이즈 변환시마다 계속해서 실행
window.addEventListener('resize', function(event) {
	
	// 모바일 (태블릿)
	if (matchMedia("screen and (max-width: 768px)").matches) {
		document.getElementById('idxpage_menu_mobile').style.display="block"; // 모바일 뷰 활성화
		document.getElementById('outer_topMenu').style.display="none"; // PC(소) 뷰 중지
	}

	// PC 중간
	if (matchMedia("screen and (min-width: 768.1px)").matches) {
		if (matchMedia("screen and (max-width: 1500px)").matches) {
			document.getElementById('idxpage_menu_mobile').style.display="none"; // 모바일 뷰 중지
			document.getElementById('outer_topMenu').style.display="block"; // PC(소) 뷰 활성화
			document.getElementById('back').style.display="none"; // PC 뷰 중지
		}
	}
	// PC 최대
	if (matchMedia("screen and (min-width: 1500.1px)").matches) {
			document.getElementById('outer_topMenu').style.display="block"; // PC(소) 뷰 활성화
		document.getElementById('back').style.display="block"; // PC 뷰 활성화
	}
}, true);