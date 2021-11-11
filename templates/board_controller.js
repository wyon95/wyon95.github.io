

const parent = document.getElementById("board_section");
const board_mb = document.createElement('div');
const board_pc = document.createElement('div');

// 모바일 상황판 dom 생성하기
board_mb.innerHTML=
`
<div id="board-title" class="rounded" >
        <h2 class="Jua main_board">국내 COVID-19 상황판</h2>
    </div>

    <!--(00) 업데이트일-->
    <div class="outer_updates">
        <div class="updates">
            <iframe src="../../crawler/date2.html"
                width=250
                height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" >
            </iframe>
        </div>
    </div>
    
    <!-- 상황판 board 내부-->
    <div class="inside_board">

        <!-- 박스 6개 -->
        <div class="outer_Box6">
            <div class="Box6">

                <!-- (01) 국내확진자-->
                <div class="rounded eachBoard" id="board-1st" >
                    <h4 >
                        <p"> 당일 사망자 </p>
                    </h4>
                    <hr id="white_line">
                    <iframe src="../../crawler/n1_daily_mb.html"
                        width=90
                        height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no">
                    </iframe>
                </div>

                <!-- (02) 해외 유입 확진자-->
                <div  class="rounded eachBoard" id="board-2nd" >
                    <h4 >
                        <p>재원 위중증 </p>
                    </h4>
                    <hr id="white_line">
                    <iframe src="../../crawler/n2_world_mb.html"
                        width=90
                        height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no">
                    </iframe>
                </div>

                <!-- (03) 누적 확진자-->
                <div class="rounded eachBoard" id="board-3rd" >
                    <h4 >
                        <p>신규 입원자</p>
                    </h4>
                    <hr id="white_line">
                    <iframe src="../../crawler/n3_total_mb.html"
                        width=200
                        height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:15px;">
                    </iframe>
                </div>
                    
                <!-- (04) 사망자-->
                <div  class="rounded eachBoard" id="board-4th">
                    <h4 >
                        <p> 당일 확진자</p>
                    </h4>
                    <hr id="white_line">
                    <iframe src="../../crawler/n4_dead_mb.html"
                        width=200
                        height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:15px;">
                    </iframe>
                </div>

                <!-- (05) 격리해제-->
                <div  class="rounded eachBoard" id="board-5th">
                    <h4 >
                        <p>누적 사망자</p>
                    </h4>
                    <hr id="white_line">
                    <iframe src="../../crawler/n5_discharged_mb.html"
                        width=200
                        height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:15px;">
                    </iframe>
                </div>

                <!-- (06) 치료중-->
                <div class="rounded eachBoard" id="board-6th">
                    <h4 >
                        <p">누적 확진자</p>
                    </h4>
                    <hr id="white_line">
                    <iframe src="../../crawler/n6_under_treatment_mb.html"
                        width=200
                        height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:15px;">
                    </iframe>
                </div>

            </div>
            <!-- end of Box6 -->
            
        </div>
        <!-- end of outer_Box6 -->
        
    </div>
    <!-- end of inside_board -->
`;

// PC 상황판 dom 생성하기
board_pc.innerHTML=
`
<div id="board-title" class="rounded" >
        <h2 class="Jua main_board">국내 COVID-19 상황판</h2>
    </div>

    <!--(00) 업데이트일-->
    <div class="outer_updates">
        <div class="updates">
            <iframe src="../../crawler/date2.html"
                width=250
                height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" >
            </iframe>
        </div>
    </div>
    
    <!-- 상황판 board 내부-->
    <div class="inside_board">

        <!-- 박스 6개 -->
        <div class="outer_Box6">
            <div class="Box6">

                <!-- (01) 국내확진자-->
                <div class="rounded eachBoard" id="board-1st" >
                    <h4 >
                        <p"> 당일 사망자 </p>
                    </h4>
                    <hr id="white_line">
                    <iframe src="../../crawler/n1_daily.html"
                        width=90
                        height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no">
                    </iframe>
                </div>


                <!-- (02) 해외 유입 확진자-->
                <div  class="rounded eachBoard" id="board-2nd" >
                    <h4 >
                        <p>재원 위중증 </p>
                    </h4>
                    <hr id="white_line">
                    <iframe src="../../crawler/n2_world.html"
                        width=90
                        height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:-35px;">
                    </iframe>
                </div>

                <!-- (03) 누적 확진자-->
                <div class="rounded eachBoard" id="board-3rd" >
                    <h4 >
                        <p>신규 입원자</p>
                    </h4>
                    <hr id="white_line">
                    <iframe src="../../crawler/n3_total.html"
                        width=200
                        height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:15px;">
                    </iframe>
                </div>
                    
                <!-- (04) 사망자-->
                <div  class="rounded eachBoard" id="board-4th">
                    <h4 >
                        <p>당일 확진자</p>
                    </h4>
                    <hr id="white_line">
                    <iframe src="../../crawler/n4_dead.html"
                        width=200
                        height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:25px;">
                    </iframe>
                </div>

                <!-- (05) 격리해제-->
                <div  class="rounded eachBoard" id="board-5th">
                    <h4 >
                        <p>누적 사망자</p>
                    </h4>
                    <hr id="white_line">
                    <iframe src="../../crawler/n5_discharged.html"
                        width=200
                        height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:15px;">
                    </iframe>
                </div>

                <!-- (06) 치료중-->
                <div class="rounded eachBoard" id="board-6th">
                    <h4 >
                        <p">누적 확진자</p>
                    </h4>
                    <hr id="white_line">
                    <iframe src="../../crawler/n6_under_treatment.html"
                        width=200
                        height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:15px;">
                    </iframe>
                </div>

            </div>
            <!-- end of Box6 -->
            
        </div>
        <!-- end of outer_Box6 -->
        
    </div>
    <!-- end of inside_board -->
`;
// ㄴ DOM 요소 생성 완료

// 상황판 최초 출력
if (matchMedia("screen and (max-width: 768px)").matches){
    document.getElementById('board_section').appendChild(board_mb);
} else {
    document.getElementById('board_section').appendChild(board_pc);
}

// 뷰포트 변화 시마다 삭제+출력
window.addEventListener('resize', function(event) {
	// 모바일 
	if (matchMedia("screen and (max-width: 768.1px)").matches) {

        // PC dom 삭제
        parent.removeChild(board_pc); 

        // 모바일 dom 활성화
        parent.appendChild(board_mb); 
    } 
    else {
        // 모바일 dom 삭제
        parent.removeChild(board_mb); 
        
        // PC dom 활성화
        parent.appendChild(board_pc); 

    }
}, true);




