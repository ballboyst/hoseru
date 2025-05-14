import requests
import json
from http.server import BaseHTTPRequestHandler, HTTPServer
# apiのURL
url_livedoor = 'https://weather.tsukumijima.net/api/forecast/city'
url_meteo = 'https://api.open-meteo.com/v1/forecast/'

# 位置情報を指定
city_number = '/130010' #tokyo
latitude = '35.766314870909355'
longitude = '139.64388616550843'

# クエリパラメーターを指定
location = f'?latitude={latitude}&longitude={longitude}&hourly=temperature_2m,precipitation_probability,precipitation,weather_code&timezone=Asia/Tokyo'

# apiからデータを取得
summary_request = requests.get(url_livedoor+city_number)
summary_data_dict = json.loads(summary_request.text)
summary = summary_data_dict["description"]['bodyText']

# print(json.dumps(data_dict, indent=2, ensure_ascii=False))
detail_request = requests.get(url_meteo+location)

# ここにdetailを整形する処理

json_text = print(detail_request.text) # debug用


class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # レスポンスのヘッダーを設定
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

        # レスポンスデータを作成
        response_data = {"summary":summary,
                         "detail":detail_r.text 
        } 

        # JSON形式でレスポンスを返す
        self.wfile.write(json.dumps(response_data, ensure_ascii=False).encode('utf-8'))

# HTTPサーバーとして起動
def run(server_class=HTTPServer, handler_class=RequestHandler, port=8888):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()

if __name__ == "__main__":
    run()