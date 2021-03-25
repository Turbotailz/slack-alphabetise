#!/usr/bin/env node
const alphabetise = require('./index');

const [ node, file, string, style = 'white' ] = process.argv;

if (!string) throw new Error('A string is required!\nUsage: slack-alphabetise "Hello world"');

console.log(alphabetise(string, style));
