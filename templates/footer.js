function make_footer(){
    let footer = 
    `
    <div class="footer">
		<div class="footer_mid">
			<div class="footer_inside">
				<br><br><h4 class="Jua" style="font-size:22px;"> - 주의사항 - </h4><br>
				<div style="font-size:16px; font-weight:normal;">
					<p>민간이 취합한 집계이므로</p>
					<p>공식적인 자료로 활용될 수 없으며</p>
					<p>사이트 정보 사용 문제의 책임은</p>
					<p>사용자에게 있으니 주의바랍니다</p>
				</div>
				corona.core.kr@gmail.com<br><br>

				<!-- SNS share buttons --> 
				<div style="width: 100%; text-align: center; margin-bottom: 64px;"> 
				<!-- Facebook share button --> 
				<a href="" onclick="window.open(url_combine_fb, '', 'scrollbars=no, width=600, height=600'); return false;">
				<img src="https://imgur.com/2pxqHxt.png" title="페이스북으로 공유하기" class="sharebtn_custom" style="width: 48px;"></a> 
				<!-- Twitter share button --> 
				<a href="" onclick="window.open(url_combine_tw, '', 'scrollbars=no, width=600, height=600'); return false;">
				<img src="https://imgur.com/z7V4qga.png" title="트위터로 공유하기" class="sharebtn_custom" style="width: 48px;"></a> 
				<!-- Naver share button --> 
				<a href="" onclick="window.open(url_combine_naver, '', 'scrollbars=no, width=600, height=600'); return false;">
				<img src="https://imgur.com/AYqtESo.png" title="네이버로 공유하기" class="sharebtn_custom" style="width: 48px;"></a> 
				<!-- Kakao story share button --> 
				<a href="" onclick="window.open(url_combine_ks, '', 'scrollbars=no, width=600, height=600'); return false;">
				<img src="https://imgur.com/mIW39pd.jpg" title="카카오스토리로 공유하기" class="sharebtn_custom" style="width: 48px;"></a>
				</div>
				<br>
			</div>
		</div>
	</div>
	<br>
    `;
    document.write(footer);
}
make_footer();