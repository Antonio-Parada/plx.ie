---
title: "Getting Started with PLX.IE"
---

# Your Journey to the Cloud Starts Here

Welcome to PLX.IE! This guide will help you set up your account, deploy your first application, and begin leveraging our powerful cloud services.

---

## 1. Account Setup

### **1.1 Create Your Account**

Visit our [sign-up page](https://plx.ie/signup) and follow the prompts to create your PLX.IE account. You'll need a valid email address and a strong password.

### **1.2 Verify Your Email**

After signing up, a verification email will be sent to your registered address. Click the link in the email to activate your account.

### **1.3 Set Up Billing (Optional)**

While many of our services offer a free tier, to unlock full capabilities and avoid service interruptions, we recommend setting up your billing information in the [dashboard settings](https://plx.ie/dashboard/settings/billing).

---

## 2. Deploying Your First Application

### **2.1 Choose Your Service**

PLX.IE offers a wide range of services. For a quick start, we recommend deploying a simple web application using our **Serverless Functions (FaaS)** or **Managed Kubernetes (K8s)**.

### **2.2 Using Serverless Functions (FaaS)**

If you're deploying a simple API endpoint or a backend for a mobile app, Serverless Functions are ideal.

1.  **Install the PLX.IE CLI:**
    ```bash
    npm install -g plx-cli
    ```
2.  **Log in:**
    ```bash
    plx login
    ```
3.  **Initialize a new function:**
    ```bash
    plx init my-first-function --runtime nodejs18.x
    ```
4.  **Deploy:**
    ```bash
    plx deploy
    ```

### **2.3 Using Managed Kubernetes (K8s)**

For more complex, containerized applications, our Managed Kubernetes service provides robust orchestration.

1.  **Create a Kubernetes Cluster:** Navigate to the [Kubernetes section](https://plx.ie/dashboard/kubernetes) in your dashboard and create a new cluster.
2.  **Connect kubectl:** Follow the instructions in the dashboard to configure `kubectl` to connect to your new cluster.
3.  **Deploy your application:**
    ```bash
    kubectl apply -f your-app-deployment.yaml
    ```

---

## 3. Next Steps

*   **Explore the Dashboard:** Familiarize yourself with the [PLX.IE Dashboard](https://plx.ie/dashboard) to manage your services, monitor usage, and view analytics.
*   **Read Our Documentation:** Dive deeper into specific services with our comprehensive [documentation library](https://plx.ie/docs).
*   **Join Our Community:** Connect with other developers and get support on our [community forums](https://plx.ie/community).

If you encounter any issues, please refer to our [Troubleshooting Guide](https://plx.ie/docs/troubleshooting) or contact [Support](https://plx.ie/support).
