# アフリカお天気アプリ (Africa Weather App)



## 概要 📝

アフリカの主要都市の現在の天気をリアルタイムで表示する、シンプルなウェブアプリケーションです。このプロジェクトは、Web開発の基本的な技術（HTML, CSS, JavaScript）、外部APIの利用、そしてクラウドへのデプロイ（AWS S3, GitHub Pages）を学ぶことを目的として作成しました。

---
## 主な機能 ✨

* ドロップダウンメニューからアフリカの主要都市を選択
* 選択した都市の現在の気温を摂氏（℃）で表示
* 現在の天気の概要（例: "快晴"）と対応する天気アイコンを表示

---
## 使用技術 🛠️

* **フロントエンド:** HTML, CSS, JavaScript
* **API:** [OpenWeatherMap API](https://openweathermap.org/api)
* **インフラ:** [AWS S3](https://aws.amazon.com/s3/), [GitHub Pages](https://pages.github.com/)
* **開発ツール:** Visual Studio Code, Git, GitHub

---
## 使い方 🚀

このプロジェクトをあなたのローカル環境で動かすには、以下の手順に従ってください。

1.  **リポジトリをクローンする**
    ```bash
    git clone [https://github.com/shiori42/kadai.git](https://github.com/shiori42/kadai.git)
    ```
2.  **プロジェクトフォルダに移動する**
    ```bash
    cd kadai
    ```
3.  **APIキーを設定する**
    `script.js` ファイルを開き、以下の部分をあなた自身のOpenWeatherMap APIキーに書き換えてください。APIキーは[OpenWeatherMapの公式サイト](https://openweathermap.org/appid)から無料で取得できます。
    ```javascript
    const API_KEY = 'YOUR_API_KEY_HERE';
    ```
4.  **`index.html`を開く**
    ブラウザで`index.html`ファイルを開くと、アプリケーションが動作します。VS Codeの拡張機能「Live Server」を使うと便利です。

---
## デプロイ ☁️

このアプリケーションは以下のURLで公開されています。

* **公開URL:** [https://shiori42.github.io/kadai/](https://shiori42.github.io/kadai/)

---
## 作成者 👤

* **名前:** 本田裕樹
* **GitHub:** [@shiori42](https://github.com/shiori42)

---
## ライセンス 📄

このプロジェクトはMITライセンスです。