weather-forecast-app

静岡県浜松市高丘に住む人のためのピンポイント天気予報アプリ

## 技術構成

- react
- Next.js
- tailWind

### 1. env ファイルを作成

- ルートディレクトリ直下に.envファイルを作成
- 「.env.sample」の記述をコピー

```
cd hoseru
touch .env
```

### 2. docker 起動
- ビルド＆起動

```
docker compose up
```

- コンテナにアクセス

```
make hoseru-ssh
```
