
export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
  certificateLink?: string;
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  aiHint?: string;
  video?: string;
};

export type Publication = {
  title: string;
  journal: string;
  date: string;
  link?: string;
  description: string[];
};

export type Education = {
  degree: string;
  school: string;
  duration: string;
};

export type Certification = {
  name: string;
  authority: string;
  date: string;
  link?: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type PortfolioData = {
  name: string;
  title: string;
  summary: string;
  email: string;
  linkedin: string;
  github: string;
  experience: Experience[];
  projects: Project[];
  publications: Publication[];
  education: Education[];
  certifications: Certification[];
  skills: SkillCategory[];
};

export const portfolioData: PortfolioData = {
  name: "Kaushik Sakre",
  title: "NLP & AI Engineer | Multilingual Essay Scoring | LLM Applications",
  summary:
    "AI/ML Engineer with hands-on experience in multilingual NLP, LLM applications, and transformer fine-tuning using PyTorch. Built impactful AI solutions in the education domain, including an LLM-based multilingual essay scoring system and LearnMate—an interactive AI tutor powered by LangChain. Actively seeking entry-level opportunities to apply my skills in NLP and contribute to real-world AI projects. Currently expanding my toolkit with Java, LangChain, LangGraph and Docker.",
  email: "kaushiksakre9@gmail.com",
  linkedin: "https://www.linkedin.com/in/kaushiksakre/",
  github: "https://github.com/KaushikSakre",
  experience: [
    {
      role: "NLP Intern",
      company: "Cognitio",
      duration: "Nov 2023 – Apr 2024",
      description: [
        "Built transformer-based sentiment analysis models for Hindi and Marathi using RoBERTa and MuRIL.",
        "Achieved 93.31% (Hindi) and 84.27% (Marathi) accuracy using scraped and curated datasets.",
        "Led dataset creation, model tuning, and performance evaluation for regional sentiment classification.",
      ],
      skills: ["Python", "Transformers", "MuRIL", "RoBERTa", "Data Scraping", "NLP"],
      certificateLink: "https://drive.google.com/file/d/1YF303FJXG2Ncj_nkYszfWdQ5uez2gsDR/view",
    },
    {
      role: "Data Science & ML Mentor",
      company: "Coding Ninjas",
      duration: "Jan 2024 – Apr 2024",
      description: [
        "Mentored 300+ students in Data Science and Machine Learning via 510+ doubt sessions.",
        "Increased course completion rates by 25% and maintained a 4.83/5 student satisfaction score.",
        "Provided project guidance, debug support, and concept clarity through personalized mentorship.",
      ],
      skills: ["Machine Learning", "Data Science", "Python", "Mentoring", "Communication"],
      certificateLink: "https://drive.google.com/file/d/19V4peJ99jFhdtKWnp4QoSv85mz4XDwiV/view",
    },
  ],
  projects: [
    {
      name: "LearnMate",
      description: `Image Understanding: Upload science/math diagrams for automatic captioning using BLIP-2.
Curriculum-Aware Retrieval: Context is fetched from NCERT-like content using embeddings and ChromaDB.
LLM-Powered QA: Groq-hosted models (Mixtral, LLaMA-3) explain diagrams or solve equations clearly.`,
      tech: ["FastAPI", "React", "LangChain", "Docker", "BLIP-2", "ChromaDB", "Mixtral", "LLaMA-3", "Groq API", "SQLite"],
      link: "https://github.com/KaushikSakre/Learn-Mate",
      image: "https://raw.githubusercontent.com/KaushikSakre/Learn-Mate/main/learnmate.png",
      aiHint: "education technology",
    },
    {
      name: "Multilingual Automated Essay Scoring with Transformer Models",
      description:
        `Designed and implemented a multilingual essay grading pipeline that leverages state-of-the-art transformer models—including XLM-RoBERTa, MuRIL, and IndicBERT—to automatically score essays across English, Hindi, and Marathi.
Fine-tuned on a dataset of 15,000+ translated essays, the system achieved robust Quadratic Weighted Kappa (QWK) scores up to 0.78, indicating strong agreement with human raters.
Built a scalable multilingual scoring system supporting low-resource languages.`,
      tech: ["Python", "PyTorch", "Hugging Face Transformers", "XLM-RoBERTa", "MuRIL", "IndicBERT", "Google Translate API", "QWK"],
      link: "https://github.com/KaushikSakre/Multilingual-Automated-Essay-Scoring-with-Transformer-Models",
      image: "https://raw.githubusercontent.com/KaushikSakre/Multilingual-Automated-Essay-Scoring-with-Transformer-Models/main/MAES.jpg",
      aiHint: "essay scoring",
      video: "https://drive.google.com/file/d/16NSgjIgnl90vl-L3KukB8pMA3Ny-_V4U/view?usp=sharing",
    },
    {
        name: "LLM-Based Automated Scoring and Feedback for Essays in the Marathi language",
        description:
          `Developed a cutting-edge automated essay scoring system tailored for Marathi essays, leveraging zero-shot and few-shot prompting techniques with LLMs including LLaMA-3 and Gemini, integrated via Groq API.
The system provides detailed feedback aligned with rubric criteria and actively benchmarks AI-generated feedback against human evaluations.`,
        tech: ["LLaMA-3", "Gemini", "Groq API", "LangChain", "Flask"],
        link: "https://github.com/KaushikSakre/-LLM-Based-Automated-Scoring-and-Feedback-for-Essays-in-the-Marathi-language",
        video: "https://drive.google.com/file/d/1ETQaaQ4adyD-3EyOvkOytWFVeKsOFxH6/view?usp=drive_link",
    },
    {
      name: "Multilingual AES with Rubric Customization",
      description: `A full-stack, multilingual essay evaluation platform enabling administrators to define rubrics and students to receive rubric-aligned feedback from LLMs.
The system ensures transparency and auditability via structured feedback storage.`,
      tech: ["HTML", "CSS", "Flask", "Groq API", "LLaMA-3", "MySQL"],
      link: "https://github.com/KaushikSakre/Multilingual-AES-with-Rubric-Customization",
      image: "https://raw.githubusercontent.com/KaushikSakre/Multilingual-AES-with-Rubric-Customization/main/MAESRC.png",
      aiHint: "rubric customization",
      video: "https://drive.google.com/file/d/1jb-yNxClrParsG7yiBXeiwuKYXchQZhF/view?usp=drive_link",
    },
  ],
  publications: [
    {
      title: "LLM-Based Automated Scoring and Feedback for Marathi Essays",
      journal: "Taylor & Francis (ICRIET 2025, Scopus-Indexed)",
      date: "2025",
      description: [
        "Developed an LLM-based system to automatically score and provide detailed feedback for essays in Marathi.",
        "Link will be provided once the paper is published."
      ],
    },
    {
      title: "Multilingual AES using Transformer Models",
      journal: "Springer (ICT4SD 2025)",
      date: "2025",
      description: [
        "Developed a multilingual AES framework using models like XLM-RoBERTa and MuRIL for English, Hindi, and Marathi.",
        "Link will be provided once the paper is published."
      ],
    },
    {
      title: "Multilingual Automated Essay Scoring with Rubric Customization: A Human-in-the-Loop LLM Framework",
      journal: "IEEE (ICCCNT 2025) – IIT Indore",
      date: "2025",
      description: [
        "Created a human-in-the-loop, rubric-driven AES framework for Hindi and Marathi.",
        "Link will be provided once the paper is published."
      ],
    },
    {
      title: "Marathi Word Sense Disambiguation Dataset [Copyright Registered]",
      journal: "Indian Copyright Office",
      date: "2024",
      link: "https://drive.google.com/file/d/1PVIhs9dIfUOGfi_yuIWM9aklD34-ag1w/view",
      description: ["Created and registered a copyright for a new dataset to enable research and development in Marathi Word Sense Disambiguation."],
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Information Technology (CGPA: 8.91/10.0)",
      school: "Vidalankar Institute of Technology, Mumbai",
      duration: "2021 – 2025",
    },
    {
      degree: "Class XII (Science) (Percentage: 88.67%)",
      school: "St. Peter Junior College, Vasai",
      duration: "2021",
    },
  ],
  certifications: [
    {
      name: "Data Science and Machine Learning Certificate",
      authority: "Coding Ninjas",
      date: "Issued Aug 2023",
      link: "https://drive.google.com/file/d/1dh6OejFr7F6nvAMryuvuPa1KtKaqqMqe/view",
    }
  ],
  skills: [
    {
      title: "AI/ML & Deep Learning",
      skills: [
        "PyTorch",
        "Hugging Face Transformers",
        "LangChain",
        "LangGraph",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "BLIP-2",
        "Model Fine-tuning",
        "Transfer Learning"
      ]
    },
    {
      title: "Natural Language Processing",
      skills: [
        "Multilingual NLP",
        "Transformer Models",
        "XLM-RoBERTa",
        "MuRIL",
        "IndicBERT",
        "RoBERTa",
        "Sentiment Analysis",
        "Essay Scoring",
        "Text Classification",
        "Word Sense Disambiguation"
      ]
    },
    {
      title: "Large Language Models",
      skills: [
        "LLaMA-3",
        "Mixtral",
        "Gemini",
        "Prompt Engineering",
        "Few-shot Learning",
        "Zero-shot Learning",
        "Groq API",
        "LLM Applications"
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "HTML/CSS",
        "SQL"
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "FastAPI",
        "Flask",
        "TensorFlow",
        "scikit-learn",
        "NumPy",
        "Pandas"
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        "ChromaDB",
        "SQLite",
        "MySQL",
        "Docker",
        "Git",
        "Jupyter",
        "Google Colab",
        "Embeddings"
      ]
    }
  ]
};

export function getPortfolioAsText(data: PortfolioData): string {
    let text = `Name: ${data.name}\nTitle: ${data.title}\n\n`;
    text += `Summary:\n${data.summary}\n\n`;

    text += "Experience:\n";
    data.experience.forEach(exp => {
        text += `- Role: ${exp.role}\n  Company: ${exp.company}\n  Duration: ${exp.duration}\n  Description:\n`;
        exp.description.forEach(d => text += `    - ${d}\n`);
        text += `  Skills: ${exp.skills.join(', ')}\n\n`;
    });

    text += "Projects:\n";
    data.projects.forEach(proj => {
        text += `- Name: ${proj.name}\n  Description: ${proj.description.replace(/(\r\n|\n|\r)/gm, " ")}\n  Technologies: ${proj.tech.join(', ')}\n\n`;
    });

    text += "Publications:\n";
    data.publications.forEach(pub => {
        text += `- Title: ${pub.title}\n  Journal: ${pub.journal}\n  Date: ${pub.date}\n  Description:\n`;
        pub.description.forEach(d => text += `    - ${d}\n`);
        text += '\n';
    });

    text += "Education:\n";
    data.education.forEach(edu => {
        text += `- Degree: ${edu.degree}\n  School: ${edu.school}\n  Duration: ${edu.duration}\n\n`;
    });

    text += "Certifications:\n";
    data.certifications.forEach(cert => {
        text += `- Name: ${cert.name}\n  Authority: ${cert.authority}\n  Date: ${cert.date}\n\n`;
    });

    text += "Contact:\n";
    text += `Email: ${data.email}\n`;
    text += `LinkedIn: ${data.linkedin}\n`;
    text += `GitHub: ${data.github}\n\n`;


    return text;
}
