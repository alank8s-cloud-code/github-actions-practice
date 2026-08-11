# Mini Project 1 – Python Application CI Pipeline

## 🎯 Project Goal

Build a small Python application and create a GitHub Actions CI pipeline that automatically:

* Runs when code is pushed
* Runs when a Pull Request is created
* Installs Python dependencies
* Runs tests
* Checks code syntax
* Displays information about the GitHub runner
* Fails when the application has a problem
* Becomes green again after fixing the problem

This project extends the Day-40 concepts into something closer to a real DevOps workflow.

---

# 🧠 What You Will Learn

By completing this project, you should understand:

* What is CI?
* What is a GitHub Actions workflow?
* What is a job?
* What is a step?
* What is a runner?
* What does `runs-on` do?
* What does `uses` do?
* What does `run` do?
* How GitHub Actions executes commands
* GitHub Actions environment variables
* How failures stop a job
* How automated testing works

---

# 📁 Project Structure

Create this structure:

```text
python-ci-project/
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── app/
│   ├── __init__.py
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

Create:

```text
app/calculator.py
```

The application should contain:

```python
def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


def multiply(a, b):
    return a * b


def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")

    return a / b
```

---

# Task 2 – Create Tests

Create:

```text
tests/test_calculator.py
```

Add tests for:

* Addition
* Subtraction
* Multiplication
* Division
* Division by zero

Use `pytest`.

Example:

```python
from app.calculator import add


def test_add():
    assert add(10, 5) == 15
```

Create tests for all functions.

---

# Task 3 – Create requirements.txt

Add:

```text
pytest
```

---

# Task 4 – Test Locally

Before using GitHub Actions, test the application locally.

Run:

```bash
python3 --version
```

Create a virtual environment:

```bash
python3 -m venv venv
```

Activate it:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run tests:

```bash
pytest
```

---

# Task 5 – Create GitHub Actions Workflow

Create:

```text
.github/workflows/ci.yml
```

Your workflow should:

1. Trigger on `push`
2. Trigger on `pull_request`
3. Run on `ubuntu-latest`
4. Checkout the repository
5. Install Python
6. Install dependencies
7. Run tests
8. Print runner information

---

# Task 6 – Understand Every Section

Your workflow should contain concepts like:

```yaml
name:
```

What is it?

The name displayed in the GitHub Actions interface.

---

```yaml
on:
```

What is it?

Defines when the workflow should execute.

---

```yaml
jobs:
```

What is it?

Defines the jobs that GitHub Actions should execute.

---

```yaml
runs-on:
```

What is it?

Defines which runner executes the job.

---

```yaml
steps:
```

What is it?

Defines the individual operations executed inside a job.

---

```yaml
uses:
```

What is it?

Uses an existing GitHub Action.

Example:

```yaml
uses: actions/checkout@v4
```

---

```yaml
run:
```

What is it?

Executes a shell command on the runner.

Example:

```yaml
run: pytest
```

---

# Task 7 – Runner Information

Add steps that display:

```text
Operating System
Hostname
Current User
Python Version
Git Version
Working Directory
```

Useful commands include:

```bash
uname -a
hostname
whoami
python --version
git --version
pwd
```

---

# Task 8 – Use GitHub Variables

Print:

```text
Repository
Branch
Commit SHA
Actor
Workflow
```

Investigate GitHub variables such as:

```text
github.ref_name
github.sha
github.actor
github.repository
github.workflow
```

Do not just copy them.

Understand what information each variable provides.

---

# Task 9 – Break the Pipeline

Now intentionally introduce a test failure.

For example:

```python
assert add(10, 5) == 100
```

Commit and push.

Observe:

```text
Workflow
   ↓
Job
   ↓
Test
   ↓
FAIL ❌
```

Then fix the test.

Push again.

Observe:

```text
Workflow
   ↓
Job
   ↓
Test
   ↓
SUCCESS ✅
```

---

# Task 10 – Pull Request Test

Create a new branch:

```bash
git switch -c feature-test
```

Modify the application.

Commit:

```bash
git add .
git commit -m "test CI pipeline"
```

Push:

```bash
git push -u origin feature-test
```

Create a Pull Request.

Verify that GitHub Actions automatically runs.

---

# 🔥 Challenge

Add another job:

```text
lint
```

Your pipeline should become:

```text
             Git Push / PR
                    |
                    v
             GitHub Actions
                    |
          +---------+---------+
          |                   |
          v                   v
       Tests                Lint
          |                   |
          v                   v
        PASS                PASS
```

---

# ❓ Questions You Must Answer

Write answers in your notes:

### 1. What is CI?

### 2. What is a runner?

### 3. Why do we use `actions/checkout`?

### 4. Difference between `uses` and `run`?

### 5. What happens when a test fails?

### 6. What is `${{ github.ref_name }}`?

### 7. Why should tests run automatically?

### 8. What is the difference between Push CI and Pull Request CI?

---

# ✅ Expected Output

You should have:

```text
python-ci-project/
├── .github/workflows/ci.yml
├── app/
├── tests/
├── requirements.txt
└── README.md
```

And GitHub Actions should show:

```text
CI Pipeline
    └── Tests ✅
    └── Lint  ✅
```

---

# 🎓 What You Should Understand After This

You should be able to explain:

> "When I push code to GitHub, GitHub Actions creates a job on a runner, checks out my code, installs dependencies, runs tests, and reports whether the code passed or failed."

If you can explain that without looking at your notes, you have understood the basic Day-40 concepts.
