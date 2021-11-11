from bs4 import BeautifulSoup as bs
import requests
import csv
import re
from datetime import datetime


# html로 작성된 웹페이지 코드를 반환
# html언어 구조: <태그 속성=속성값> 텍스트 </태그>



html = requests.get('http://ncov.mohw.go.kr/')
soup = bs(html.text,'html.parser')

# find(태그, {속성: 속성값})
# 처음 매칭된 1개의 값만 반환
data1 = soup.find('div',{'class':'occur_graph'})   #


# findAll(태그)
# 매칭된 모든 값을 리스트 형태로 반환
data2 = data1.findAll('span')

#1 국내 코로나 출력
data2[6] = data2[6].text
print("사망",data2[6])
data2[7] = data2[7].text
print("재원 위중증",data2[7])
data2[8] = data2[8].text
print("신규 입원",data2[8])
data2[9] = data2[9].text
print("당일 확진",data2[9])

data1_1 = soup.find('div',{'class':'occur_num'})
data1_2 = data1_1.findAll('div')
data1_2[0] = data1_2[0].text
data1_3 = re.sub(r'[^0-9]', '', data1_2[0])   # -? : 음수, \d+ : 여러자리 숫자
print("누적 사망자",data1_3)

data1_2[1] = data1_2[1].text
data1_4 = re.sub(r'[^0-9]', '', data1_2[1])
print("누적 확진자",data1_4)


today = datetime.today()
todaytime = datetime.today().hour
# 현재 날짜 가져오기
print(today.strftime("%Y-%m-%d"))
print(today.strftime("%Y/%m/%d %H:%M:%S"))

#####################################################

#1 사망자
file = open('./crawler/n1_daily.html', 'w')    
file.write('<div class="daydata"><h1><p style ="color:rgb(255, 255, 255); font-size:22px;">+'+str(data2[6])+'</p></h1></div>')      
file.close()
file = open('./crawler/n1_daily_mb.html', 'w')    
file.write('<div class="daydata"><h1><p style ="color:rgb(255, 255, 255); font-size:16.5px;">+'+str(data2[6])+'</p></h1></div>')      
file.close()


#2 재원 위중증
file = open('./crawler/n2_world.html', 'w')    
file.write('<div class="daydata"><h1>'+''+'<p style ="color:rgb(255, 255, 255); font-size:22px;">'+'+'+str(data2[7])+'</p></h1>'+'</div>')
file.close()
file = open('./crawler/n2_world_mb.html', 'w')    
file.write('<div class="daydata"><h1>'+''+'<p style ="color:rgb(255, 255, 255); font-size:16.5px;">'+'+'+str(data2[7])+'</p></h1>'+'</div>')
file.close()

#3 신규입원
file = open('./crawler/n3_total.html', 'w')    
file.write('<div class="daydata">'+'<h2>'+'<p style ="color:rgb(255, 255, 255); font-size:22px;">'+'+'+str(data2[8])+'</p></h2>'+'</div>')
file.close()
file = open('./crawler/n3_total_mb.html', 'w')    
file.write('<div class="daydata">'+'<h2>'+'<p style ="color:rgb(255, 255, 255); font-size:16.5px;">'+'+'+str(data2[8])+'</p></h2>'+'</div>')
file.close()

#4 당일 확진
file = open('./crawler/n4_dead.html', 'w')    
file.write('<div class="daydata">'+'<h1>'+'<p style ="color:rgb(255, 255, 255); font-size:22px;">'+'+'+str(data2[9])+'</p></h1>'+'</div>')
file.close()
file = open('./crawler/n4_dead_mb.html', 'w')    
file.write('<div class="daydata">'+'<h1>'+'<p style ="color:rgb(255, 255, 255); font-size:16.5px;">'+'+'+str(data2[9])+'</p></h1>'+'</div>')
file.close()

#5 누적 사망
file = open('./crawler/n5_discharged.html', 'w')    
file.write('<div class="daydata">'+'<h2>'+'<p style ="color:rgb(255, 255, 255); font-size:22px;">'+str(data1_3)+'</p></h2>'+'</div>')
file.close()
file = open('./crawler/n5_discharged_mb.html', 'w')    
file.write('<div class="daydata">'+'<h2>'+'<p style ="color:rgb(255, 255, 255); font-size:16.5px;">'+str(data1_3)+'</p></h2>'+'</div>')
file.close()

#6 누적 확진자
file = open('./crawler/n6_under_treatment.html', 'w')    
file.write('<div class="daydata">'+'<h2>'+'<p style ="color:rgb(255, 255, 255); font-size:22px;">'+str(data1_4)+'</p></h2>'+'</div>')
file.close()
file = open('./crawler/n6_under_treatment_mb.html', 'w')    
file.write('<div class="daydata">'+'<h2>'+'<p style ="color:rgb(255, 255, 255); font-size:16.5px;">'+str(data1_4)+'</p></h2>'+'</div>')
file.close()



# 업데이트 날짜 text1
file = open('./crawler/date2.html', 'w', encoding="UTF-8")    
file.write('<div class="daydata">'+'<h4>'+'<p style ="color:rgb(0, 0, 0)">'+'Update : '+str(today.strftime("%Y/%m/%d %H:%M:%S"))+'</p></h4>'+'</div>')
file.close()


##########################################