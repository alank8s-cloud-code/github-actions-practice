# GitHub Actions Practice

This repository contains my hands-on practice with GitHub Actions, reusable workflows, CI/CD pipelines, Docker automation, scheduled health checks, workflow outputs, secrets, variables, and deployment environments.

![PR Pipeline](https://github.com/alank8s-cloud-code/github-actions-practice/actions/workflows/pr-pipeline.yml/badge.svg)

![Main Pipeline](https://github.com/alank8s-cloud-code/github-actions-practice/actions/workflows/main-pipeline.yml/badge.svg)

![Scheduled Health Check](https://github.com/alank8s-cloud-code/github-actions-practice/actions/workflows/health-check.yml/badge.svg)

---

## 📌 Project Objective

The goal of this project is to understand how to build a practical CI/CD system using GitHub Actions.

The project demonstrates:

- Pull Request CI
- Reusable workflows
- Python build and testing
- Docker image build and push
- Docker image tagging
- GitHub Actions outputs
- Repository variables and secrets
- Production deployment environments
- Scheduled health checks
- GitHub Actions job dependencies
- GitHub Actions step summaries

---

# 🏗️ Pipeline Architecture

```mermaid
flowchart TD

    A[Pull Request Opened] --> B[PR Pipeline]
    B --> C[Build & Test]
    C --> D[PR Checks Passed]

    D --> E[Merge PR]
    E --> F[Push to main]

    F --> G[Main Pipeline]
    G --> H[Build & Test]
    H --> I[Docker Build & Push]
    I --> J[Deploy to Production]

    K[Every 12 Hours] --> L[Health Check]
    L --> M[Pull Latest Docker Image]
    M --> N[Run Container]
    N --> O[Check /health]
    O --> P[PASS / FAIL]
