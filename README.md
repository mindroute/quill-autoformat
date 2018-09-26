# Quill Autoformat
Module for transforming and formatting text as you type or paste in [Quill](https://github.com/quilljs/quill). Using RegExp to find and trigger transformations for text such as links, mentions, hashtags or emojis.
Out of the box support for:
- Links
- Hashtags
- Mentions

*Note: Requires Quill 2.0*
 
## Usage
To add quill-autoformat to your Quill, simply add the javascript after quill or import it in your project. Use the provided quill-formats or define your own parchments.

```html
<body>
  ...
  <form action="#" method="get">
    <div id="editor-container"></div>
  </form>
  ...
  <script src="/path/to/quill.min.js"></script>
  <script src="/path/to/quill-autoformat.js"></script>
  <script>
    var editor = new Quill('#editor-container', {
      modules: {
        autoformat: true
      }
    });
  </script>
  ...
</body>
```

## Transforms
You can specify as many transforms as you like, just give each transform a unique name. Three transforms are enabled by default; hashtag, mention and link. Just set the default types to false to disable them or change any property you like to a custom value.

Each transform may have the following properties:

```javascript
transform: {
   trigger:     RegExp, // RegExp for matching text input characters to trigger the match. Defaults to /./ which is matching any character
   find:        RegExp, // Global RegExp to search for in the text
   extract:     RegExp, // Additional RegExp to finetune and override the found text match
   transform:   String || Function, // String or function passed to String.replace() to rewrite find/extract results
   insert:      String || {...}, // Insert name string or embed insert object.
   format:      String || {...} // Format name string or attributes object.
 }
```
#### Reference
- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [String Replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Quill Delta Inserts](https://github.com/quilljs/delta/#insert)

## Default Options
Specify one option or more to override defaults.

```javascript
var editor = new Quill('#editor-container', {
  modules: {
    autoformat: {
      hashtag: {
        trigger: /[\s.,;:!?]/,
        find: /(?:^|\s)#[^\s.,;:!?]+/i,
        extract: /#([^\s.,;:!?]+)/i,
        transform: '$1',
        insert: 'hashtag'
      },
      mention: {
        trigger: /[\s.,;:!?]/,
        find: /(?:^|\s)@[^\s.,;:!?]+/i,
        extract: /@([^\s.,;:!?]+)/i,
        transform: '$1',
        insert: 'mention'
      },
      link: {
        trigger: /[\s]/,
        find: /https?:\/\/[\S]+|(www\.[\S]+)/gi,
        transform: function (value, noProtocol) { // value == match[0], noProtocol == match[1]
          return noProtocol ? "http://" + value : value;
        },
        format: 'link'
      }
    }
  }
});
```
