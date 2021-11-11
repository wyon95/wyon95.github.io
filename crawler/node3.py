from bs4 import BeautifulSoup as bs
import requests
import csv
import re
from datetime import datetime
import json

# html로 작성된 웹페이지 코드를 반환
# html언어 구조: <태그 속성=속성값> 텍스트 </태그>




# find(태그, {속성: 속성값})
# 처음 매칭된 1개의 값만 반환
#createDt = soup.findAll('item')   #
#createDt2 = soup.findAll('deathCnt')
#print("사망",createDt[0])
# findAll(태그)
# 매칭된 모든 값을 리스트 형태로 반환
#print("사망",createDt[18])

#print("사망",createDt[0])




file = open('./crawler/dataset/210903.txt', 'w',encoding='utf-8')    
file.write('<response>\n<header>\n<resultCode>00</resultCode>\n<resultMsg>NORMAL SERVICE.</resultMsg>\n</header>\n<body>\n<items>\n'
+'\n'
+'\n</items>\n<numOfRows>10</numOfRows>\n<pageNo>1</pageNo>\n<totalCount>19</totalCount>\n</body>\n</response>')
file.close()
