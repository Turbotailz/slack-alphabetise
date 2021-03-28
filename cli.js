#!/usr/bin/env node
const alphabetise = require('./index');
const chalk = require('chalk');

const [ node, file, string, style = 'white' ] = process.argv;

try {
  const alphabetised = alphabetise(string, style);

  console.log(chalk`
🥝 {green Translating string:}
❯ ${string}
  `);

  console.log(chalk`
💯 Yeet this into Slack:
❯ {cyanBright ${alphabetised}}
  `);
} catch ({ message }) {
  if (message.includes('A string is required')) {
    console.error(chalk`
🤔 {red A string is required}
✅ {green Usage:} {white slack-alphabetise "Hello world"}
    `);
  }

  else if (message.includes('Invalid style')) {
    console.error(chalk`
😨 {red Invalid style:} ${style}

✅ {green Valid styles:} 
❯ white
{yellow ❯ yellow}
    `);
  }

  else if (message.includes('Invalid character')) {
    const [ _, char ] = message.split('"');

    const [ prefix, ...rest ] = string.split(char);
    const suffix = rest.join(char);
    const arrow = ['^'];

    do {
      arrow.unshift(' ');
    } while (prefix.length >= arrow.length);

    console.error(chalk`
🤢 {red Invalid character:}
${prefix}{black.bgYellowBright ${char}}${suffix}
${arrow.join('')}

✅ {green Valid characters:} 
❯ a-z
❯ !
❯ ?
❯ @
❯ #
    `);
  }
}
