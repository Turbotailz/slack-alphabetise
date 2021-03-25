# Slack Alphabetise

This tool converts a simple string of text into Slack "alphabet" emoji codes which you can copy & paste into Slack.

It's available both as a global CLI command, or an importable function in your code.

## Installation

### Install globally

```bash
npm install -g slack-alphabetise
```

You can now use the `slack-alphabetise` command globally.

#### Command usage

```bash
slack-alphabetise <string> [style]
```

`<string>` - can be any string containing alpha characters, spaces, `!`, `?`, `@` and `#` (if using spaces, you must wrap the string in "quotes"). The command will fail if any other characters are used.
`[style]` - can be either `white` or `yellow` (defaults to `white`).

##### Example

```bash
slack-alphabetise "Hello world!" yellow
```

Will output:

```
:alphabet_yellow_h::alphabet_yellow_e::alphabet_yellow_l::alphabet_yellow_l::alphabet_yellow_o: :alphabet_yellow_w::alphabet_yellow_o::alphabet_yellow_r::alphabet_yellow_l::alphabet_yellow_d::alphabet_yellow_exclamation:
```

When pasted into slack will result in the following emoji being rendered:

![](https://i.imgur.com/PblwreE.png)

### Install as a dependency

```bash
npm install --save slack-alphabetise
```

Then in your code:

```js
const alphabetise = require('slack-alphabetise');
const string = 'Hello world!';
const emoji = alphabetise(string, 'yellow'); // available styles are 'white' and 'yellow' (defaults to 'white')
console.log(emoji);

// result:
// :alphabet_yellow_h::alphabet_yellow_e::alphabet_yellow_l::alphabet_yellow_l::alphabet_yellow_o: :alphabet_yellow_w::alphabet_yellow_o::alphabet_yellow_r::alphabet_yellow_l::alphabet_yellow_d::alphabet_yellow_exclamation:
```
