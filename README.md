# String Calculator – TDD Kata
A JavaScript/Node.js implementation of the classic String Calculator Test‑Driven Development (TDD) kata. The goal is to practice writing tests first, then evolving the implementation through incremental design and refactoring.

✨ Features

Capability

Spec

Basic addition

Handles an empty string, a single number, or any number of comma‑separated numbers.

Custom delimiters

Declare one or multiple custom delimiters of any length using the //[delimiter]\n header syntax (e.g. //;\n1;2).

New‑line support

Mix \n with delimiters (e.g. "1\n2,3" → **6**).

Negative‑number guard

Throws Error: negative numbers not allowed <list> when any negative numbers are found.

1000‑limit rule

Ignores numbers > 1000 when summing.

Utility helper

getSum(array) mirrors the >1000 rule and negative handling.

🗂 Project Structure

.
├── lib/
│   └── stringCalc.js      # Source code (add, getSum, helpers)
├── tests/
│   └── stringCalc.test.js # Mocha test‑suite
├── package.json           # Scripts + dependencies
└── README.md              # This file

🚀 Quick Start

1. Prerequisites

Node.js 18 or newer

npm (bundled with Node) or pnpm / yarn

2. Installation

# Clone the repo
git clone https://github.com/<your‑user>/<your‑repo>.git
cd string-calculator-tdd

# Install dependencies
npm install

3. Run the Test Suite

# Execute all unit tests
npm test

You should see output similar to:

> mocha tests --reporter spec

  String Calculator
    ✓ returns 0 for ""
    ✓ returns 1 for "1"
    …

  Utility – getSum()
    ✓ returns 6 for [1,2,3]
    …

  30 passing (25 ms)

🛠 Usage in Code

const { add, getSum } = require('./lib/stringCalc');

add('');                    // → 0
add('1,2,3');               // → 6
add('//[***]\n1***2***4'); // → 7

getSum([5, -2, 10]);        // → 13 (‑2 ignored before call)

Note: All validation (negatives, > 1000, delimiter parsing) lives in add(). The helper getSum() is intentionally simple so it can be reused.

🧪 Developing With TDD

The kata encourages the cycle Red → Green → Refactor:

Red – write a failing test for the next required behaviour.

Green – write the minimal production code to make the test pass.

Refactor – clean up the code while all tests remain green.

Iterate until all rules are satisfied. The provided test‑suite covers the entire ruleset, but feel free to delete tests and re‑add them one by one for practice.
