import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <div className="resume-header">
          <h1 className="resume-name">Rafael Castro</h1>
          <div className="resume-contact">
          <div className="resume-contact-row">
            <span>Corvallis, OR</span>
            <span className="resume-separator">|</span>
            <a href="https://github.com/slacke101" target="_blank" rel="noopener noreferrer" className="resume-link">GitHub: slacke101</a>
            <span className="resume-separator">|</span>
            <a href="https://www.linkedin.com/in/rafael-castro-658752176/" target="_blank" rel="noopener noreferrer" className="resume-link">LinkedIn: Rafael Castro</a>
            <span className="resume-separator">|</span>
            <a href="https://castrorportfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="resume-link">Portfolio</a>
          </div>
          <div className="resume-contact-row">
            <a href="tel:7609607575" className="resume-link">760-960-7575</a>
            <span className="resume-separator">|</span>
            <a href="mailto:rcastr231@gmail.com" className="resume-link">rcastr231@gmail.com</a>
          </div>
          </div>
        </div>

        <div className="resume-section-content">
          <h2 className="resume-section-title">EDUCATION</h2>
          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">Bachelors of Science</span>
            </div>
            <div className="resume-item-subtitle">Oregon State University, Corvallis OR</div>
            <div className="resume-item-description">Biological Sciences and a Minor in Computer Science</div>
          </div>
        </div>

        <div className="resume-section-content">
          <h2 className="resume-section-title">EXPERIENCE</h2>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">AI/ML Engineer Intern</span>
              <span className="resume-item-date">Oct. 2025 - Present</span>
            </div>
            <div className="resume-item-subtitle">BVR ST CO. — NVIDIA Inception Program Member | Remote, Corvallis, Oregon</div>
            <ul className="resume-bullets">
              <li>Engineered GPU-accelerated training and inference pipelines using YOLOv11, PyTorch, and TensorFlow on NVIDIA H100/A100 clusters, pushing production-grade real-time vision models for drone and competitive intelligence systems.</li>
              <li>Built a full MLOps backbone with FastAPI, designing high-throughput REST services for dataset ingestion, experiment orchestration, job queuing, model versioning, and automated deployment at enterprise scale.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">AI Engineer - Division of Research & Innovation</span>
              <span className="resume-item-date">Sep. 2025 - Present</span>
            </div>
            <div className="resume-item-subtitle">Oregon State University, Corvallis, Oregon</div>
            <ul className="resume-bullets">
              <li>Architected and deployed multi-agent distributed AI pipelines on Azure, orchestrating 4 concurrent agents across cloud nodes with Durable Functions and Azure AI Foundry; achieved sub-second processing for 100+ structured/unstructured documents, ensuring high reliability and concurrency at scale.</li>
              <li>Developed full-stack, production-grade platform with React.js frontend, FastAPI backend, and Azure services; integrated document ingestion, AI classification, and novelty scoring with automated monitoring and error handling.</li>
              <li>Engineered pipelines to produce structured JSON outputs for downstream workflows, ensuring reliability and concurrency across multiple cloud services.</li>
              <li>Leveraged APIM, Blob Storage, and Cosmos DB to support high-availability, production-grade distributed workflows, reducing manual review time by 70%.</li>
              <li>Established system-level reliability practices including observability, exception handling, and maintainable architecture to support end-to-end automation in a distributed cloud environment.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">Software Engineer - College of Engineering</span>
              <span className="resume-item-date">Feb. 2024 - Feb. 2025</span>
            </div>
            <div className="resume-item-subtitle">Oregon State University, Corvallis, Oregon</div>
            <ul className="resume-bullets">
              <li>Co-led development of IoT-enabled eDNA water sampler, increasing throughput by 60% and reducing cross-contamination by 45%.</li>
              <li>Developed firmware and sensor pipelines in C++/Python, increasing data precision by 30% and decreasing troubleshooting time by 40%.</li>
              <li>Drove execution of backend scripts for data acquisition and dashboard monitoring, facilitating real-time visualization and analysis.</li>
            </ul>
          </div>
        </div>

        <div className="resume-section-content">
          <h2 className="resume-section-title">PROJECTS</h2>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">AMIE</span>
              <span className="resume-item-date">Sep. 2025 - Present</span>
            </div>
            <div className="resume-item-subtitle">Python, React.js, FastAPI, Microsoft Azure</div>
            <ul className="resume-bullets">
              <li>Constructed a full-stack platform for academic manuscript processing, including PDF ingestion, AI-driven invention classification, and novelty scoring. Processed over 10,000+ PDF pages and reduced manual review time by 70%.</li>
              <li>Coordinated 4 concurrent AI agents on Azure AI Foundry, producing organized JSON outputs for downstream processing, and leveraged APIM, Blob Storage, and Cosmos DB to support scalable, production-ready workflows.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">TokenFlow</span>
              <span className="resume-item-date">Oct. 2025 - Present</span>
            </div>
            <div className="resume-item-subtitle">C#, Python, ASP.NET Core, Microsoft Azure, Microsoft Graph</div>
            <ul className="resume-bullets">
              <li>Designing and developing a cloud-native workflow management system using ASP.NET Core and Azure to manage token-based task lifecycles and business processes.</li>
              <li>Developed service-layer architecture to coordinate token creation, assignment, and lifecycle updates separate from controllers and UI logic.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">SunCal Banking</span>
              <span className="resume-item-date">June 2025 – July 2025</span>
            </div>
            <div className="resume-item-subtitle">C#, .NET, OpenWeatherAPI</div>
            <ul className="resume-bullets">
              <li>Engineered a secure modular banking system in C# and .NET, implementing GUID-based account creation and processing over 500 transactions weekly, with a focus on security and performance.</li>
              <li>Designed a scalable architecture for persistent storage and seamless feature integration, reducing update development time by 40%.</li>
            </ul>
          </div>
        </div>

        <div className="resume-section-content">
          <h2 className="resume-section-title">SKILLS</h2>
          <div className="resume-skills">
            <div className="resume-skill-category">
              <strong>Software Languages:</strong> C#, C++, C, Python, JavaScript, TypeScript, SQL
            </div>
            <div className="resume-skill-category">
              <strong>Frontend:</strong> React, Expo, Vue, HTML/CSS, Tailwind
            </div>
            <div className="resume-skill-category">
              <strong>Tools:</strong> Git, GitHub, Jira, CLI
            </div>
            <div className="resume-skill-category">
              <strong>Backend / Frameworks:</strong> REST API, FastAPI, Node.js, Express, .NET, ASP.NET Core
            </div>
            <div className="resume-skill-category">
              <strong>Cloud & DevOps:</strong> Distributed Systems, Microsoft Azure (Functions App, Durable Functions, Blob Storage, API Management, Azure AI Foundry, OpenAI, Cosmos DB), AWS (Lambda, Amazon S3)
            </div>
            <div className="resume-skill-category">
              <strong>AI/ML:</strong> LLM Pipelines, Retrieval Augmented Generation (RAG), multi-agent systems, LoRA fine-tuning, vector databases
            </div>
            <div className="resume-skill-category">
              <strong>Software Development Practices:</strong> Agile, Scrum, CI/CD, version control
            </div>
          </div>
        </div>

        <div className="resume-section-content">
          <h2 className="resume-section-title">LEADERSHIP</h2>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">Project Leader - Electrical Team</span>
              <span className="resume-item-date">Sep. 2024 - Present</span>
            </div>
            <div className="resume-item-subtitle">OSU DAM Robotics, Corvallis, Oregon</div>
            <ul className="resume-bullets">
              <li>Collaborated with a team of 8+ engineers from multiple disciplines to design and deliver a cost-effective ROV, achieving performance specifications within a $500 budget.</li>
              <li>Led design of a power distribution system for an ROV, stepping down 48V to 12V and 5V, ensuring stable power supply for 6 sensors, 4 motors, and 2 cameras, improving system efficiency by 25%.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">Secretary</span>
              <span className="resume-item-date">Oct. 2023 - Jun. 2024</span>
            </div>
            <div className="resume-item-subtitle">Minority Association for Premedical Students (MAPS), Corvallis, Oregon</div>
            <ul className="resume-bullets">
              <li>Led a cross-disciplinary team of 10+ members, setting clear goals and resource allocation strategies, resulting in a 30% increase in project efficiency.</li>
              <li>Boosted membership engagement by 40% by creating and promoting 5+ targeted events for pre-medical students, enhancing career development opportunities.</li>
              <li>Organized 8 educational workshops for over 200 local youth, introducing health and science concepts through interactive activities.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
