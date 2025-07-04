<h1 align="center" style="color:#ff4500;">String Calculator – TDD Kata</h1>

---

### 📌 **Overview**
A JavaScript/Node.js implementation of the classic String Calculator Test‑Driven Development (TDD) kata. The goal is to practice writing tests first, then evolving the implementation through incremental design and refactoring.

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

### 🛠 **Usage in Code**
``bash
const { add, getSum } = require('./lib/stringCalc');

add('');                    // → 0
add('1,2,3');               // → 6
add('//[***]\n1***2***4'); // → 7

getSum([5, -2, 10]);        // → 13 (‑2 ignored before call)
``

