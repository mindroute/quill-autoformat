import Quill from 'quill';

const Embed = Quill.import('blots/embed');

class Mention extends Embed {
  static create(value) {
    const node = super.create(value);
    node.setAttribute('title', value);
    node.setAttribute('href', this.BASE_URL + value);
    node.textContent = '@' + value;
    return node;
  }

  static value(domNode) {
    return domNode.textContent.substr(1);
  }
}
Mention.blotName = 'mention';
Mention.className = 'ql-mention';
Mention.tagName = 'A';
Mention.BASE_URL = '/';

export default Mention;
