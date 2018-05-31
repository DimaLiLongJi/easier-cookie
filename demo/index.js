import Cookie from '../src';

Cookie.set('object', {
    a:1
}, {
    expires: 7
});
Cookie.set('string', '11不11');
Cookie.set('number', 1111);
Cookie.set('array', [1,2,3,4]);

const oobject = Cookie.get('object');
const sstring = Cookie.get('string');
const nnumber = Cookie.get('number');
const aarray = Cookie.get('array');

console.log('oobject', oobject);
console.log('sstring', sstring);
console.log('nnumber', nnumber);
console.log('aarray', aarray);
