// 1 모바일 뷰 PC 뷰 모두 DOM 생성 (display none)
// 2 최초 출력 : 뷰포트 크기에 따라 하나만 출력 (display block)
// 3 뷰포트 조정 : 이벤트리스너에서 하나 출력, 하나 감추기

let mbLinks = 
`
<div id="mb_links" style="display:none">

    <div class="separate_boxes">
        <a href="http://ncov.mohw.go.kr/index.jsp"> 
            <div class="L_section">
                질병관리청
            </div>
            <div class="R_section">
                국내 코로나 동향은 <br> 중앙방역대책본부에서 확인하세요
            </div>
        </a>
    </div>

    <div class="separate_boxes">
        <a href="https://www.cdc.gov/"> 
            <div class="L_section">
                미국 CDC 센터
            </div>
            <div class="R_section">
                미국 코로나 동향은 <br> 중앙방역대책본부에서 확인하세요
            </div>
        </a> 
    </div>

    <div class="separate_boxes">
        <a href="https://gisanddata.maps.arcgis.com/apps/dashboards/bda7594740fd40299423467b48e9ecf6%20"> 
            <div class="L_section">
            존스홉킨스 CSSE
            </div>
            <div class="R_section">
                세계 코로나 동향은 <br> 존스홉킨스CSSE에서 확인하세요
            </div>
        </a>
    </div>

    <div class="separate_boxes">
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019?gclid=CjwKCAjw4KyJBhAbEiwAaAQbE-7o2J0_cP9sBpazjsyWi2LWRkqjzIV3eNrlTm98BUB9CYgbcLiFlRoCOQQQAvD_BwE"> 
            <div class="L_section">
                WHO 세계보건기구
            </div>
            <div class="R_section">
                UN 코로나 정보는 <br> WHO세계보건기구에서 확인하세요
            </div>
        </a>
    </div>
        
    <div class="separate_boxes">
        <a href="https://www.0404.go.kr/m/dev/main.do"> 
            <div class="L_section">
                외교부
            </div>
            <div class="R_section">
                해외 여행을 준비하는 분들은 <br> 외교부 해외여행안내를 받아주세요
            </div>
        </a>
    </div>
</div>
`;
document.write(mbLinks);


