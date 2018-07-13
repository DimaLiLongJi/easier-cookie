const Cookie = {
  set: function (name, value, options = {}) {
    let cookieExpires = '';
    let cookiePath = '';
    let cookieDomain = '';
    let cookieValue = '';
    if (options.expires) {
      const mydate = new Date();
      mydate.setDate(mydate.getDate() + options.expires);
      cookieExpires = `;expires=${mydate.toGMTString()}`;
    }
    if (options.path) cookiePath = `;path=${options.path}`;
    if (options.domain) cookieDomain = `;domain=${options.domain}`;
    if (value instanceof Object) {
      cookieValue = encodeURI(JSON.stringify(value));
    } else {
      cookieValue = encodeURI(value);
    }
    document.cookie = `${encodeURI(name)}=${cookieValue}${cookieExpires}${cookiePath}${cookieDomain}`;
  },
  get: function (name) {
    if (!name) return null;
    const cookieArray = document.cookie.split('; ');
    for (let i = 0; i < cookieArray.length; i++) {
      const cookieName = cookieArray[i].split('=');
      if (cookieName[0] === decodeURI(name)) {
        let result;
        try{
          result = JSON.parse(decodeURI(cookieName[1]));
        }catch(e){
          result = decodeURI(cookieName[1]);
        }
        if (result === '') return null;
        return result;
      }
    }
    return null;
  },
  remove: function (name) {
    try{
      this.set(name, '', -1);
      return true;
    } catch(e) {
      console.error(`remove cookie ${name} failed:`, e);
      return false;
    }
  },
};

module.exports = Cookie;
