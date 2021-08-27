function make_subpageMenu(){
    let subpageMenu = 
    `
	<nav id="topMenu">
		<ul> 
			<li class="topMenuLi"> <a class="menuLink" >이용 안내</a> 
				<ul class="submenu"> 
					<li><a href="../submenu_1/01_notice.html" class="submenuLink">공지사항</a></li> 
					<li><a href="../submenu_1/02_about_us.html" class="submenuLink">About Us</a></li> 
				</ul>
			</li> 
			<li>|</li> <!-- 메뉴 사이에 그냥 바 모양 텍스트로 단락 구분한 거  -->
			<li class="topMenuLi"> <a class="menuLink" >통계 정보</a> 
				<ul class="submenu"> 
					<li><a href="../submenu_2/graph1.html" class="submenuLink">국내 누적 확진자 통계</a></li> 
					<li><a href="../submenu_2/graph2.html" class="submenuLink">지역별 확진자 증가 추세</a></li> 
					<li><a href="../submenu_2/graph3.html" class="submenuLink">지역별 확진자 비교 통계</a></li>
					<li><a href="../submenu_2/graph4.html" class="submenuLink">특정 수치 초과일 조회</a></li>
					<li><a href="../submenu_2/graph5.html" class="submenuLink">지역별 확진자 숫자 조회</a></li>
				</ul> 
			</li> 
			<li>|</li>
			<li class="topMenuLi"> <a class="menuLink" >방역 정보</a>
				<ul class="submenu"> 
					<li><a href="../submenu_3/01_corona19.html" class="submenuLink">코로나 19</a></li> 
					<li><a href="../submenu_3/02_vaccine.html" class="submenuLink">코로나 백신</a></li> 
					<li><a href="../submenu_3/03_person_movement.html" class="submenuLink">확진자 동선</a></li> <!--하이퍼링크 버튼, 지자체별-->
					<li><a href="../submenu_3/04_prevention.html" class="submenuLink">예방 행동 수칙</a></li> <!--국민예방수칙, 긴급연락처(ex선별진료소, 관할보건소)-->
				</ul> 
			</li> 
			<li>|</li> 
			<li class="topMenuLi"> <a class="menuLink">정부 정책</a>
				<ul class="submenu"> 
					<li><a href="../submenu_4/01_policy.html" class="submenuLink">사회적 거리두기 정책</a></li> <!--단계별실행방안-->
					<!--	<li><a href="../submenu_4/02_stage.html" class="submenuLink">지역별 거리두기 단계</a></li> -->
					<li><a href="../submenu_4/03_mask.html" class="submenuLink">마스크 착용 의무화 범위</a></li> 
				</ul> 
			</li> 
		</ul> 
	</nav>
	<br><hr>
    `;
    document.write(subpageMenu);
}
make_subpageMenu();
    
    