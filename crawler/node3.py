from bs4 import BeautifulSoup as bs
import requests
import csv
import re
from datetime import datetime


# html로 작성된 웹페이지 코드를 반환
# html언어 구조: <태그 속성=속성값> 텍스트 </태그>



html = requests.get('http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=u%2BXsTVV1nl13bsl5mxFNCaZ0o48loSbVj4pQoNm2xFONwLswAgYcNrabZ9jBp7mIdKQZSgYV7NBAjOyHH6cr%2Fg%3D%3D&startCreateDt=20210906&endCreateDt=20210906')
soup = bs(html.text,'html.parser')

# find(태그, {속성: 속성값})
# 처음 매칭된 1개의 값만 반환
data1 = soup.findAll('item')   #

print("사망",data1[0])
# findAll(태그)
# 매칭된 모든 값을 리스트 형태로 반환


file = open('./crawler/dataset/210906.txt', 'w',encoding='UTF-8')    
file.write('<response><header><resultCode>00</resultCode><resultMsg>NORMAL SERVICE.</resultMsg></header><body><items>'+str(data1[18])+str(data1[17])+str(data1[16])+str(data1[15])+str(data1[14])+str(data1[13])+str(data1[12])+str(data1[11])+str(data1[10])+str(data1[9])+str(data1[8])+str(data1[7])+str(data1[6])+str(data1[5])+str(data1[4])+str(data1[3])+str(data1[2])+str(data1[1])+str(data1[0])+'</items><numOfRows>10</numOfRows><pageNo>1</pageNo><totalCount>19</totalCount></body></response>')
file.close()