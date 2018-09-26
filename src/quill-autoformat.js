import Quill from 'quill';

import Hashtag from './formats/hashtag';
import Mention from './formats/mention';

import Autoformat, { AutoformatHelperAttribute } from './modules/autoformat';

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