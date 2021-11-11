from bs4 import BeautifulSoup as bs
import requests
import csv
import re
from datetime import datetime


# html로 작성된 웹페이지 코드를 반환
# html언어 구조: <태그 속성=속성값> 텍스트 </태그>



html = requests.get('http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=u%2BXsTVV1nl13bsl5mxFNCaZ0o48loSbVj4pQoNm2xFONwLswAgYcNrabZ9jBp7mIdKQZSgYV7NBAjOyHH6cr%2Fg%3D%3D&startCreateDt=20210805&endCreateDt=20210805')
soup = bs(html.text,'html.parser')

# find(태그, {속성: 속성값})
# 처음 매칭된 1개의 값만 반환
createDt = soup.findAll('item')   #

#print("사망",createDt[0])
# findAll(태그)
# 매칭된 모든 값을 리스트 형태로 반환
#print("사망",createDt[18])

print("사망",createDt[0])
file = open('./crawler/dataset/210805.txt', 'w',encoding='utf-8')    
file.write('<response>\n<header>\n<resultCode>00</resultCode>\n<resultMsg>NORMAL SERVICE.</resultMsg>\n</header>\n<body>\n<items>\n'
+str(createDt[18])+'\n'
+str(createDt[17])+'\n'
+str(createDt[16])+'\n'
+str(createDt[15])+'\n'
+str(createDt[14])+'\n'
+str(createDt[13])+'\n'
+str(createDt[12])+'\n'
+str(createDt[11])+'\n'
+str(createDt[10])+'\n'
+str(createDt[9])+'\n'
+str(createDt[8])+'\n'
+str(createDt[7])+'\n'
+str(createDt[6])+'\n'
+str(createDt[5])+'\n'
+str(createDt[4])+'\n'
+str(createDt[3])+'\n'
+str(createDt[2])+'\n'
+str(createDt[1])+'\n'
+str(createDt[0])
+'\n</items>\n<numOfRows>10</numOfRows>\n<pageNo>1</pageNo>\n<totalCount>19</totalCount>\n</body>\n</response>')
file.close()