# ChatGPT2Scratch

[日本語](README.ja.md)

ChatGPT2Scratch is a Scratch extension that allows you to develop applications using OpenAI's ChatGPT through Scratch blocks.

https://ichiroc.github.io/chatgpt2scratch/

## Usage

To use ChatGPT2Scratch:

1. You need to obtain an API Key from the OpenAI website in advance.
1. Open the official website.
1. Open the "Choose an Extension" screen and select "ChatGPT2Scratch".
1. Execute the "Set API Key" block first and set the API Key obtained from the OpenAI website.
1. When you execute the "Get answer to ~" block, you can get a response from ChatGPT.

## For Developers

To run the ChatGPT2Scratch extension on your computer, follow these steps:

1. Clone the scratch-gui repository:

```sh
git clone --depth 1 git@github.com:LLK/scratch-gui.git
cd scratch-gui
npm install
```

2. Clone the chatgpt2scratch repository (this repository):

Run the following commands in the scratch-gui directory.

ディレクトリは scratch-gui のまま以下を実行します。

```sh
git clone git@github.com:ichiroc/chatgpt2scratch.git
sh chatgpt2scratch/install.sh
```

3. Run npm start:

```sh
npm start
```

You can access it at http://localhost:8601.

## Release Notes

https://github.com/ichiroc/chatgpt2scratch/releases
