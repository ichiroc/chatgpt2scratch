# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ChatGPT2Scratch is a Scratch extension that enables using OpenAI's ChatGPT (gpt-4o-mini) through Scratch blocks. Hosted on GitHub Pages at `https://ichiroc.github.io/chatgpt2scratch/`.

## Architecture

This repository is an extension that gets installed into scratch-gui — it does not run standalone.

- `scratch-vm/src/extensions/scratch3_chatgpt2scratch/index.js` — Main extension logic: block definitions, OpenAI API calls, i18n (en, ja, ja-Hira)
- `scratch-gui/src/lib/libraries/extensions/chatgpt2scratch/index.jsx` — Extension entry for the Scratch GUI extension library
- `install.sh` — Injects the extension into scratch-gui's `node_modules`. Embeds `AZURE_API_KEY` and `DOJO_KEY` environment variables into the source

There is a special code path for access via CoderDojo Japan: it uses an Azure OpenAI endpoint and does not require the user to set an API key.

## Local Development

```sh
# 1. Clone scratch-gui
git clone --depth 1 git@github.com:LLK/scratch-gui.git
cd scratch-gui
npm install

# 2. Clone this repo and install
git clone git@github.com:ichiroc/chatgpt2scratch.git
sh chatgpt2scratch/install.sh

# 3. Start
npm start
# Access at http://localhost:8601
```

## CI/CD

`.github/workflows/build.yml` — Deploys to GitHub Pages on push to main. Checks out scratch-gui, installs the extension, builds, then deploys.