let pcLinks = 
`
<div id="jssor_1" style="display:none">
    <!-- Loading Screen -->
    <div data-u="loading" class="jssorl-004-double-tail-spin" style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">
        <img style="margin-top:-19px;position:relative;top:40%;width:38px;height:38px;" src="../img/double-tail-spin.svg" />
    </div>

    <div data-u="slides" style="cursor:default;position:relative;top:0px;left:0px;width:980px;height:380px;overflow:hidden;"><a href="http://ncov.mohw.go.kr/index.jsp" rel="nofollow" data-fillmode="1" style="background-color:#eeeeee;">
    
    <img data-u="image" style="opacity:1;" src="http://www.jbnews.com/news/photo/202009/1306569_1102133_5616.jpg" /><div data-ts="flat" data-p="271" style="left:296px;top:269px;width:466px;height:76px;position:absolute;overflow:hidden;"><div data-to="50% 50%" data-ts="preserve-3d" data-t="0" style="left:561px;top:2px;width:455px;height:90px;position:absolute;overflow:hidden;background-image:linear-gradient(135deg,rgba(0, 0, 0, 0.65) 0%,rgba(0, 0, 0, 0) 100%);"><div data-to="50% 50%" data-ts="preserve-3d" data-arr="1" style="left:16px;top:14px;width:332px;height:20px;position:absolute;color:#edf1f2;font-size:18px;font-weight:700;line-height:1.2;letter-spacing:0.1em;">국내 코로나 동향은<br /></div><div data-to="50% 50%" data-ts="preserve-3d" data-arr="2" style="left:-40px;top:40px;width:600px;height:30px;position:absolute;color:#edf1f2;font-size:24px;line-height:1.2;letter-spacing:0.05em;"><font color="#e04338"><b>중앙방역대책본부</b></font>에서 확인하세요<br /></div></div></div></a><a href="https://www.cdc.gov/" rel="nofollow" data-fillmode="5" style="background-color:#eeeeee;">
    
    <img data-u="image" style="opacity:1;" src="https://dalkora.com/data/file/town/1287343406_A9jp0wbg_24637bef37762fc1bf8d327d24aaff089d4f41ca.jpg" /><div data-ts="flat" data-p="345" style="left:192px;top:257px;width:599px;height:90px;position:absolute;overflow:hidden;"><div data-to="50% 50%" data-ts="preserve-3d" data-t="3" style="left:740px;top:13px;width:387px;height:70px;position:absolute;overflow:hidden;background-image:linear-gradient(135deg,rgba(0, 0, 0, 0.65) 0%,rgba(0, 0, 0, 0) 100%);"><div data-to="50% 50%" data-ts="preserve-3d" data-arr="4" style="left:-20px;top:18px;width:332px;height:20px;position:absolute;color:#edf1f2;font-size:18px;font-weight:700;line-height:1.2;letter-spacing:0.1em;">미국 코로나 동향은</div><div data-to="50% 50%" data-ts="preserve-3d" data-arr="5" style="left:-100px;top:36px;width:600px;height:30px;position:absolute;color:#edf1f2;font-size:24px;line-height:1.2;letter-spacing:0.05em;"><span style="font-weight:900;color:#e04338;">미국 CDC 센터</span>에서 확인하세요</div></div></div></a><a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6%20" rel="nofollow" data-fillmode="1" style="background-color:#eeeeee;">
    
    <img data-u="image" style="opacity:1;" src="https://apply.jhu.edu/wp-content/uploads/2017/04/JHU-gate_small.jpg" /><div data-ts="flat" data-p="267" style="left:316px;top:279px;width:459px;height:75px;position:absolute;overflow:hidden;"><div data-to="50% 50%" data-ts="preserve-3d" data-t="6" style="left:590px;top:-4px;width:418px;height:75px;position:absolute;overflow:hidden;background-image:linear-gradient(135deg,rgba(0, 0, 0, 0.65) 0%,rgba(0, 0, 0, 0) 100%);"><div data-to="50% 50%" data-ts="preserve-3d" data-arr="7" style="left:-50px;top:18px;width:332px;height:20px;position:absolute;color:#edf1f2;font-size:16px;font-weight:700;line-height:1.2;letter-spacing:0.1em;">세계 확진자 현황은</div><div data-to="50% 50%" data-ts="preserve-3d" data-arr="8" style="left:-80px;top:40px;width:600px;height:30px;position:absolute;color:#edf1f2;font-size:24px;line-height:1.2;letter-spacing:0.05em;"><span style="font-weight:900;color:#e04338;">존스홉킨스 CSSE</span>에서 확인하세요<br /></div></div></div></a><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019?gclid=CjwKCAjw4KyJBhAbEiwAaAQbE-7o2J0_cP9sBpazjsyWi2LWRkqjzIV3eNrlTm98BUB9CYgbcLiFlRoCOQQQAvD_BwE" rel="nofollow" data-fillmode="1" style="background-color:#eeeeee;">
    
    <img data-u="image" style="opacity:1;" src="https://d.newsweek.com/en/full/1737197/un-logo.jpg?w=1600&h=1200&q=88&f=425b1952afe5ba6ab3cc07cde189ba8c" /><div data-ts="flat" data-p="344" style="left:145px;top:254px;width:597px;height:90px;position:absolute;overflow:hidden;"><div data-to="50% 50%" data-ts="preserve-3d" data-t="9" style="left:698px;top:23px;width:447px;height:90px;position:absolute;overflow:hidden;background-image:linear-gradient(135deg,rgba(0, 0, 0, 0.65) 0%,rgba(0, 0, 0, 0) 100%);"><div data-to="50% 50%" data-ts="preserve-3d" data-arr="10" style="left:-20px;top:18px;width:332px;height:20px;position:absolute;color:#edf1f2;font-size:16px;font-weight:700;line-height:1.2;letter-spacing:0.1em;">UN&nbsp; 코로나 정보는<br /></div><div data-to="50% 50%" data-ts="preserve-3d" data-arr="11" style="left:19px;top:36px;width:428px;height:30px;position:absolute;color:#edf1f2;font-size:24px;line-height:1.2;letter-spacing:0.05em;"><span style="font-weight:900;color:#e04338;">WHO&nbsp;</span>세계보건기구에서 확인하세요</div></div></div></a><a href="http://www.0404.go.kr/m/dev/main.do" rel="nofollow" data-fillmode="1" style="background-color:#eeeeee;">
    
    <img data-u="image" style="opacity:1;" src="http://ojsfile.ohmynews.com/PHT_IMG_FILE/2019/0529/IE002503176_PHT.jpg" /><div data-ts="flat" data-p="265" style="left:331px;top:274px;width:454px;height:76px;position:absolute;overflow:hidden;"><div data-to="50% 50%" data-ts="preserve-3d" data-t="12" style="left:572px;top:2px;width:540px;height:77px;position:absolute;overflow:hidden;background-image:linear-gradient(135deg,rgba(0, 0, 0, 0.65) 0%,rgba(0, 0, 0, 0) 100%);"><div data-to="50% 50%" data-ts="preserve-3d" data-arr="13" style="left:-20px;top:18px;width:332px;height:20px;position:absolute;color:#edf1f2;font-size:16px;font-weight:700;line-height:1.2;letter-spacing:0.1em;">출국을 준비하는 분들은</div><div data-to="50% 50%" data-ts="preserve-3d" data-arr="14" style="left:-80px;top:40px;width:600px;height:30px;position:absolute;color:#edf1f2;font-size:24px;line-height:1.2;letter-spacing:0.05em;"><span style="font-weight:900;color:#e04338;">외교부</span>&nbsp;해외여행안내를 받아 주세요<br /></div></div></div></a>
    </div><a data-scale="0" href="https://www.jssor.com" style="display:none;position:absolute;">slider html</a>
    
    <!-- Bullet Navigator -->
    <div data-u="navigator" class="jssorb031" style="position:absolute;bottom:16px;right:16px;" data-autocenter="1" data-scale="0.5" data-scale-bottom="0.75">
        <div data-u="prototype" class="i" style="width:13px;height:13px;">
            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                <circle class="b" cx="8000" cy="8000" r="5800"></circle>
            </svg>
        </div>
    </div>
    <!-- Arrow Navigator -->
    <div data-u="arrowleft" class="jssora054" style="width:45px;height:45px;top:0px;left:25px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
        <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
            <polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
        </svg>
    </div>
    <div data-u="arrowright" class="jssora054" style="width:45px;height:45px;top:0px;right:25px;" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
        <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
            <polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
        </svg>
    </div>
</div>
`;
document.write(pcLinks);

const MB_ = document.getElementById('mb_links');
const PC_ = document.getElementById('jssor_1');

// 최초 출력 시
if (matchMedia("screen and (max-width: 768px)").matches) {
    MB_.style.display="block";
    PC_.style.display="none";
}
else {
    MB_.style.display="none";
    PC_.style.display="block";
}

// 뷰포트 조정 시
window.addEventListener('resize', function(event) {
	
	if (matchMedia("screen and (max-width: 768.1px)").matches) {
        MB_.style.display="block";
        PC_.style.display="none";
	}
    else{
        MB_.style.display="none";
        PC_.style.display="block";
    }
}, true);