# Yet Another JS Course v2

A progressive JavaScript course designed for **QA / AQA engineers**. The course covers core JS concepts across six units (0–5), from variables and loops to async/await, giving you the practical knowledge needed for test automation.

## Prerequisites

| Tool | Version |
|------|---------|
| Git | Any modern client |
| Node.js | **20 LTS** or higher (even-numbered LTS recommended) |
| VS Code | Latest stable |

## Setup

```bash
npm install
npm run test:unit0
```

If everything is configured correctly you will see:

> You've succeeded to set up everything!
> Now it's time to write your first code.

## Course Structure

| Unit | Topics | Difficulty tiers |
|------|--------|-----------------|
| **Unit 0** | Environment check | — |
| **Unit 1** | Variables, types, conditions, loops | Easy · Medium |
| **Unit 2** | Functions (declarations, expressions, arrows, callbacks, closures, recursion) | Easy · Medium · Hard |
| **Unit 3** | String & Array methods | Easy · Medium |
| **Unit 4** | Objects & Classes (prototypes, inheritance) | Easy · Medium |
| **Unit 5** | Callbacks, Promises, async/await | Easy · Medium · Hard |

Each unit contains up to three folders:

| Folder | Description |
|--------|-------------|
| `1-mandatory-easy/` | Core exercises — **start here** |
| `2-optional-medium/` | Intermediate exercises for extra practice |
| `3-optional-hard/` | Advanced challenges (Codewars links and/or local tasks) |

## How to Work on Exercises

1. Open the exercise file inside `Unit-N/1-mandatory-easy/` (or the medium/hard folder).
2. Read the JSDoc comment at the top — it describes the task and often links to useful resources.
3. Write your code where you see `// enter your code here`.
4. Run the matching test script (see below) to check your solution.

> **Important:**
> - Do **not** modify files inside `Unit-N/test/` — tests are read-only.
> - Do **not** change the `module.exports` block at the bottom of exercise files — tests depend on those exports.
> - Some tests check the **form** of your function (declaration vs. expression vs. arrow). Follow the instructions in the task carefully.

## Running Tests

Run **all** tests:

```bash
npm test
```

Run all tests for a specific unit:

```bash
npm run test:unit1
```

Run a single topic at a specific difficulty:

```bash
npm run test:unit1:variables:easy
```

### Full Test Script Reference

<details>
<summary><strong>Unit 1 — Variables, Conditions, Loops</strong></summary>

| Script | What it tests |
|--------|---------------|
| `test:unit1` | All Unit 1 tests |
| `test:unit1:variables:easy` | Variables (easy) |
| `test:unit1:variables:medium` | Variables (medium) |
| `test:unit1:conditions:easy` | Conditions (easy) |
| `test:unit1:conditions:medium` | Conditions (medium) |
| `test:unit1:loops:easy` | Loops (easy) |
| `test:unit1:loops:medium` | Loops (medium) |

</details>

<details>
<summary><strong>Unit 2 — Functions</strong></summary>

| Script | What it tests |
|--------|---------------|
| `test:unit2` | All Unit 2 tests |
| `test:unit2:functions:easy` | Functions (easy) |
| `test:unit2:functions:medium` | Functions (medium) |
| `test:unit2:functions:hard` | Functions (hard) |

</details>

<details>
<summary><strong>Unit 3 — Strings & Arrays</strong></summary>

| Script | What it tests |
|--------|---------------|
| `test:unit3` | All Unit 3 tests |
| `test:unit3:strings:easy` | Strings (easy) |
| `test:unit3:strings:medium` | Strings (medium) |
| `test:unit3:arrays:easy` | Arrays (easy) |
| `test:unit3:arrays:medium` | Arrays (medium) |

</details>

<details>
<summary><strong>Unit 4 — Objects & Classes</strong></summary>

| Script | What it tests |
|--------|---------------|
| `test:unit4` | All Unit 4 tests |
| `test:unit4:easy:objects` | Objects (easy) |
| `test:unit4:easy:classes` | Classes (easy) |
| `test:unit4:medium:1` | Objects (medium — part 1) |
| `test:unit4:medium:2` | Class User (medium — part 2) |
| `test:unit4:medium:3` | Objects User (medium — part 3) |
| `test:unit4:medium:4` | Class Guest & Registered (medium — part 4) |
| `test:unit4:medium:5` | Objects Guest & Registered (medium — part 5) |

</details>

<details>
<summary><strong>Unit 5 — Callbacks, Promises, Async/Await</strong></summary>

| Script | What it tests |
|--------|---------------|
| `test:unit5` | All Unit 5 tests |
| `test:unit5:callbacks:easy` | Callbacks (easy) |
| `test:unit5:callbacks:medium` | Callbacks (medium) |
| `test:unit5:callbacks:hard` | Callbacks (hard) |
| `test:unit5:promises:easy` | Promises (easy) |
| `test:unit5:promises:medium` | Promises (medium) |
| `test:unit5:async:easy` | Async/Await (easy) |
| `test:unit5:async:medium` | Async/Await (medium) |

</details>

## Code Style

The project uses **ESLint** with `@stylistic/eslint-plugin`. Key rules: single quotes, semicolons, 2-space indentation, max 150 chars per line.

Auto-fix style issues:

```bash
npm run eslint-fix
```

## Testing Stack

- **[Mocha](https://mochajs.org/)** — test runner
- **[Chai](https://www.chaijs.com/api/bdd/)** (`expect` style) — assertions
- **[Chance](https://chancejs.com/)** — random test data
- **[Sinon](https://sinonjs.org/)** — spies & stubs (Unit 5)

## License

This project is licensed under the [GPL-3.0-or-later](LICENSE).
