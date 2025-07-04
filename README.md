<h1 align="center" style="color:#ff4500;">String Calculator – TDD Kata</h1>

---

### 📌 **Overview**
A JavaScript/Node.js implementation of the classic String Calculator Test‑Driven Development (TDD) kata. The goal is to practice writing tests first, then evolving the implementation through incremental design and refactoring.

---

### ✨ **Features**
| Capability               | Spec                                                                                                                                                                   |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Basic addition**       | Handles an empty string, a single number, or any number of comma‑separated numbers.                                                                                    |
| **Custom delimiters**    | Declare one or multiple custom delimiters of any length using the `//[delimiter]\n` header syntax (e.g. `//;\n1;2`).                                                   |
| **New‐line support**     | Mix `\n` with delimiters (e.g. `"1\n2,3"` → **6**).                                                                                                                    |
| **Negative‑number guard**| Throws `Error: negative numbers not allowed <list>` when any negative numbers are found.                                                                               |
| **1000‑limit rule**      | Ignores numbers **> 1000** when summing.                                                                                                                                |
| **Utility helper**       | `getSum(array)` mirrors the >1000 rule and negative handling.                                                                                                           |

---


### 🗂  **Project Structure**
```plaintext
├── lib/
│   └── stringCalc.js      # Source code (add, getSum, helpers)
├── tests/
│   └── stringCalc.test.js # Mocha test‑suite
├── package.json           # Scripts + dependencies
└── README.md              # This file
```

---

## 🚀 Quick Start

### 1. Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer
- `npm` (comes with Node), or optionally `pnpm` / `yarn`

---

### 2. Installation

```bash
# Clone the repo
git clone https://github.com/kinjal-05/TDD-Assessment-Submission.git
cd String_Calculator

# Install dependencies
npm install

---

### 🛠 **Usage in Code**
```sh
const { add, getSum } = require('./lib/stringCalc');

add('');                    // → 0
add('1,2,3');               // → 6
add('//[***]\n1***2***4'); // → 7

getSum([5, -2, 10]);        // → 13 (‑2 ignored before call)
```
Note: All validation (negatives, > 1000, delimiter parsing) lives in add(). The helper getSum() is intentionally simple so it can be reused.

---

### 🧪 **Developing With TDD**

This kata follows the classic **Red → Green → Refactor** loop:

- 🔴 **Red** – Write a failing test for the next required behaviour.
- 🟢 **Green** – Write the minimal production code to make the test pass.
- 🛠️ **Refactor** – Clean up the code while all tests remain green.

Repeat this cycle until all rules are satisfied.





