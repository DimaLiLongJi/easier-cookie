const cookie = {
  set: function (name, value, options = {}) {
    const cookieExpirse = options.expirse || 7;
    const cookiePath = options.path || '/';
    let mydate = new Date();
    mydate.setDate(mydate.getDate() + cookieExpirse);
    if (options.domain) {
      document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(JSON.stringify(value))};expirse=${mydate.toGMTString()};path=${cookiePath};domain=${cookieDomain}`;
    } else {
      document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(JSON.stringify(value))};expirse=${mydate.toGMTString()};path=${cookiePath}`;
    }
  },
  get: function (name) {
    if (!name) return null;
    const cookieArray = document.cookie.split('; ');
    for (let i = 0; i < cookieArray.length; i++) {
      const cookieName = cookieArray[i].split('=');
      if (cookieName[0] === encodeURIComponent(name)) {
        const result = JSON.parse(decodeURIComponent(cookieName[1]));
        if (result === '') return null;
        return result;
      }
    }
    return null;
  },
  remove: function (name) {
    this.set(name, '', -1);
  },
};

module.exports = cookie;
