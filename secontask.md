# Mini Project 2 – Multi-OS CI Matrix

## 🎯 Project Goal

Build a CI pipeline that tests the same Python application on:

```text
Ubuntu
Windows
macOS
```

You will learn how real projects test software against multiple environments.

---

# 🧠 What You Will Learn

You will practice:

* Multiple jobs
* Multiple operating systems
* Matrix strategy
* Environment variables
* Runner information
* Parallel execution
* `fail-fast`
* Matrix combinations
* Debugging OS differences

---

# 📁 Project Structure

```text
multi-os-ci/
├── .github/
│   └── workflows/
│       └── matrix.yml
│
├── app/
│   └── calculator.py
│
├── tests/
│   └── test_calculator.py
│
├── requirements.txt
└── README.md
```

---

# Task 1 – Create the Application

Reuse the calculator application from Mini Project 1.

Your application must have tests.

Verify locally:

```bash
pytest
```

---

# Task 2 – Create Matrix Workflow

Create:

```text
.github/workflows/matrix.yml
```

The workflow should test:

```text
Python 3.10
Python 3.11
Python 3.12
```

on:

```text
ubuntu-latest
windows-latest
macos-latest
```

This creates multiple combinations.

Conceptually:

```text
              Matrix
                 |
       +---------+---------+
       |         |         |
     Ubuntu   Windows    macOS
       |         |         |
       +---------+---------+
                 |
             Python
       3.10 / 3.11 / 3.12
```

---

# Task 3 – Understand Matrix

Suppose you have:

```yaml
os:
  - ubuntu-latest
  - windows-latest
  - macos-latest

python:
  - "3.10"
  - "3.11"
  - "3.12"
```

How many combinations are created?

Calculate:

```text
3 operating systems × 3 Python versions
```

Expected:

```text
9 jobs
```

---

# Task 4 – Print Environment Information

Each matrix job must print:

```text
Operating System
Python Version
Hostname
Current User
Working Directory
```

Also print:

```text
github.ref_name
github.sha
github.actor
```

---

# Task 5 – Run Tests

Every matrix combination should:

1. Checkout code
2. Setup Python
3. Install dependencies
4. Run tests

The result should look conceptually like:

```text
Ubuntu / Python 3.10    ✅
Ubuntu / Python 3.11    ✅
Ubuntu / Python 3.12    ✅

Windows / Python 3.10  ✅
Windows / Python 3.11  ✅
Windows / Python 3.12  ✅

macOS / Python 3.10    ✅
macOS / Python 3.11    ✅
macOS / Python 3.12    ✅
```

---

# Task 6 – fail-fast

Investigate:

```yaml
strategy:
  fail-fast: false
```

Understand what happens when one matrix job fails.

Then change it to:

```yaml
fail-fast: true
```

Break one test.

Observe the difference.

---

# Task 7 – Matrix Include

Add extra information to your matrix.

For example:

```text
Ubuntu → Linux
Windows → Windows
macOS → Mac
```

Use `include` to add metadata.

Your job should print something like:

```text
OS: ubuntu-latest
Platform: Linux
```

---

# Task 8 – Matrix Exclude

Exclude one combination.

For example:

```text
macOS + Python 3.10
```

Verify that the excluded combination does not run.

---

# Task 9 – Branch-Based Testing

Configure the workflow so that:

```text
Pull Request → Full matrix
Push to main → Full matrix
Feature branch → Basic tests
```

Think about why companies may use different CI strategies for different events.

---

# 🔥 Challenge

Create two jobs:

```text
quick-test
full-matrix
```

Workflow:

```text
                 Push
                  |
                  v
             quick-test
                  |
                  v
              full-matrix
          /       |       \
       Ubuntu   Windows   macOS
```

---

# ❓ Questions You Must Answer

### 1. What problem does a matrix solve?

### 2. Why test software on multiple operating systems?

### 3. What happens when you have 3 OS × 3 Python versions?

### 4. What is `fail-fast`?

### 5. What does `exclude` do?

### 6. What does `include` do?

### 7. Why might a company not test every combination?

### 8. Why does the same code sometimes behave differently on different OSs?

---

# 🎯 Expected Output

GitHub Actions should show multiple jobs running.

You should be able to identify:

```text
OS
Python Version
Runner
Job
Status
```

---

# 🎓 What You Should Understand

After this project you should be able to explain:

> "A matrix allows GitHub Actions to run the same workflow against multiple combinations of operating systems and software versions."

You should also understand that:

```text
runs-on
```

selects the environment, while:

```text
matrix
```

creates multiple combinations of environments.

---

# 🚀 Real-World Connection

This is similar to how companies verify:

```textg
Application
    |
    +── Linux
    +── Windows
    +── macOS
    |
    +── Python versions
    +── Node versions
    +── Java versions
```

before releasing software.
