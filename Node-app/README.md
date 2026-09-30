# 🚀 CI/CD Node.js Web Application (Docker + GitHub Actions + EC2)

---

## 📌 Project Overview

This project demonstrates a complete **CI/CD pipeline** using:

* GitHub Actions
* Docker
* AWS EC2 (Production Server)

👉 The application is automatically built, containerized, pushed to Docker Hub, and deployed on an EC2 instance.

---

## 🎯 Objective

* Automate build & deployment
* Use Docker for containerization
* Use GitHub Actions for CI/CD
* Deploy to a live EC2 production server

---

## 🛠️ Tools Used

* Node.js
* Express.js
* Docker
* GitHub Actions
* AWS EC2
* Docker Hub

---

## 📁 Project Structure

```
nodejs-demo-app/
│
├── .github/
│   └── workflows/
│       ├── build-and-push.yml      # Build Docker image & push to Docker Hub
│       ├── cicd-pipeline.yml       # Main CI/CD workflow (orchestrates steps)
│       ├── code-check.yml          # Linting & code quality checks (ESLint)
│       └── deploy-to-server.yml    # Deploy application to EC2 server
│
├── public/
│   └── index.html                 # Frontend UI
│
├── app.js                         # Main server file
├── package.json                   # Dependencies & scripts
├── Dockerfile                     # Docker image instructions
├── docker-compose.yml             # Multi-container setup
├── .dockerignore                  # Ignore files for Docker
├── .gitignore                     # Ignore files for Git
├── eslint.config.js               # Linting configuration
├── README.md                      # Documentation
└── assets/                # Screenshots (project: output)
```

---

# ⚙️ Local Development Setup

### 1. Clone Repository

```
git clone <your-repo-url>
cd nodejs-demo-app
```

### 2. Install Dependencies

```
npm install
```

### 3. Run Application

```
npm start
```

### 4. Open in Browser

```
http://localhost:3000
```

---

# 🐳 Docker Setup

### Build Image

```
docker build -t ci-cd-node-app .
```

### Run Container

```
docker run -d -p 3000:3000 ci-cd-node-app
```

---

## 🔐 GitHub Secrets (Beginner Guide)

Go to:

👉 Repository → **Settings** → **Secrets and variables** → **Actions**

Add the following secrets:

---

### 🔑 Required Secrets

* **`DOCKERHUB_USERNAME`**
  👉 Your Docker Hub username

* **`DOCKERHUB_TOKEN`**
  👉 Your Docker Hub access token (not password)

---

### 🚀 EC2 Deployment Secrets

* **`EC2_HOST`**
  👉 Public IP address of your EC2 instance
  Example: `3.110.xxx.xxx`

* **`EC2_USER`**
  👉 Username used to connect to EC2

  * `ubuntu` → for Ubuntu AMI
  * `ec2-user` → for Amazon Linux
  * `This is the user you use when connecting to EC2 via SSH.`

* **`EC2_SSH_KEY`**
  👉 Private SSH key content (`.pem` file)

  Steps:

  1. Open your `.pem` file
  2. Copy all content
  3. Paste it into this secret

---

### ⚠️ Important Notes

* Never share these secrets publicly
* Do NOT commit `.pem` file to GitHub
* Always use GitHub Secrets for security

---

---

# 🔄 CI/CD Pipeline (GitHub Actions)

## ❌ Initial Pipeline Failure

This shows the first failed pipeline attempt during setup:

![Pipeline Fail](asset/output/pipeline-fail.png)

---

## ✅ Successful Pipeline Execution

After fixing errors, the pipeline runs successfully:

![Pipeline Success](asset/output/pipeline-success.png)

---

## ⚙️ Pipeline Steps

1. Checkout code
2. Install dependencies
3. Run ESLint
4. Build Docker image
5. Push to Docker Hub
6. Deploy to EC2

---

# 🚀 EC2 Production Deployment

## Setup EC2

* Launch Ubuntu instance
* Open port **3000** in security group

---

## Install Docker (if not handled in workflow)

```
sudo apt update
sudo apt install docker.io -y
sudo usermod -aG docker ubuntu
```

---

## Auto Deployment

Every push to `main`:

✅ GitHub Actions runs
✅ Docker image updated
✅ Deployed to EC2 automatically

---

## 🌍 Live Application

Access in browser:

![App](asset/output/app-browser.png)

```
http://<EC2-PUBLIC-IP>:3000
```

---

# 📌 Notes

* Stateless application
* Fully automated CI/CD
* Runs on port **3000**
* Production deployed on EC2

---

# 💡 Future Improvements

* Use Kubernetes (for scaling and availability)

---

# 🙌 Conclusion

This project helped me understand how a real DevOps workflow works.

When the pipeline failed, I learned how to debug the issue, find the problem, and fix it step by step. This improved my troubleshooting skills and confidence.

Overall, this project shows the complete process:
👉 Code → Build → Docker → Push → Deploy → Run on EC2

It was a great learning experience and gave me practical knowledge of CI/CD and deployment.

---
