const chalk = require('chalk');

function alphabetise(string, style = 'white') {
  if (!string)
    throw new Error('A string is required');
  if (!['white', 'yellow'].includes(style))
    throw new Error(`Invalid style`)

  const characterMap = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    e: 'e',
    f: 'f',
    g: 'g',
    h: 'h',
    i: 'i',
    j: 'j',
    k: 'k',
    l: 'l',
    m: 'm',
    n: 'n',
    o: 'o',
    p: 'p',
    q: 'q',
    r: 'r',
    s: 's',
    t: 't',
    u: 'u',
    v: 'v',
    w: 'w',
    x: 'x',
    y: 'y',
    z: 'z',
    '!': 'exclamation',
    '?': 'question',
    '@': 'at',
    '#': 'hash'
  };

  const emoji = [...string].map((char) => {
    if (char !== ' ') {
      const character = characterMap[char.toLowerCase()];
      if (!character) throw new Error(`Invalid character: "${char}"`);
      return `:alphabet_${style}_${character}:`
    } else {
      return char;
    }
  });
  return emoji.join('');
}

module.exports = alphabetise;
