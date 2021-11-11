let HamburgerMenu = 
`
<nav role="navigation" id="idxpage_menu_mobile" style="display:none">
	<div id="menuToggle">
		<input type="checkbox"/>
		<!-- 햄버거모형span -->
		<span></span>
		<span></span>
		<span></span>
		<ul id="menu">
			<li class="outerMenu">이용 안내
				<a href="01_code/submenu_1/01_notice.html"><li>공지사항</li></a>
				<a href="01_code/submenu_1/02_about_us.html"><li>About Us</li></a>
			</li>
			<li class="outerMenu">통계 정보
				<a href="01_code/submenu_2/graph1.html"><li>국내 누적 확진자 통계</li></a>
				<a href="01_code/submenu_2/graph2.html"><li>지역별 확진자 증가 추세</li></a>
				<a href="01_code/submenu_2/graph3.html"><li>지역별 확진자 비교 통계</li></a>
				<a href="01_code/submenu_2/graph4.html"><li>특정 수치 초과일 조회</li></a>
				<a href="01_code/submenu_2/graph5.html"><li>지역별 확진자 숫자 조회</li></a>          
			</li>
			<li class="outerMenu">방역 정보
				<a href="01_code/submenu_3/01_corona19.html"><li>코로나 19</li></a>
				<a href="01_code/submenu_3/02_vaccine.html"><li>코로나 백신</li></a>
				<a href="01_code/submenu_3/03_person_movement.html"><li>확진자 동선</li></a>
				<a href="01_code/submenu_3/04_prevention.html"><li>예방 행동 수칙</li></a>
			</li>
			<li class="outerMenu">정부 정책
				<a href="01_code/submenu_4/01_policy.html"><li>사회적 거리두기 정책</li></a>
				<a href="01_code/submenu_4/03_mask.html"><li>마스크 착용</li></a>
			</li>
		</ul>
	</div>
</nav>
`
document.write(HamburgerMenu);