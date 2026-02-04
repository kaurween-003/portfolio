import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      icon: '📋',
      title: 'Security Program & Policy Pack for a SaaS Startup',
      tags: ['GRC', 'Risk Management', 'Policy Design'],
      status: 'Planned (Q1 2026)',
      summary: 'Designing a lightweight security program for a fictional 50-person SaaS company, focused on building practical policies, controls, and a security roadmap that balances risk reduction with real-world startup constraints.',
      whatImDoing: [
        'Drafting core security policies (information security, access control, incident response, vendor management) aligned with NIST CSF.',
        'Creating a control matrix that maps business risks to specific security controls and framework categories.',
        'Building a risk register with likelihood/impact ratings and clear treatment plans.',
        'Outlining a 12-month security roadmap that prioritizes quick wins like MFA, centralized logging, and basic vendor due diligence.'
      ],
      tools: ['Google Docs / Word', 'Excel / Sheets', 'Draw.io / Lucidchart'],
      skills: ['GRC', 'Policy Writing', 'Risk Assessment', 'Control Design', 'NIST CSF']
    },
    {
      id: 2,
      icon: '🤝',
      title: 'Third-Party Vendor Risk Assessment & Scorecard',
      tags: ['GRC', 'Third-Party Risk', 'Compliance'],
      status: 'Planned (Q1–Q2 2026)',
      summary: 'Building a reusable vendor risk assessment framework to evaluate cloud SaaS providers, using a structured questionnaire, scoring model, and written recommendations that mirror real GRC workflows.',
      whatImDoing: [
        'Designing a vendor security questionnaire covering data protection, encryption, access control, incident response, and compliance.',
        'Creating a scoring model to rate vendors across multiple domains and produce an overall risk level.',
        'Reviewing a sample vendor using publicly available security documentation and privacy materials.',
        'Writing a concise vendor risk assessment report with key findings, open issues, and recommended contractual requirements.'
      ],
      tools: ['Excel / Sheets', 'Word / Google Docs'],
      skills: ['Third-Party Risk Management', 'Questionnaire Design', 'Risk Scoring', 'Report Writing']
    },
    {
      id: 3,
      icon: '📡',
      title: 'SIEM Home Lab: Detecting Brute-Force & Lateral Movement',
      tags: ['SOC', 'SIEM', 'Home Lab', 'Incident Response'],
      status: 'Planned (Q2 2026)',
      summary: 'Building a small multi-host home lab with a SIEM to simulate brute-force logins and simple lateral movement, then writing detection rules and an incident report like a junior SOC analyst.',
      whatImDoing: [
        'Setting up Windows and Linux virtual machines and forwarding logs into a SIEM (e.g., Splunk / Wazuh / Elastic).',
        'Simulating failed and successful login attempts and basic lateral movement within the lab environment.',
        'Writing SIEM searches and custom detection rules to identify suspicious activity.',
        'Producing an end-to-end investigation report with a timeline, root cause, and remediation recommendations mapped to MITRE ATT&CK.'
      ],
      tools: ['VirtualBox/VMware', 'Splunk / Wazuh / Elastic', 'Windows Event Logs', 'Linux Auth Logs'],
      skills: ['Log Analysis', 'Detection Engineering', 'MITRE ATT&CK', 'Incident Documentation', 'Blue-Team Workflows']
    },
    {
      id: 4,
      icon: '🔍',
      title: 'Threat Hunting with Sysmon & Windows Event Logs',
      tags: ['SOC', 'Threat Hunting', 'Windows', 'Home Lab'],
      status: 'Planned (Q2–Q3 2026)',
      summary: 'Creating a threat hunting playbook for a Windows endpoint by collecting detailed telemetry with Sysmon, generating realistic suspicious activity, and developing repeatable hunting queries.',
      whatImDoing: [
        'Deploying Sysmon on a Windows VM and tuning its configuration for high-value event collection.',
        'Simulating suspicious but safe behaviors (unusual PowerShell usage, odd parent-child processes, scheduled tasks) inside the lab.',
        'Designing hunting hypotheses and translating them into queries over Sysmon and Windows event logs.',
        'Documenting a threat hunting playbook that outlines hypotheses, data sources, queries, and escalation criteria.'
      ],
      tools: ['Windows 10/11 VM', 'Sysmon', 'Event Viewer / SIEM', 'PowerShell'],
      skills: ['Threat Hunting', 'Telemetry Tuning', 'Windows Internals', 'MITRE ATT&CK Mapping', 'Investigative Thinking']
    },
    {
      id: 5,
      icon: '🤖',
      title: 'AI-Assisted Alert Triage & Risk Summarization',
      tags: ['AI', 'SOC', 'GRC', 'Automation'],
      status: 'Planned (Q3 2026)',
      summary: 'Prototyping a Python-based assistant that uses a large language model to help triage security alerts and refine risk register entries, focusing on human-in-the-loop workflows rather than replacing analysts.',
      whatImDoing: [
        'Creating a small dataset of sample security alerts and risk entries in JSON/CSV format.',
        'Building a Python script/notebook to parse alerts, extract key entities, and prompt an LLM to summarize priority, potential impact, and suggested first response steps.',
        'Experimenting with AI-generated risk descriptions and control suggestions while keeping a human reviewer in the loop.',
        'Documenting limitations (hallucinations, privacy, data sensitivity) and proposing safe usage guidelines for AI in SOC/GRC environments.'
      ],
      tools: ['Python', 'Jupyter Notebook', 'Pandas', 'LLM API (OpenAI)'],
      skills: ['Security Automation', 'AI Prompting', 'JSON/Log Parsing', 'SOC Workflows', 'GRC Documentation']
    }
  ];

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="projects">
      <div className="container">
        <h1 
          ref={titleRef}
          className={`page-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Projects & Labs
        </h1>
        
        <p className="page-subtitle">
          Hands-on security projects spanning GRC, SOC operations, and AI-assisted workflows
        </p>
        
        <div className="projects-grid" ref={projectsRef}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card animated-card slide-up ${projectsVisible ? 'visible' : ''} stagger-${(index % 6) + 1} ${expandedProject === project.id ? 'expanded' : ''}`}
            >
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <div className="project-status">{project.status}</div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <p className="project-summary">{project.summary}</p>
                
                {expandedProject === project.id && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>What I'm Doing</h4>
                      <ul>
                        {project.whatImDoing.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4>Tools</h4>
                      <div className="detail-tags">
                        {project.tools.map((tool, toolIndex) => (
                          <span key={toolIndex} className="tool-tag">{tool}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="detail-section">
                      <h4>Skills</h4>
                      <div className="detail-tags">
                        {project.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <button 
                  className="expand-btn"
                  onClick={() => toggleExpand(project.id)}
                >
                  {expandedProject === project.id ? 'Show Less ▲' : 'Learn More ▼'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
