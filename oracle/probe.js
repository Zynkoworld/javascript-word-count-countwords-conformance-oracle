const countWords = (phrase) => {
  let map = {};
  phrase
    .trim()
    .toLowerCase()
    .split(/[ ,\n]+/g)
    .forEach((element) => {
      element = element.replace(/[.,!:"&@$%^]|^'|'$/g, '');
      if (element) {
        if (Object.prototype.hasOwnProperty.call(map, element)) {
          map[element]++;
        } else {
          map[element] = 1;
        }
      }
    });
  return map;
};

const __in = ["word", "one of each", "one fish two fish red fish blue fish", "one,two,three", "one,\ntwo,\nthree", "car: carpet as java: javascript!!&@$%^&", "testing, 1, 2 testing", "go Go GO Stop stop", "'First: don't laugh. Then: don't cry. You're getting it.'", "Joe can't tell between 'large' and large.", "Joe can't tell between app, apple and a.", " multiple   whitespaces", ",\n,one,\n ,two \n 'three'", "can, can't, 'can't'"];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: countWords(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
