import Quill from 'quill';

import Hashtag from './formats/hashtag';
import Mention from './formats/mention';

import Autoformat, { AutoformatHelperAttribute } from './modules/autoformat';

if(Quill.version && parseInt(Quill.version[0]) < 2) {
  console.warn("quill-autoformat requires Quill 2.0 or higher to work properly")
}

Quill.register({
  'modules/autoformat': Autoformat,
  'formats/hashtag': Hashtag,
  'formats/mention': Mention,
  'formats/autoformat-helper': AutoformatHelperAttribute
});

export {
  Autoformat as default,
  Hashtag,
  Mention,
  AutoformatHelperAttribute
}
