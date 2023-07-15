# ChatGPT2Scratch

[English](README.md)

ChatGPT2Scratch は、Scratch ブロックから OpenAI の ChatGPT を利用したアプリケーションを開発できる Scratch の拡張機能です。

https://ichiroc.github.io/chatgpt2scratch/

## 使い方

1. 事前に [OpenAI](https://openai.com/) のサイトから API Key を取得する必要があります
2. [公式サイト](https://ichiroc.github.io/chatgpt2scratch/) を開きます
3. 「拡張機能を選ぶ」画面を開き「ChatGPT2Scratch」を選びます
4. 最初に「API キーをセット」ブロックを実行して、 OpenAI のサイトから取得した API キーをセットします
5. 「〜〜の答え」のブロックを実行すると ChatGPT からの返答を取得することができます

## API の利用料について

ChatGPT2Scratch は OpenAI の API の **gpt-3.5-turbo** モデルを利用しています。

OpenAI の API 利用には料金が発生します。
入力と出力の文字列をそれぞれトークンと呼ばれる単位に分解して、トークンごとに費用が発生します。

詳しくは次のページをご確認ください。

https://openai.com/pricing

ある文字列がどれくらいのトークン数となるのかを調べるには、次のツールが便利です。

https://platform.openai.com/tokenizer

## 開発者向け

自身のコンピュータでこの拡張を実行する方法を解説します。

1. scratch-gui のレポジトリをクローンします

```sh
git clone --depth 1 git@github.com:LLK/scratch-gui.git
cd scratch-gui
npm install
```

2. chatgpt2scratch のレポジトリ（このレポジトリ）をクローンします

ディレクトリは scratch-gui のまま以下を実行します。

```sh
git clone git@github.com:ichiroc/chatgpt2scratch.git
sh chatgpt2scratch/install.sh
```

3. `npm start` します

```sh
npm start
```

http://localhost:8601 を開けばアクセスできます

## Release Notes

https://github.com/ichiroc/chatgpt2scratch/releases
