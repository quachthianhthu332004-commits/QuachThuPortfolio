import {
  About,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from '@/types';
import {
  Line,
  Row,
  Text,
} from '@once-ui-system/core';

const person: Person = {
  firstName: "Quach",
  lastName: "Thu",
  name: `Quach Thu`,
  role: "Business Analyst",
  avatar: "/images/avatar2.jpg",
  email: "quachthianhthu332004@gmail.com",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/thuquach/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:quachthianhthu332004@gmail.com`,
    essential: true,
  },
  {
    name: "CV",
    icon: "book",
    link: "https://drive.google.com/drive/folders/1P-Q8VqGg5wwTxtvPL486X-qN2N57PWOn?usp=sharing",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} 's Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Quach Thu, a Business Analyst with a business background, bridging business thinking and system design through structured analysis, process modeling, and requirement engineering.

    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          I come from a Commercial Business background at UEH, where I developed a strong foundation in business thinking and problem-solving. Driven by an interest in how systems operate behind business processes, I transitioned into Business Analysis through hands-on projects and self-learning.
        </p>

        <p>
          I have built experience in eliciting requirements, modeling business processes, and designing system workflows using tools such as BPMN and UML. My focus is on translating business needs into structured, implementable solutions while ensuring clear communication between stakeholders and development teams.
        </p>

        <p>
          You can view more details about my experience here:{" "}
          <a
            href="https://drive.google.com/drive/folders/1P-Q8VqGg5wwTxtvPL486X-qN2N57PWOn?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download my CV
          </a>
        </p>
      </>
    )
  },
  work: {
    display: true,
    title: "Projects",

    experiences: [
      {
        company: "EarthTrek - Trekking Service Platform",
        timeframe: "Dec 2025 – Mar 2026",
        role: "Business Analyst",

        achievements: [
          <>
            Conducted end-to-end business analysis for a trekking platform supporting trip planning, guide booking, cart management, and digital payment.
          </>,

          <>
            Elicited and analyzed business requirements; defined functional scope covering planning, booking, order management, and payment processing.
          </>,

          <>
            Modeled system behavior using BPMN, use case diagrams, and activity diagrams for key user flows.
          </>,

          <>
            Produced BRD, SRS, user stories, and functional/non-functional requirements; built prototype to validate business flows.
          </>,
        ],

        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/BA4E17-N2-NX.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 20,
          },
        ],
      },
      {

        company: "Attendance Management System",
        timeframe: "Dec 2025 – Mar 2026",
        role: "Business Analyst",

        achievements: [
          <>
            Conducted business analysis for a real-world attendance tracking system replacing manual processes for ~1000 students and 80 catechists.
          </>,

          <>
            Elicited and analyzed operational requirements; defined system specifications for QR-based and facial recognition attendance solutions.
          </>,

          <>
            Acted as a liaison between stakeholders and development team, supporting requirement clarification and implementation alignment.
          </>,

          <>
            Participated in system testing and validation; solution was successfully deployed and adopted in real operations.
          </>,
        ],
        images: []
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",

    institutions: [
      {
        name: "MindX Technology School",
        description: (
          <>
            <p>
              <strong>IT Business Analyst Program</strong> (Oct 2025 – Present)
            </p>

            <p>
              Focused on requirement elicitation, BPMN modeling, use case design, and system documentation (BRD, SRS).
            </p>
          </>
        )
      },

      {
        name: "University of Economics Ho Chi Minh City (UEH)",
        description: (
          <>
            <p>
              <strong>Bachelor of Commercial Business</strong> (Aug 2022 – Mar 2026)
            </p>

            <p>
              GPA: 3.8/4.0
            </p>

            <p>
              Consolation Prize – UEH Business Research Program 2024 <br />
              Recognized – Nha Nghien Cuu Tre UEH 2025
            </p>
          </>
        )
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Business Analysis",
        description: (
          <>
            Requirement elicitation, stakeholder communication, BPMN 2.0,
            use case & activity diagrams, user stories, acceptance criteria,
            process mapping and workflow analysis.
          </>
        ),
        tags: [
          { name: "BPMN", icon: "workflow" },
          { name: "UML", icon: "diagram" },
          { name: "User Stories", icon: "document" },
        ],
        images: [],
      },

      {
        title: "Data Analysis",
        description: (
          <>
            Experience with Excel Solver, SPSS, SmartPLS and survey data analysis.
            Applied in academic research and real-world case competitions.
          </>
        ),
        tags: [
          { name: "Excel", icon: "excel" },
          { name: "SPSS", icon: "chart" },
          { name: "SmartPLS", icon: "data" },
        ],
        images: [],
      },

      {
        title: "Tools & Workflow",
        description: (
          <>
            Prototyping user flows using Figma and validating system workflows.
            Familiar with AI-assisted tools to improve productivity.
          </>
        ),
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "AI Tools", icon: "sparkles" },
        ],
        images: [],
      },

      {
        title: "Languages",
        description: (
          <>
            English (IELTS 6.0, 2022) and Chinese (basic level) for communication and
            academic purposes.
          </>
        ),
        tags: [
          { name: "English", icon: "globe" },
          { name: "Chinese", icon: "translate" },
        ],
        images: [],
      },
    ]
  }
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { about, home, newsletter, person, social, work };
