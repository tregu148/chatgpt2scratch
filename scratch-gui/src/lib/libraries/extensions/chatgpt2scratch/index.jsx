import React from 'react';
import { FormattedMessage } from 'react-intl';
import chatgpt2scratchIconURL from './chatgpt2scratchaaa.png';
import chatgpt2scratchInsetIconURL from './chatgpt2scratchaaa-small.png';

const translationMap = {
  'ja': {
    'gui.extension.chatgpt2scratch.description': 'ChatGPT からの返答を得る。'
  },
  'ja-Hira': {
    'gui.extension.chatgpt2scratch.description': 'ChatGPT からのへんとうをえる。'
  }
};

const entry = {
  name: 'ChatGPT2Scratchaaa',
  extensionId: 'chatgpt2scratchaaa',
  extensionURL: 'https://tregu148.github.io/chatgpt2scratchaaa.mjs',
  collaborator: 'tregu148',
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
  helpLink: 'https://github.com/tregu148/chatgpt2scratchaaa/',
  translationMap: translationMap
}

export { entry }; // loadable-extension needs this line.
export default entry;
