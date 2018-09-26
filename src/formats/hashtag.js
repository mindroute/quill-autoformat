import Quill from 'quill';

const Embed = Quill.import('blots/embed');
const Inline = Quill.import('blots/inline');
const Text = Quill.import('blots/text');
const Cursor = Quill.import('blots/cursor');

class Hashtag extends Embed {
  static create(value) {
    let node = super.create(value);
    node.setAttribute('href', this.BASE_URL + value);
    node.setAttribute('spellcheck', false);
    node.textContent = "#" + value;
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('href').substr(this.BASE_URL.length);
  }

  format(name, value) {
    this.domNode.setAttribute('href', this.BASE_URL + value);
  }
  
  static value(domNode) {
    return domNode.textContent.substr(1);
  }
}
Hashtag.blotName = 'hashtag';
Hashtag.className = 'ql-hashtag';
Hashtag.tagName = 'A';
Hashtag.BASE_URL = '#';

class HashtagInline extends Inline {
  static create(value) {
    let node = super.create(value);
    node.setAttribute('href', this.BASE_URL + value);
    node.setAttribute('spellcheck', false);
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('href').substr(this.BASE_URL.length);
  }

  format(name, value) {
    this.domNode.setAttribute('href', this.BASE_URL + value);
  }
}
HashtagInline.blotName = 'hashtag';
HashtagInline.className = 'ql-hashtag';
HashtagInline.tagName = 'A';
HashtagInline.allowedChildren = [Text, Cursor];
HashtagInline.BASE_URL = '#';

export { Hashtag as default, HashtagInline };
