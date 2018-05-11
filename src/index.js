const cookie = {
  set: function (name, value, options = {}) {
    let cookieExpires = '';
    let cookiePath = '';
    let cookieDomain = '';
    if (options.expires) {
      const mydate = new Date();
      mydate.setDate(mydate.getDate() + options.expires);
      cookieExpires = `;expires=${mydate.toGMTString()}`;
    }
    if (options.path) cookiePath = `;path=${options.path}`;
    if (options.domain) cookieDomain = `;domain=${options.domain}`;
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(JSON.stringify(value))}${cookieExpires}${cookiePath}${cookieDomain}`;
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
