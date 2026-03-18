import mock01 from './assets/images/mock01.png';
import mock02 from './assets/images/mock02.png';
import mock03 from './assets/images/mock03.png';
import mock04 from './assets/images/mock04.png';
import mock05 from './assets/images/mock05.png';
import mock06 from './assets/images/mock06.png';
import mock07 from './assets/images/mock07.png';
import mock08 from './assets/images/mock08.png';
import mock09 from './assets/images/mock09.png';
import mock10 from './assets/images/mock10.png';

export const profile = {
// AI_EDITABLE_START
    name: "Yuji Sato",
    title: "Full Stack Engineer",
    avatar: "https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg",
    footerText: "A portfolio designed & built by Yuji Sato with 💜",
    contactHeading: "Contact Me",
    contactMessage: "Got a project waiting to be realized? Let's collaborate and make it happen!"
// AI_EDITABLE_END
};

export const skills = {
    // AI_EDITABLE_START
    category1: {
        title: "Full Stack Web Development",
        description: "I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.",
        techStack: [
            "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "Flask", "Python", "SQL", "PostgreSQL", "Postman"
        ]
    },
    category2: {
        title: "DevOps & Automation",
        description: "Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.",
        techStack: [
            "Git", "GitHub Actions", "Docker", "AWS", "Azure", "Linux", "Snowflake", "Pandas", "Selenium"
        ]
    },
    category3: {
        title: "GenAI & LLM",
        description: "Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.",
        techStack: [
            "OpenAI", "Groq", "LangChain", "Qdrant", "Hugging Face", "LlamaIndex", "Streamlit"
        ]
    }
    // AI_EDITABLE_END
};

export const projects = [
    // AI_EDITABLE_START
    {
        title: "Filmate AI",
        description: "Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.",
        url: "https://www.filmate.club/",
        image: mock10
    },
    {
        title: "High Speed Chase",
        description: "Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.",
        url: "https://yujisatojr.itch.io/highspeedchase",
        image: mock09
    },
    {
        title: "Astro Raiders",
        description: "Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.",
        url: "https://yujisatojr.itch.io/spacecraft",
        image: mock08
    },
    {
        title: "Datum: Integrated Learning Platform",
        description: "This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.",
        url: "https://www.datumlearn.com/",
        image: mock07
    },
    {
        title: "WeManage: Real Estate Asset Management",
        description: "This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.",
        url: "http://www.wemanage.jp/",
        image: mock06
    },
    {
        title: "COVID-19 Case Management",
        description: "Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.",
        url: "https://www.byuh.edu/covid-19-case-management",
        image: mock05
    },
    {
        title: "Multiple Regression Property Analysis",
        description: "Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.",
        url: "https://github.com/yujisatojr/multi-reg-analysis",
        image: mock04
    },
    {
        title: "Programs of Study",
        description: "Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.",
        url: "https://holokai.byuh.edu/programs-of-study",
        image: mock03
    },
    {
        title: "Transfer Evaluation Matrix",
        description: "Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.",
        url: "https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix",
        image: mock02
    },
    {
        title: "Submeowrine",
        description: "Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.",
        url: "https://github.com/yujisatojr/submeowrine",
        image: mock01
    }
    // AI_EDITABLE_END
];

export const history = [
    // AI_EDITABLE_START
    {
        title: "Technology Consultant",
        subtitle: "Dallas, TX",
        date: "2022 - present",
        description: "Full-stack Web Development, GenAI/LLM, Project Management, Business Development"
    },
    {
        title: "Full Stack Engineer",
        subtitle: "Laie, HI",
        date: "2020 - 2022",
        description: "Frontend Development, Backend Development, User Experience, Team Leading"
    },
    {
        title: "Staff Engineer Intern",
        subtitle: "Laie, HI",
        date: "2021 - 2021",
        description: "Full-stack Development, API Development, User Experience"
    },
    {
        title: "Data Analyst Intern",
        subtitle: "Tokyo, Japan",
        date: "2020 - 2020",
        description: "Automation, Data Governance, Statistical Analysis"
    }
    // AI_EDITABLE_END
];

export const social = {
    // AI_EDITABLE_START
    github: "https://github.com/yujisatojr",
    linkedin: "https://www.linkedin.com/in/yujisato/",
    githubRepo: "https://github.com/yujisatojr/react-portfolio-template"
    // AI_EDITABLE_END
};
