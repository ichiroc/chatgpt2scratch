import React from 'react';
import { FormattedMessage } from 'react-intl';
import chatgpt2scratchIconURL from './chatgpt2scratch.png';
import chatgpt2scratchInsetIconURL from './chatgpt2scratch-small.png';

const translationMap = {
  'ja': {
    'gui.extension.chatgpt2scratch.description': 'ChatGPT からの返答を得る。'
  },
  'ja-Hira': {
    'gui.extension.chatgpt2scratch.description': 'ChatGPT からのへんとうをえる。'
  }
};

const entry = {
  name: 'ChatGPT2Scratch',
  extensionId: 'chatgpt2scratch',
  extensionURL: 'https://ichiroc.github.io/chatgpt2scratch.mjs',
  collaborator: 'ichiroc',
  iconURL: chatgpt2scratchIconURL,
  insetIconURL: chatgpt2scratchInsetIconURL,
  description: (
    <FormattedMessage
      defaultMessage="ChatGPT2Scratch Blocks."
      description="Description for CHATGPT2Scratch Blocks"
      id="gui.extension.chatgpt2scratch.description"
    />
  ),
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: true,
  helpLink: 'https://github.com/ichiroc/chatgpt2scratch/',
  translationMap: translationMap
}

export { entry }; // loadable-extension needs this line.
export default entry;
