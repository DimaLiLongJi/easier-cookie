# easier-cookie

A cookie library with a simple API provide

### Installation

    npm install easier-cookie

### Module Loaders

Now we support TypeScript

JavaScript Cookie can also be loaded as an AMD or CommonJS module.

```javascript
const Cookie = require('easier-cookie');
import Cookie from 'easier-cookie';
```

## Basic Usage

  1. create cookie

  Cookie.set accepts 3 arguments: `key`, `value`, `options`

  `options` is an Object which includes `expires: day`, `path`, `domain`.

  ```javascript
  // Create a cookie, which value is Object
  Cookie.set('name', {a:1}, {
    expires: 7,
    path: '/aaa',
    domain: 'www.baidu.com'
  });

  // Create a cookie, which value is an Array
  Cookie.set('array', [1,2,3,4], 
    expires: 7,
  });

  // Create a cookie that expires 7 days from now
  Cookie.set('name', 1, {expires: 7});

  // Create an expiring cookie, valid to the path of the current page
  Cookies.set('name', 'value', { expires: 7, path: '/' });

  // Create an expiring cookie, which the domain is baidu
  Cookie.set('to', 'baidu', {
    expires: 7,
    domain: 'www.baidu.com'
  });
  ```

  2. get cookie

  ```javascript
  Cookies.get('name')
  ```

  3. remove cookie

  ```javascript
  Cookies.remove('name')
  ```
