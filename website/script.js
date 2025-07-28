document.addEventListener('DOMContentLoaded', () => {
    const serviceContainer = document.getElementById('service-container');

    const services = [
        {
            "category": "Core Infrastructure & Hosting",
            "services": [
                "Global Web Hosting: High-performance, scalable hosting solutions with data centers across the globe.",
                "Managed Kubernetes (K8s): Fully managed Kubernetes clusters for container orchestration.",
                "Serverless Functions (FaaS): Run backend code without provisioning or managing servers.",
                "Virtual Private Servers (VPS): Dedicated virtual servers with root access for full control.",
                "Dedicated Bare Metal Servers: Physical servers for high-performance and specialized workloads.",
                "Object Storage: Scalable, secure, and durable object storage for unstructured data (e.g., images, videos, backups).",
                "Block Storage: High-performance block storage volumes for databases and applications.",
                "Load Balancing as a Service: Automatically distribute incoming application traffic across multiple targets.",
                "Global DNS Management: Reliable and low-latency domain name system services."
            ]
        },
        {
            "category": "Web Development & APIs",
            "services": [
                "Headless CMS Platform: A fully managed, API-first content management system.",
                "API Gateway: Create, publish, maintain, monitor, and secure APIs at any scale.",
                "GraphQL as a Service: Managed GraphQL layer to simplify data fetching for your applications.",
                "Real-time Application Platform: Build real-time features like live chat, notifications, and data sync.",
                "Web Application Firewall (WAF): Protect your web applications from common web exploits.",
                "Static Site Generation (SSG) & Hosting: Deploy and host pre-built static websites for maximum speed and security.",
                "Custom Web Application Development: End-to-end development of bespoke web applications.",
                "Progressive Web App (PWA) Development: Build installable, offline-capable web apps.",
                "Managed Databases (SQL & NoSQL): Fully managed relational and NoSQL databases (e.g., PostgreSQL, MySQL, MongoDB, Redis)."
            ]
        },
        {
            "category": "Data & Analytics",
            "services": [
                "Data Warehousing: A fully managed, petabyte-scale data warehouse for analytics.",
                "Big Data Processing: Managed clusters for big data processing (e.g., Spark, Hadoop).",
                "Data Stream & Ingestion: Real-time data ingestion and processing from various sources.",
                "Business Intelligence (BI) & Visualization: Tools to create interactive dashboards and reports.",
                "Data Lake Storage: Centralized repository to store all your structured and unstructured data at any scale.",
                "ETL as a Service: Managed Extract, Transform, Load (ETL) pipelines to move and transform data.",
                "Search as a Service: Managed Elasticsearch or similar for powerful search capabilities in your apps."
            ]
        },
        {
            "category": "AI & Machine Learning",
            "services": [
                "AI Model Training Platform: Train, tune, and deploy custom machine learning models.",
                "Natural Language Processing (NLP) API: Analyze text for sentiment, entities, syntax, and more.",
                "Computer Vision API: Analyze images for object detection, facial recognition, and OCR.",
                "Translation API: Programmatically translate text between languages.",
                "Recommendation Engine API: Add personalized recommendations to your applications.",
                "Chatbot & Conversational AI Platform: Build and deploy intelligent chatbots and voice assistants."
            ]
        },
        {
            "category": "Security & Identity",
            "services": [
                "Identity & Access Management (IAM): Manage user identities and control access to your resources.",
                "Secrets Management: Securely store and manage API keys, passwords, and other secrets.",
                "DDoS Protection: Safeguard your applications from Distributed Denial of Service attacks.",
                "Security Auditing & Compliance: Automated security assessments and compliance reporting (e.g., GDPR, HIPAA).",
                "Managed SSL/TLS Certificates: Automated provisioning and renewal of SSL/TLS certificates.",
                "Vulnerability Scanning: Proactively scan your applications and infrastructure for security vulnerabilities."
            ]
        },
        {
            "category": "DevOps & Tooling",
            "services": [
                "CI/CD Pipelines: Automated build, test, and deployment pipelines.",
                "Private Git Repositories: Secure, private Git repository hosting.",
                "Infrastructure as Code (IaC) Management: Use tools like Terraform or CloudFormation to manage infrastructure.",
                "Application Performance Monitoring (APM): Monitor and diagnose performance issues in your applications.",
                "Log Management & Analysis: Centralized logging, analysis, and alerting.",
                "Container Registry: Store, manage, and secure your container images.",
                "A/B Testing Framework: Platform for running controlled experiments to optimize user experience."
            ]
        },
        {
            "category": "Content & Delivery",
            "services": [
                "Content Delivery Network (CDN): Global CDN to accelerate delivery of your website and application content.",
                "Video Streaming & Transcoding: Services for on-demand and live video streaming.",
                "Digital Asset Management (DAM): Centralized system to store, manage, and deliver digital assets."
            ]
        },
        {
            "category": "E-commerce & Business Applications",
            "services": [
                "Managed E-commerce Platform: A scalable and customizable platform for online stores.",
                "Payment Gateway Integration: Seamlessly integrate with global payment providers.",
                "Subscription & Billing Management: A recurring billing and subscription management platform."
            ]
        }
    ];

    services.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'service-card';

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;
        categoryCard.appendChild(categoryTitle);

        const serviceList = document.createElement('ul');
        category.services.forEach(serviceName => {
            const listItem = document.createElement('li');
            listItem.textContent = serviceName;
            serviceList.appendChild(listItem);
        });

        categoryCard.appendChild(serviceList);
        serviceContainer.appendChild(categoryCard);
    });
});