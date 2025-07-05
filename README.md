<h1 align="center" style="color:#ff4500;">String Calculator – TDD Kata</h1>

---

### 📌 **Overview**
A JavaScript/Node.js implementation of the classic String Calculator Test‑Driven Development (TDD) kata. The goal is to practice writing tests first, then evolving the implementation through incremental design and refactoring.

---

### ✨ **Features**
| #  | Requirement / Capability           | Behaviour & Examples                                                                 |
|----|------------------------------------|---------------------------------------------------------------------------------------|
| 1  | **Basic addition (≤ 2 numbers)**    | `Add("") → 0` &nbsp;·&nbsp; `Add("1") → 1` &nbsp;·&nbsp; `Add("1,2") → 3`             |
| 2  | **Unlimited numbers**              | Accept any number of comma‑separated values: `Add("1,5,6") → 12`                   |
| 3  | **New‑line support**               | Treat `\n` as a delimiter: `Add("11\n2\n,66,88") → 167` &nbsp;·&nbsp; `"1,\n"` is **invalid**  |
| 4  | **Custom delimiter**               | Header format `//[delim]\n`: `Add("//;\n1;2") → 3` (delimiter `;`)                   |
| 5  | **Negative‑number guard**          | Throw `Error: negatives not allowed -1,-4` (list **all** negatives)                  |
| 6  | **Ignore > 1000**                  | Numbers > 1000 are skipped: `Add("10009,3") → 3`                                       |
| 7  | **Delimiter of any length**        | Example: `Add("//[***]\n1***2***3") → 6`                                              |
| 8  | **Multiple delimiters**            | Example: `Add("//[*][%]\n1*2%3") → 6`                                                 |
| 9  | **Multi‑char, multi‑delimiter**    | Example: `Add("//[***]\n1***2***4***1") → 8`                                           |                                                                                                      |

---


### 🗂  **Project Structure**
```plaintext
├── lib/
│   └── stringCalc.js      # Source code (add, getSum, helpers)
├── tests/
│   └── stringCalc.test.js # Mocha test‑suite
├── assets/
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
```

# Install dependencies
```bash
npm install
```

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

---

## 📌 Test Results

<img src="assets/Screenshot (23).png" alt="App Screenshot 1" width="500"/>
<br/><br/>
<img src="assets/Screenshot (24).png" alt="App Screenshot 2" width="500"/>




