# Pairing Katas

A collection of javascript katas to pair with interview candidates on.

## Setup

1. `npm i`
2. Uncomment specs file for kata you're wanting to run
3. `npm test` (starts a watcher to run tests)

### Notes

- Currently mocha tests run in parallel in order to run the watcher with esm. This results in ".only" not working.
- Since the tests use esm by default Node 13.2.0 or later is required.

## Katas

### Roman Numerals

A string building exercise where we take an arabic number (1,2,3) and convert it to it's roman numeral equivalent (I,II,III)

Alternatively, we can do a string manipulation exercise where we perform the inverse of this function.

### Phase Ten

An exercise in arrays where we check a collection of cards to see if we are elligible to complete a particular phase in the Rummy-like card game of Phase 10.
