import requests
import json

url_livedoor = 'https://weather.tsukumijima.net/api/forecast/city'
url_meteo = 'https://api.open-meteo.com/v1/forecast'
# city_number = '/220040' #hamamatsu
city_number = '/130010' #tokyo

r = requests.get(url_livedoor+city_number)
# json_text = print(r.text)
data_dict = json.loads(r.text)
print(data_dict["description"]['bodyText'])
# print(json.dumps(data_dict, indent=2, ensure_ascii=False))